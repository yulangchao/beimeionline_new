<?php
require_once("global.php");
$city_DB[name][0]='ȫ��';

$rows=15;

if(!$page){
	$page=1;
}

$min=($page-1)*$rows;


$query = $db->query("SELECT SQL_CALC_FOUND_ROWS * FROM {$_pre}content WHERE uid=$lfjuid ORDER BY id DESC LIMIT $min,$rows");

$RS=$db->get_one("SELECT FOUND_ROWS()");
$totalNum=$RS['FOUND_ROWS()'];

while($rs = $db->fetch_array($query))
{
	$rs[posttime]=date("Y-m-d H:i:s",$rs[posttime]);

	$rs[num] = $rs[totaluser] ? "<a href='wapjoinlist.php?cid=$rs[id]'>��({$rs[totaluser]})��,�鿴</a>" : '0' ;

	$rs[ifyz] = $rs[yz]?'<font color="red">����</font>':'δ��';

	$listdb[]=$rs;
}


$showpage=getpage('','',"?job=$job",$rows,$totalNum);


require(ROOT_PATH."member/waphead.php");
require(dirname(__FILE__)."/template/waplist.htm");
require(ROOT_PATH."member/wapfoot.php");
?>