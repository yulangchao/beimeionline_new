<?php
if(!function_exists('html')){
	die('F');
}

header('Content-Type: text/html; charset='.WEB_LANG);

/**
*处理用户提交的评论
**/
if($action=="post")
{
	
	$_web=preg_replace("/http:\/\/([^\/]+)\/(.*)/is","http://\\1",$WEBURL);
	if($webdb[Info_forbidOutPost]&&!ereg("^$_web",$FROMURL))
	{
		showerr("系统设置不能从外部提交数据");
	}
	
	/*验证码处理*/
	if(!$web_admin&&!$groupdb[comment_img])
	{
		if(!check_imgnum($yzimg))
		{
			die("验证码不符合,评论失败");
		}
	}

	if(!$content)
	{
		die("内容不能为空");
	}


	/*是否允许评论判断处理*/

		$time=$timestamp-3600*24;
		if(!$lfjuid){
			$SQL="ip='$onlineip' AND posttime>$time";
		}else{
			$SQL="uid='$lfjuid' AND posttime>$time";
		}

	
	

	/*是否允许评论自动通过审核判断处理*/
	$yz = $web_admin ? 1 : intval($groupdb[comment_yz]);


	$username=filtrate($username);
	$content=filtrate($content);

	$content=str_replace("@@br@@","<br>",$content);

	//过滤不健康的字
	$username=replace_bad_word($username);
	$content=replace_bad_word($content);

	//处理有人恶意用他人帐号做署名的
	if($username)
	{
		$rs=$userDB->get_passport($username,'username');
		if($rs[uid]!=$lfjuid)
		{
			$username="匿名";
		}
	}
	
	$rss=$db->get_one(" SELECT * FROM {$_pre}content WHERE id='$id' ");
	if(!$rss){
		die("原数据不存在");
	}
	$fid=$rss[fid];

	$username || $username=$lfjid;

		if(is_utf8($content)||is_utf8($username)){
			$content=utf82gbk($content);
			$username=utf82gbk($username);
		}
		if(WEB_LANG=='utf-8'){
			$content=gbk2utf8($content);
			$username=gbk2utf8($username);
		}elseif(WEB_LANG=='big5'){
			require_once(ROOT_PATH."inc/class.chinese.php");
			$cnvert = new Chinese("GB2312","BIG5",$content,ROOT_PATH."./inc/gbkcode/");
			$content = $cnvert->ConvertIT();

			$cnvert = new Chinese("GB2312","BIG5",$username,ROOT_PATH."./inc/gbkcode/");
			$username = $cnvert->ConvertIT();
		}

	$db->query("INSERT INTO `{$_pre}comments` (`cuid`, `type`, `id`, `fid`, `uid`, `username`, `posttime`, `content`, `ip`, `icon`, `yz`) VALUES ('$rss[uid]','0','$id','$fid','$lfjuid','$username','$timestamp','$content','$onlineip','$icon','$yz')");

	$db->query(" UPDATE {$_pre}content SET comments=comments+1 WHERE id='$id' ");
	set_user_log(6);	//用户访问日志
}

/*删除留言*/
elseif($action=="del")
{
	
	$rs=$db->get_one("SELECT * FROM `{$_pre}comments` WHERE cid='$cid'");
	if(!$lfjuid)
	{
		die("你还没登录,无权限");
	}
	elseif(!$web_admin&&$rs[uid]!=$lfjuid&&$rs[cuid]!=$lfjuid)
	{
		die("你没权限");
	}
	if(!$web_admin&&$rs[uid]!=$lfjuid){
		$lfjdb[money]=get_money($lfjdb[uid]);
		if(abs($webdb[DelOtherCommentMoney])>$lfjdb[money]){
			die("你的{$webdb[MoneyName]}不足");
		}
		add_user($lfjdb[uid],-abs($webdb[DelOtherCommentMoney]),'删除团购信息扣分');
	}
	$db->query(" DELETE FROM `{$_pre}comments` WHERE cid='$cid' ");
	$db->query("UPDATE {$_pre}content SET comments=comments-1 WHERE id='$rs[id]' ");
}
elseif($action=="flowers"||$action=="egg")
{
	if(get_cookie("{$action}_$cid")){
		echo "err<hr>";
	}else{
		set_cookie("{$action}_$cid",1,3600);
		$db->query("UPDATE `{$_pre}comments` SET `$action`=`$action`+1 WHERE cid='$cid'");
	}
}
/**
*是否只显示通过验证的评论,或者是全部显示
**/
if(!$webdb[showNoPassComment])
{
	$SQL=" AND A.yz=1 ";
}
else
{
	$SQL="";
}

/**
*每页显示评论条数
**/
$rows=$webdb[showCommentRows]?$webdb[showCommentRows]:8;

if($page<1)
{
	$page=1;
}
$min=($page-1)*$rows;


//$rsdb=$db->get_one("SELECT M.* FROM {$_pre}sort S LEFT JOIN {$_pre}module M ON S.mid=M.id WHERE S.fid='$fid'");

/*评论字数再多也只限制显示1000个字*/
$leng=1000;

$query=$db->query("SELECT SQL_CALC_FOUND_ROWS A.*,B.icon FROM `{$_pre}comments` A LEFT JOIN `{$pre}memberdata` B ON A.uid = B.uid WHERE A.id=$id $SQL ORDER BY A.cid DESC LIMIT $min,$rows");
$RS=$db->get_one("SELECT FOUND_ROWS()");
$totalNum=$RS['FOUND_ROWS()'];
while( $rs=$db->fetch_array($query) )
{
	if(!$rs[username]){
		$detail=explode(".",$rs[ip]);
		$rs[username]="$detail[0].$detail[1].$detail[2].*";
	}

	$rs[posttime]=date("Y-m-d H:i:s",$rs[posttime]);

	$rs[full_content]=$rs[content];

	$rs[content]=get_word($rs[content],$leng);

	if($rs[type]){
		$rs[content]="<img style='margin-top:3px;' src=$webdb[www_url]/images/default/good_ico.gif> ".$rs[content];
	}

	$rs[content]=str_replace("\n","<br>",$rs[content]);

	if($rs[icon]) $rs[icon] = tempdir($rs[icon]);

	$listdb[]=$rs;
}

/**
*评论分布功能
**/
$showpage=getpage("","","?fid=$fid&id=$id",$rows,$totalNum);
$showpage=preg_replace("/\?fid=([\d]+)&id=([\d]+)&page=([\d]+)/is","javascript:getcomment('$webdb[www_url]/tg/job.php?job=comment_ajax&fid=\\1&id=\\2&page=\\3')",$showpage);


require_once(getTpl('comment_ajax'));

?>