<?php
!function_exists('html') && exit('ERR');

ck_power('form_content');

if($job=="list")
{

	if(!$mid){
		$query = $db->query("SELECT * FROM {$_pre}module ORDER BY list DESC,id ASC");
		while($rs = $db->fetch_array($query)){
			@extract($db->get_one("SELECT COUNT(*) AS NUM FROM {$_pre}content WHERE mid='$rs[id]'"));
			$rs[NUM]=$NUM;
			$Mdb[$rs[id]]=$rs;
		}
		get_admin_html('list');
		exit;
	}

	$mid=intval($mid);
	$fidDB = $db->get_one("SELECT * FROM {$_pre}module WHERE id='$mid'");

	$array=unserialize($fidDB[config]);
	$SQL = '';
	if($act=='search'){
		if($keyword){
			if($type=='username'){
				$SQL.=" AND BINARY C.username = '$keyword' ";
			}elseif($type=='id'){
				$SQL.=" AND BINARY C.id = '$keyword' ";
			}elseif($type&&$array[field_db][$type]){
				$SQL.=" AND BINARY D.$type LIKE '%$keyword%' ";
			}
		}
		$search_url="type=$type&keyword=".urlencode($keyword)."&act=$act";
		foreach( $postdb AS $key=>$value)
		{
			if( $value!='' && $array[field_db][$key] )
			{
				$SQL.=" AND D.`$key`='$value' ";
				$rsdb[$key][$value]=" selected ";
			}
			$value=urlencode($value);
			$search_url.="&postdb[{$key}]=$value";
		}
	}
  
	$rows=20;
	if($page<1){
		$page=1;
	}
	$min=($page-1)*$rows;

	
	$query = $db->query("SELECT SQL_CALC_FOUND_ROWS C.*,D.* FROM {$_pre}content C LEFT JOIN {$_pre}content_$mid D ON C.id=D.id WHERE C.mid='$mid' $SQL ORDER BY C.id DESC LIMIT $min,$rows");
	$RS=$db->get_one("SELECT FOUND_ROWS()");
	while($rs = $db->fetch_array($query)){

		foreach( $array[listshow_db] AS $key=>$rs2){
			$rs[$key]=SRC_true_value($array[field_db][$key],$rs[$key]);
		}

		$rs[posttime]=date("Y-m-d",$rs[posttime]);
		$listdb[]=$rs;
	}
	$showpage=getpage("","","$admin_path&job=list&mid=$mid&$search_url",$rows,$RS['FOUND_ROWS()']);
	$type || $type='username';
	$typedb[$type]=' checked ';

	require("head.php");
	require(ROOT_PATH."$dirname/data/form_tpl/admin_list_$mid.htm");
	require("foot.php");
}
elseif($action=="delete")
{
	if($id){
		$rs = $db->get_one("SELECT * FROM {$_pre}content WHERE id='$id'");

		$db->query("DELETE FROM {$_pre}content WHERE id='$id'");
		$db->query("DELETE FROM {$_pre}content_$rs[mid] WHERE id='$id'");
		$db->query("DELETE FROM `{$_pre}reply` WHERE id='$id'");
	}else{
		foreach( $iddb AS $key=>$value){
			$rs = $db->get_one("SELECT * FROM {$_pre}content WHERE id='$value'");
			$db->query("DELETE FROM {$_pre}content WHERE id='$value'");
			$db->query("DELETE FROM {$_pre}content_$rs[mid] WHERE id='$value'");
			$db->query("DELETE FROM `{$_pre}reply` WHERE id='$value'");
		}
	}
	jump("删除成功","$FROMURL",1);
}
elseif($action=="export"){
	if(!$iddb){
		showerr("请选择要导出的数据!");
	}
	$outstr="<table width=\"500\" border=\"1\" align=\"center\" cellpadding=\"5\"><tr>";
	$outstr.="<th bgcolor=\"#A5A0DE\">序号</th>";
	$rsdb=$db->get_one("SELECT * FROM {$_pre}module WHERE id='$mid'");
	$array=unserialize($rsdb[config]);
	$listdb=$array[field_db];
	foreach($listdb AS $key=>$rs2){
		$outstr.="<th bgcolor=\"#A5A0DE\">$rs2[title]</th>";
	}
	$outstr.="</tr>";
	foreach($iddb  AS $key=>$value){
		$show = $db->get_one("SELECT * FROM {$_pre}content_$mid WHERE id='$key'");
		$outstr.="<tr><td align=\"center\">$show[id]</td>";
		foreach($listdb AS $keys=>$rs2){
			$show[$keys]=SRC_true_value($array[field_db][$keys],$show[$keys]);
			if($rs2[form_type]=="upfile"){
				$show[$keys]=$show[$keys]?tempdir($show[$keys]):"";
			}
			$outstr.="<td align=\"center\">$show[$keys]</td>";
		}
		$outstr.="</tr>";
	}
	$outstr.="</table>";	
	ob_end_clean();
	header('Last-Modified: '.gmdate('D, d M Y H:i:s',time()).' GMT');
	header('Pragma: no-cache');
	header('Content-Encoding: none');
	header('Content-Disposition: attachment; filename='.$rsdb[name].'.xls');
	header('Content-type: text/csv');
	echo $outstr;/**/
}
elseif($job=="view")
{
	$query = $db->query("SELECT * FROM {$_pre}module ORDER BY list DESC");
	while($rs = $db->fetch_array($query)){
		$Mdb[$rs[id]]=$rs[name];
	}
	$mid=intval($mid);
	$colordb[$mid]='red;';

	$fidDB=$db->get_one("SELECT * FROM {$_pre}module WHERE id='$mid'");

	$m_config=unserialize($fidDB[config]);

	$rsdb=$db->get_one("SELECT A.*,B.* FROM `{$_pre}content` A LEFT JOIN `{$_pre}content_$fidDB[id]` B ON A.id=B.id WHERE A.id='$id'");

	require_once(ROOT_PATH."inc/encode.php");

	foreach( $m_config[field_db] AS $key=>$rs )
	{
		if($key=='content'){
			continue;
		}
		if($rs[form_type]=='textarea')
		{
			$rsdb[$key]=format_text($rsdb[$key]);
		}
		elseif($rs[form_type]=='ieedit')
		{
			$rsdb[$key]=En_TruePath($rsdb[$key],0);
		}
		elseif($rs[form_type]=='upfile')
		{
			$rsdb[$key]=tempdir($rsdb[$key]);
		}
		elseif($rs[form_type]=='upmorefile')
		{
			$detail=explode("\n",$rsdb[$key]);
			unset($rsdb[$key]);
			foreach( $detail AS $_key=>$value){
				list($_url,$_name)=explode("@@@",$value);
				$_rsdb[$key][name][]=$_name=$_name?$_name:"DownLoad$_key";
				$_rsdb[$key][url][]=$_url=tempdir($_url);
				$rsdb[$key][show][]="<A HREF='$_url' target=_blank>$_name</A>";
			}
			$rsdb[$key]=implode("<br>",$rsdb[$key][show]);
		}
		elseif($rs[form_type]=='radio'||$rs[form_type]=='select'||$rs[form_type]=='checkbox')
		{
			$rsdb[$key]=SRC_true_value($rs,$rsdb[$key]);
		}
	}

	$rsdb[posttime]=date("Y-m-d H:i:s",$rsdb[posttime]);
	require("head.php");
	require(ROOT_PATH."$dirname/data/form_tpl/admin_bencandy_$mid.htm");
	require("foot.php");
}
elseif($job=="yz")
{
	$db->query("UPDATE `{$_pre}content` SET yz='$yz' WHERE id='$id'");
	jump("修改成功","$FROMURL",'0');
}
elseif($job=="reply")
{
	$rsdb=$db->get_one("SELECT * FROM `{$_pre}reply` WHERE id='$id'");
	$rsdb[content]=En_TruePath($rsdb[content],0);
	$rsdb[content]=editor_replace($rsdb[content]);

	get_admin_html('reply');
}
elseif($action=="reply")
{
	$rsdb=$db->get_one("SELECT A.*,U.mobphone FROM `{$_pre}content` A LEFT JOIN `{$pre}memberdata` U ON A.uid=U.uid WHERE A.id='$id'");
	$db->query("DELETE FROM `{$_pre}reply` WHERE id='$id'");

	$postdb[content]=En_TruePath($postdb[content]);

	$db->query("UPDATE `{$_pre}content` SET yz=1 WHERE id='$id'");

	@extract($db->get_one("SELECT rid FROM {$_pre}reply WHERE id='$id' AND mid='$mid'"));
	$db->query("REPLACE INTO `{$_pre}reply` (`rid` , `id` , `mid` , `posttime` , `uid` , `username` , `content` , `ip` ) VALUES ('$rid', '$id', '$mid', '$timestamp', '$userdb[uid]', '$userdb[username]', '$postdb[content]', '$onlineip')");

	//手机短信通知客户
	if($send_sms){
		if(!$rsdb[mobphone]){
			$MSG='客户没有设置手机号码,短信发送失败.';
		}else{
			$mdb=$db->get_one("SELECT * FROM {$_pre}module WHERE id='$mid' ");

			$Title="你好,你在<$webdb[webname]-$mdb[name]>提的问题,管理员已作解答,请尽快上网查阅!";
			if( sms_send($rsdb[mobphone], $Title )===1 ){
				$MSG='短信发送成功';
			}else{
				$MSG='短信发送失败,请检查短信接口,是否帐号有误,或者是余额不足!';
			}
		}
	}else{
		$MSG='回复成功';
	}

	jump($MSG,"$admin_path&job=view&mid=$mid&id=$id",'3');
}
?>