<?php
require(dirname(__FILE__)."/global.php");

if($page<1){
	$page=1;
}
$rows=5;
$min=($page-1)*$rows;
if(!in_array($ordertype,array('hits','id','levelstime'))){
	$ordertype='id';
}

$SQL = " WHERE 1 ";
$SQL .= build_module_sql();

if($ordertype=='levelstime'){
	$SQL .=" AND  A.levels=1 ";
}

//$query = $db->query("SELECT SQL_CALC_FOUND_ROWS A.*,C.renzheng FROM {$_pre}content A LEFT JOIN {$pre}hy_company C ON A.uid=C.uid  $SQL ORDER BY A.$ordertype DESC LIMIT $min,$rows");
$query = $db->query("SELECT SQL_CALC_FOUND_ROWS A.* FROM {$_pre}content A $SQL ORDER BY A.$ordertype DESC LIMIT $min,$rows");
$RS=$db->get_one("SELECT FOUND_ROWS()");
$totalNum=$RS['FOUND_ROWS()'];
while($rs = $db->fetch_array($query)){
	$rs[picurl]=tempdir($rs[picurl]);
	$rs[url]=get_info_url($rs[id],$rs[fid],$rs[city_id]);
	$rs[posttime]=date("Y-m-d H:i",$rs[posttime]);
	$listdb[]=$rs;
}


$showpage=getpage("","","listall.php?ordertype=$ordertype",$rows,$totalNum);

//��ȡ��ǩ����
$template_file=getTpl("listall");
fetch_label_value(array('pagetype'=>'4','file'=>$template_file,'module'=>$webdb['module_id']));


require(ROOT_PATH."inc/head.php");
require($template_file);
require(ROOT_PATH."inc/foot.php");

?>