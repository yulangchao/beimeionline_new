<?php
require(dirname(__FILE__)."/global.php");

if($IsMob){
	header("location:wapbencandy.php?fid=$fid&id=$id");
	exit;
}

choose_domain();	//�����ж�
include_once(Mpath."data/guide_fid.php");

 

$_erp=$Fid_db[tableid][$fid];
/**
*��ȡ��Ŀ��ģ�����ò���
**/
$fidDB=$db->get_one("SELECT A.* FROM {$_pre}sort A WHERE A.fid='$fid'");

if(!$fidDB){
	showerr("FID����!");
}

/**
*ģ�������ļ�
**/
$field_db = $module_DB[$fidDB[mid]][field];


/**
*��Ŀ���ò���
*��Ŀ�����ļ��û��Զ���ı���
*��Ŀ����,�û��Զ��������Щʹ�������߱༭��Ҫ��������������ʵ��ַ������
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
*��ȡ��Ϣ���ĵ�����
**/
$rsdb=$db->get_one("SELECT B.*,A.* FROM `{$_pre}content$_erp` A LEFT JOIN `{$_pre}content_$fidDB[mid]` B ON A.id=B.id WHERE A.id='$id'");

if($rsdb[city_id] && $rsdb[city_id]!=$city_id){
	showerr("city������!");
}

