<?php
require(dirname(__FILE__)."/global.php");

if($IsMob){
	header("location:wapbencandy.php?fid=$fid&id=$id");
	exit;
}

choose_domain();	//域名判断
include_once(Mpath."data{$GLOBALS[webdb][web_dir]}/guide_fid.php");

 

$_erp=$Fid_db[tableid][$fid];
/**
*获取栏目与模块配置参数
**/
$fidDB=$db->get_one("SELECT A.* FROM {$_pre}sort A WHERE A.fid='$fid'");

if(!$fidDB){
	showerr("FID有误!");
}

/**
*模型配置文件
**/
$field_db = $module_DB[$fidDB[mid]][field];


/**
*栏目配置参数
*栏目配置文件用户自定义的变量
*栏目当中,用户自定义变量哪些使用了在线编辑器要对他们做附件真实地址作处理
**/
$fidDB[config]=unserialize($fidDB[config]);
$CV=$fidDB[config][field_value];
$_array=array_flip($fidDB[config][is_html]);
foreach( $fidDB[config][field_db] AS $key=>$rs){
	if(in_array($key,$_array)){
		$CV[$key]=En_TruePath($CV[$key],0);
	}elseif($rs[form_type]=='upfile'){
		$CV[$key]=tempdir($CV[$key]);
	}
}


$db->query("UPDATE {$_pre}content$_erp SET hits=hits+1,lastview='$timestamp' WHERE id='$id'");


/**
*获取信息正文的内容
**/
$rsdb=$db->get_one("SELECT B.*,A.* FROM `{$_pre}content$_erp` A LEFT JOIN `{$_pre}content_$fidDB[mid]` B ON A.id=B.id WHERE A.id='$id'");

if($rsdb[city_id] && $rsdb[city_id]!=$city_id){
	showerr("city出错了!");
}

if(!$rsdb){
	showerr("内容不存在");
}
elseif($rsdb[fid]!=$fid){
	showerr("FID有误!!!");
}
elseif($rsdb[yz]!=1&&!$web_admin){
	if($rsdb[yz]==2){
		showerr("回收站的内容,你无法查看");
	}else{
		showerr("还没通过审核");
	}
}


if($rsdb[idcard_img]&&$rsdb[idcard_yz]){
	$rsdb[idcard_img]=tempdir($rsdb[idcard_img]);
	$rsdb[idcard_show]=" <a href='javascript:' ><img src='$rsdb[idcard_img]' border='0' width='30' height='30'></a> ";
}
if($rsdb[permit_img]&&$rsdb[permit_yz]){
	$rsdb[permit_img]=tempdir($rsdb[permit_img]);
	$rsdb[permit_show]=" <a href='javascript:' ><img src='$rsdb[permit_img]' border='0' width='30' height='30'></a> ";
}
if($rsdb[othercard_img]&&$rsdb[othercard_yz]){
	$rsdb[othercard_img]=tempdir($rsdb[othercard_img]);
	$rsdb[othercard_show]=" <a href='javascript:' ><img src='$rsdb[othercard_img]' border='0' width='30' height='30'></a> ";
}

/**
*内容页的风格优先于栏目的风格,栏目的风格优先于系统的风格
**/
if($rsdb[style]){
	$STYLE=$rsdb[style];
}elseif($fidDB[style]){
	$STYLE=$fidDB[style];
}


//SEO
$titleDB[title]			= filtrate(strip_tags("$rsdb[title] - {$city_DB[name][$city_id]}$fidDB[name] - $webdb[Info_webname]"));
$titleDB[keywords]		= filtrate(strip_tags($rsdb[keywords]));
$titleDB[description]	= filtrate(get_word(preg_replace('/<([^<]*)>/is',"",$rsdb[content]),200).strip_tags("$fidDB[metadescription] $webdb[Info_metadescription]"));


/**
*栏目指定了哪些用户组才能看信息内容
**/
if($fidDB[allowviewcontent]){
	if( !$web_admin&&!in_array($groupdb[gid],explode(",",$fidDB[allowviewcontent])) ){
		if(!$lfjid||!in_array($lfjid,explode(",",$fidDB[admin]))){	
			showerr("你所在用户组,无权浏览");
		}
	}
}


/**
*对信息内容字段的处理
**/
$Module_db->hidefield=true;
$Module_db->classidShowAll=true;
$Module_db->showfield($field_db,$rsdb,'show');

$rsdb[ipaddress]=base64_encode($rsdb[ip]);

$rsdb[_mobphone]=$rsdb[mobphone];
$rsdb[_telephone]=$rsdb[telephone];
$rsdb[_msn]=$rsdb[msn];
$rsdb[_oicq]=$rsdb[oicq];
$rsdb[_email]=$rsdb[email];

