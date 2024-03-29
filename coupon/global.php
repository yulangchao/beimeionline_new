<?php
define('Mpath',dirname(__FILE__).'/');
define( 'Mdirname' , preg_replace("/(.*)\/([^\/]+)/is","\\2",str_replace("\\","/",dirname(__FILE__))) );
define('SYS_TYPE','coupon');

require_once(Mpath."../inc/common.inc.php");
require_once(Mpath."data{$GLOBALS[webdb][web_dir]}/config.php");			//系统全局变量
require_once(Mpath."data{$GLOBALS[webdb][web_dir]}/all_fid.php");			//栏目的名称
require_once(Mpath."data{$GLOBALS[webdb][web_dir]}/module_db.php");			//模块的名称
require_once(Mpath."inc/function.php");
require_once(Mpath."inc/module.class.php");
require_once(ROOT_PATH."inc/self.tpl.php");		//个性模板函数


@include_once(ROOT_PATH."data{$GLOBALS[webdb][web_dir]}/ad_cache.php");	//全站广告变量缓存文件
@include_once(ROOT_PATH."data{$GLOBALS[webdb][web_dir]}/label_hf.php");	//标签的头与底的变量值
@include_once(ROOT_PATH."data{$GLOBALS[webdb][web_dir]}/module.php");		//模块系统的参数变量值




$_pre="{$pre}{$webdb[module_pre]}";					//数据表前缀

$Module_db=new Module_Field(Mpath);						//自定义模型相关

$Murl=$webdb[_www_url].'/'.Mdirname;					//本模块的访问地址
$Mdomain=$ModuleDB[$webdb[module_pre]][domain]?$ModuleDB[$webdb[module_pre]][domain]:$Murl;



/**
*前台是否开放
**/
if($webdb[module_close])
{
	$webdb[Info_closeWhy]=str_replace("\r\n","<br>",$webdb[Info_closeWhy]);
	showerr("本系统暂时关闭:$webdb[Info_closeWhy]");
}

unset($foot_tpl,$head_tpl,$index_tpl,$list_tpl,$bencandy_tpl);
$ch=intval($ch);
$fid=intval($fid);
$id=intval($id);
$page=intval($page);
$city_id=intval($city_id);


function list_coupon($rows=8,$type='new',$fid=0){
	global $db,$_pre,$city_id;
	if($city_id){
		$SQL=" WHERE A.city_id='$city_id' ";
	}else{
		$SQL=" WHERE A.city_id='0' ";
	}
	if($fid){
		$SQL=" AND A.fid='$fid' ";
	}
	if($type=='new'){
		$order="A.id";
	}elseif($type=='hot'){
		$order="A.hits";
	}
	$query = $db->query("SELECT B.*,A.* FROM {$_pre}content A LEFT JOIN {$_pre}content_1 B ON A.id=B.id $SQL ORDER BY $order DESC LIMIT $rows");
	while($rs = $db->fetch_array($query)){
		$rs[picurl] && $rs[picurl] = tempdir($rs[picurl]);
		$rs[posttime]=date("Y-m-d H:i",$rs[fulltime]=$rs[posttime]);
		$listdb[]=$rs;
	}
	return $listdb;
}
?>