if(!$rsdb){
	showerr("���ݲ�����");
}
elseif($rsdb[fid]!=$fid){
	showerr("FID����!!!");
}
elseif($rsdb[yz]!=1&&!$web_admin){
	if($rsdb[yz]==2){
		showerr("����վ������,���޷��鿴");
	}else{
		showerr("��ûͨ�����");
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
*����ҳ�ķ����������Ŀ�ķ��,��Ŀ�ķ��������ϵͳ�ķ��
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
*��Ŀָ������Щ�û�����ܿ���Ϣ����
**/
if($fidDB[allowviewcontent]){
	if( !$web_admin&&!in_array($groupdb[gid],explode(",",$fidDB[allowviewcontent])) ){
		if(!$lfjid||!in_array($lfjid,explode(",",$fidDB[admin]))){	
			showerr("�������û���,��Ȩ���");
		}
	}
}


/**
*����Ϣ�����ֶεĴ���
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
	$rsdb[telephone]=$rsdb[mobphone]=$rsdb[oicq]=$rsdb[msn]=$rsdb[email]="<font color='#cccccc'>**�ο���Ȩ�鿴**</font>";
}elseif($webdb[Info_ForbidMemberViewContact]&&$groupdb['gid']==8){
	$rsdb[telephone]=$rsdb[mobphone]=$rsdb[oicq]=$rsdb[msn]=$rsdb[email]="<font color='#cccccc'>**��ͨ��Ա��Ȩ�鿴**</font>";
}elseif($webdb[Info_ImgShopContact]){
	$rsdb[telephone] && $rsdb[telephone]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[telephone])."'>";
	$mob_area=get_mob_area($rsdb[mobphone]);
	$rsdb[mobphone] && $rsdb[mobphone]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[mobphone])."'> $mob_area <A HREF='$city_url/job.php?job=mob&vid=".base64_encode($rsdb[mobphone])."' target='_blank'>��ѯ����</A>";
	$rsdb[oicq] && $rsdb[oicq]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[oicq])."'>";
	$rsdb[msn] && $rsdb[msn]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[msn])."'>";
	$rsdb[email] && $rsdb[email]="<img src='$city_url/job.php?job=img&vid=".base64_encode($rsdb[email])."'>";
}else{
	$mob_area=get_mob_area($rsdb[mobphone]);
	$rsdb[mobphone].=" $mob_area <A HREF='$city_url/job.php?job=mob&vid=".base64_encode($rsdb[mobphone])."' target='_blank'>��ѯ����</A>";
}


$rsdb[posttime]=date("Y-m-d H:i:s",$rsdb[posttime]);

$rsdb[picurl] && $rsdb[picurl]=tempdir($rsdb[picurl]);


//����ҳ����ͷ����β��
get_show_tpl($head_tpl,$foot_tpl,$main_tpl);

//��ȡ��ǩ����
$template_file=getTpl("bencandy_$fidDB[mid]",$main_tpl);
fetch_label_value(array('pagetype'=>'3','file'=>$template_file,'module'=>$webdb['module_id']));



if($rsdb[uid]){
	$userdb=$db->get_one("SELECT * FROM {$pre}memberdata WHERE uid='$rsdb[uid]'");
	$userdb[username]=$rsdb[username];
	$userdb[regdate]=date("y-m-d H:i",$userdb[regdate]);
	$userdb[lastvist]=date("y-m-d H:i",$userdb[lastvist]);
	$userdb[icon]=tempdir($userdb[icon]);
	include_once(ROOT_PATH."data/level.php");
	$userdb[level]=$ltitle[$userdb[groupid]];
}else{
	$userdb[username]=preg_replace("/([\d]+)\.([\d]+)\.([\d]+)\.([\d]+)/is","\\1.\\2.*.*",$rsdb[ip]);
	$userdb[level]="�ο�";
}

$rsdb[showarea]=get__area($rsdb[city_id],$rsdb[zone_id],$rsdb[street_id]);
$rsdb[ipfrom]=ipfrom($rsdb[ip]);
if($rsdb[endtime]){
	if($rsdb[endtime]<$timestamp){
		$rsdb[showday]="�ѹ���";
	}else{
		$rsdb[showday]=ceil(($rsdb[endtime]-$timestamp)/86400);
		$rsdb[showday]="��ʣ{$rsdb[showday]}�� ";
	}
}else{
	$rsdb[showday]="����";
}

$rsdb[username]=(!$rsdb[username])?"*�ο�*":"$rsdb[username]";

unset($picdb);
if($rsdb[picnum]>0){
	$query = $db->query("SELECT * FROM {$_pre}pic WHERE id='$id'");
	while($rs = $db->fetch_array($query)){
		$rs[imgurl]=tempdir($imgurl=$rs[imgurl]);
		$rs[picurl]=eregi("^http:",$imgurl)?$rs[imgurl]:"$rs[imgurl].gif";
		$picdb[]=$rs;
	}
}

if($module_DB[$fidDB[mid]][config2]){
	$fendb=$module_DB[$fidDB[mid]][config2];
	$fendb[fen1][name] || $fendb[fen1][name]="����";
	$fendb[fen2][name] || $fendb[fen2][name]="����";
	$fendb[fen3][name] || $fendb[fen3][name]="����";
	$fendb[fen4][name] || $fendb[fen4][name]="��λ";
	$fendb[fen5][name] || $fendb[fen5][name]="ϲ���̶�";

	$fendb[fen1][set] || $fendb[fen1][set]="1=��\r\n2=һ��\r\n3=��\r\n4=�ܺ�\r\n5=�ǳ���";
	$fendb[fen2][set] || $fendb[fen2][set]="1=��\r\n2=һ��\r\n3=��\r\n4=�ܺ�\r\n5=�ǳ���";
	$fendb[fen3][set] || $fendb[fen3][set]="1=��\r\n2=һ��\r\n3=��\r\n4=�ܺ�\r\n5=�ǳ���";
	$fendb[fen4][set] || $fendb[fen4][set]="1=����\r\n2=����\r\n3=��\r\n4=�ܹ�";
	$fendb[fen5][set] || $fendb[fen5][set]="1=��ϲ��\r\n2=����ν\r\n3=ϲ��\r\n4=��ϲ��";

	$fen1=setfen("fen1",$fendb[fen1][name],$fendb[fen1][set]);
	$fen2=setfen("fen2",$fendb[fen2][name],$fendb[fen2][set]);
	$fen3=setfen("fen3",$fendb[fen3][name],$fendb[fen3][set]);
	$fen4=setfen("fen4",$fendb[fen4][name],$fendb[fen4][set]);
	$fen5=setfen("fen5",$fendb[fen5][name],$fendb[fen5][set]);
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
		include(ROOT_PATH."data/zone/{$city_id}.php");
	}
	$rs[]="<A HREF='".get_info_url('',$fid,$city_id)."'>{$city_DB[name][$city_id]}</A>";
	$zone_id && $rs[]="<A HREF='".get_info_url('',$fid,$city_id,$zone_id)."'>{$zone_DB[name][$zone_id]}</A>";
	$street_id && $rs[]="<A HREF='".get_info_url('',$fid,$city_id,$zone_id,$street_id)."'>{$street_DB[name][$street_id]}</A>";
	$show=implode(" > ",$rs);
	return $show;
}
function setfen($name,$title,$set){
	$detail=explode("\r\n",$set);
	foreach( $detail AS $key=>$value){
		$d=explode("=",$value);
		$shows.="<option value='$d[0]' style='color:blue;'>$d[1]</option>";
	}
	$shows=" <select name='$name' id='$name'><option value=''>-{$title}-</option>$shows</select>";
	//$shows="{$title}:<select name='$name' id='$name'><option value=''>��ѡ��</option>$shows</select>";
	return $shows;
}
?>