<?php
require_once(dirname(__FILE__).'/global.php');

if(!$lfjid){
	showerr("你还没登录");
	
}

if($web_admin){
	$power=3;
}elseif($lfjdb['grouptype']==1){
	$power=2;
}else{
	$power=1;
}

preg_match("/(.*)\/(index\.php|)\?main=(.+)/is",$WEBURL,$UrlArray);
$MainUrl=$UrlArray[3]?$UrlArray[3]:"map.php?uid=$lfjuid";
if(eregi('^http',$MainUrl)&&!eregi("^$webdb[www_url]",$MainUrl)){
	showerr('URL被禁止的!');
}

if(!$nojump&&$webdb[_www_url]!=preg_replace("/http:\/\/([^\/]+)\/(.*)/is","http://\\1",$WEBURL)){
	//不允许用二级域名访问会员中心
	$url = strstr($WEBURL,'/member/');
	if(ereg('\/$',$url)){
		$url.="?nojump=1";
	}elseif(ereg('index\.php/$',$url)){
		$url.="?nojump=1";
	}elseif(ereg('\.php$',$url)){
		$url.="?nojump=1";
	}else{
		$url.="&nojump=1";
	}
	echo "<META HTTP-EQUIV=REFRESH CONTENT='0;URL=$webdb[_www_url]".$url."'>";
	exit;
}
unset($menudb,$menudb3);




$lfjdb[grouptype]=='-1' && $lfjdb[grouptype]=0; //会员申请商铺待认证前这个值是-1，所以要把他当作个人会员看待.
//设法获取后台自定义菜单
$query = $db->query("SELECT * FROM {$pre}admin_menu WHERE groupid='-$lfjdb[groupid]' AND fid=0 AND ifcompany='$lfjdb[grouptype]' ORDER BY list DESC");
while($rs = $db->fetch_array($query)){
	$query2 = $db->query("SELECT * FROM {$pre}admin_menu WHERE fid='$rs[id]' AND ifcompany='$lfjdb[grouptype]' ORDER BY list DESC");
	while($rs2 = $db->fetch_array($query2)){
		//为兼容程序放在二级目录
		eregi("^\/",$rs2['linkurl']) && $rs2['linkurl'] = $webdb[_www_url].$rs2['linkurl'];
		
		//移动版文件前面加上wap
		$rs2['linkurl']	= preg_replace("/(\/|)([_a-z0-9]+)\.php/is","\\1wap\\2.php",$rs2['linkurl']);

		$menudb3[$rs[name]][$rs2[name]]['link']=$rs2['linkurl'];
	}
}


//后台不存在自定义菜单,则用默认的
if(!$menudb3){

	require_once(dirname(__FILE__).'/wapmenu.php');

	//获取模块系统的会员菜单
	unset($menudb1,$menudb2);
	$query = $db->query("SELECT * FROM {$pre}module WHERE type=2 AND ifclose=0 ORDER BY list DESC");
	while($rs = $db->fetch_array($query)){
		if($rs['pre']=='hy_'&&$webdb['ForbidUpHy']&&$lfjdb['grouptype']!=1){
			continue;
		}
		$array=@include(ROOT_PATH."$rs[dirname]/member/wapmenu.php");
		foreach($array AS $key=>$value){
			if($value['power']==2&&!$lfjdb[grouptype]&&!$web_admin){
				continue;	//企业功能不显示在会员菜单那里
			}
			$value['link']="$webdb[_www_url]/$rs[dirname]/member/".$value['link'];
			$menudb["$rs[name]"][$key]=$value;
			
			if($rs['ifsys']){
				$menudb1["$rs[name]"][$key]=$value;
			}else{
				$menudb2["$rs[name]"][$key]=$value;
			}
		}		
	}
}

//require(get_member_tpl('index'));
require("template/wap/index.htm");

//处理内网的问题,内网的话$webdb[www_url]='/.';
if($webdb[www_url]=='/.'){
	$content=str_replace('/./','/',ob_get_contents());
	ob_end_clean();
	echo $content;
}

?>