if($webdb[Info_ForbidGuesViewContact]&&$groupdb['gid']==2){
	$rsdb[telephone]=$rsdb[mobphone]=$rsdb[oicq]=$rsdb[msn]=$rsdb[email]="<font color='#cccccc'>**游客无权查看**</font>";
}elseif($webdb[Info_ForbidMemberViewContact]&&$groupdb['gid']==8){
	$rsdb[telephone]=$rsdb[mobphone]=$rsdb[oicq]=$rsdb[msn]=$rsdb[email]="<font color='#cccccc'>**普通会员无权查看**</font>";
}elseif($webdb[Info_ImgShopContact]){
	$rsdb[telephone] && $rsdb[telephone]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[telephone])."'>";
	$mob_area=get_mob_area($rsdb[mobphone]);
	$rsdb[mobphone] && $rsdb[mobphone]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[mobphone])."'> $mob_area <A HREF='$city_url/job.php?job=mob&vid=".base64_encode($rsdb[mobphone])."' target='_blank'>查询更多</A>";
	$rsdb[oicq] && $rsdb[oicq]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[oicq])."'>";
	$rsdb[msn] && $rsdb[msn]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[msn])."'>";
	$rsdb[email] && $rsdb[email]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[email])."'>";
}else{
	$mob_area=get_mob_area($rsdb[mobphone]);
	$rsdb[mobphone].=" $mob_area <A HREF='$city_url/job.php?job=mob&vid=".base64_encode($rsdb[mobphone])."' target='_blank'>查询更多</A>";
}


$rsdb[posttime]=date("Y-m-d H:i:s",$rsdb[posttime]);

$rsdb[picurl] && $rsdb[picurl]=tempdir($rsdb[picurl]);

//内容页个性头部与尾部
get_show_tpl($head_tpl,$foot_tpl,$main_tpl);

//获取标签内容
$template_file=getTpl("bencandy_$fidDB[mid]",$main_tpl);
fetch_label_value(array('pagetype'=>'3','file'=>$template_file,'module'=>$webdb['module_id']));


if($rsdb[uid]){
	$userdb=$db->get_one("SELECT * FROM {$pre}memberdata WHERE uid='$rsdb[uid]'");
	$userdb[username]=$rsdb[username];
	$userdb[regdate]=date("y-m-d H:i",$userdb[regdate]);
	$userdb[lastvist]=date("y-m-d H:i",$userdb[lastvist]);
	$userdb[icon]=tempdir($userdb[icon]);
	include_once(ROOT_PATH."data{$GLOBALS[webdb][web_dir]}/level.php");
	$userdb[level]=$ltitle[$userdb[groupid]];
}else{
	$userdb[username]=preg_replace("/([\d]+)\.([\d]+)\.([\d]+)\.([\d]+)/is","\\1.\\2.*.*",$rsdb[ip]);
	$userdb[level]="游客";
}

$rsdb[showarea]=get__area($rsdb[city_id],$rsdb[zone_id],$rsdb[street_id]);
$rsdb[ipfrom]=ipfrom($rsdb[ip]);
if($rsdb[endtime]){
	if($rsdb[endtime]<$timestamp){
		$rsdb[showday]="已过期";
	}else{
		$rsdb[showday]=ceil(($rsdb[endtime]-$timestamp)/86400);
		$rsdb[showday]="还剩{$rsdb[showday]}天 ";
	}
}else{
	$rsdb[showday]="不限";
}

$rsdb[username]=(!$rsdb[username])?"*游客*":"$rsdb[username]";

unset($picdb);
if($rsdb[picnum]>1){
	$query = $db->query("SELECT * FROM {$_pre}pic WHERE id='$id'");
	while($rs = $db->fetch_array($query)){
		$rs[imgurl]=tempdir($imgurl=$rs[imgurl]);
		$rs[picurl]=eregi("^http:",$imgurl)?$rs[imgurl]:"$rs[imgurl].gif";
		$picdb[]=$rs;
	}
}



$rsdb[linkman]=$rsdb[linkman]?$rsdb[linkman]:$rsdb[username];

require(Mpath."inc/head.php");
require($template_file);
require(Mpath."inc/foot.php");


 

function get__area($city_id,$zone_id,$street_id){
	global $city_DB,$fid;
	if(!$city_id){
		return ;
	}
	if($zone_id||$street_id){
		include(ROOT_PATH."data{$GLOBALS[webdb][web_dir]}/zone/{$city_id}.php");
	}
	$rs[]="<A HREF='".get_info_url('',$fid,$city_id)."'>{$city_DB[name][$city_id]}</A>";
	$zone_id && $rs[]="<A HREF='".get_info_url('',$fid,$city_id,$zone_id)."'>{$zone_DB[name][$zone_id]}</A>";
	$street_id && $rs[]="<A HREF='".get_info_url('',$fid,$city_id,$zone_id,$street_id)."'>{$street_DB[name][$street_id]}</A>";
	$show=implode(" > ",$rs);
	return $show;
}

?>