<?php
function_exists('html') OR exit('ERR');

ck_power('join');

if($job=='yz'){
	$db->query("UPDATE {$_pre}join SET yz='$yz' WHERE id='$id'");

	$rsdb=$db->get_one("SELECT B.*,A.* FROM {$_pre}join A LEFT JOIN {$_pre}content B ON A.cid=B.id WHERE A.id='$id'");
	if($yz==1){
		$money=get_money($rsdb[uid]);
		if($money<abs($rsdb[money])){
			showerr("��ǰ�û���{$webdb[MoneyName]}����,����$money{$webdb[MoneyDW]},���Բ����Զһ�����Ʒ!");
		}
		
		$tts = $db->get_one("SELECT * FROM `{$_pre}content_1` WHERE id='$cid'");

		if($tts[giftnum]>0){
			$db->query("UPDATE {$_pre}content_1 SET giftnum=$tts[giftnum]-1 WHERE id='$cid'");
		}else{
			showerr("��ǰ���Ϊ 0,���޸���Ʒ�������!");
		}
		
		add_user($rsdb[uid],-abs($rsdb[money]),'�һ���Ʒ�۷�');
	}

}elseif($act=='del'){
	foreach($iddb AS $key=>$value){
		$rs=$db->get_one("SELECT * FROM {$_pre}join WHERE id='$value'");

		$db->query("UPDATE {$_pre}content SET totaluser=totaluser-1 WHERE id='$rs[cid]'");

		$db->query("DELETE FROM {$_pre}join WHERE id='$value'");
		$db->query("DELETE FROM {$_pre}content_2 WHERE id='$value'");
	}
}

$rows=15;

if(!$page)
{
	$page=1;
}
$min=($page-1)*$rows;

unset($listdb,$i);



$query = $db->query("SELECT SQL_CALC_FOUND_ROWS B.*,A.* FROM {$_pre}join A LEFT JOIN {$_pre}content_2 B ON A.id=B.id  ORDER BY A.id DESC LIMIT $min,$rows");

$RS=$db->get_one("SELECT FOUND_ROWS()");
$totalNum=$RS['FOUND_ROWS()'];
$showpage=getpage("","","$admin_path&job=$job",$rows,$totalNum);

while($rs = $db->fetch_array($query))
{

	$rs[C]=$db->get_one("SELECT * FROM {$_pre}content WHERE id='$rs[cid]'");
	$rs[posttime]=date("Y-m-d H:i",$rs[posttime]);
	$rs[yzshow]=$rs[yz]?"<A HREF='$admin_path&job=yz&id=$rs[id]&yz=0' style='color:red;'>�ѷ���</A>":"<A HREF='$admin_path&job=yz&id=$rs[id]&yz=1' style='color:blue;'  onclick=\"return confirm('��ȷ��Ҫͨ�����,����������Ʒ��?��Ҫ�۳�����{$webdb[MoneyName]}{$rs[C][money]}{$webdb[MoneyDW]}');\">δ����</A>";
	$listdb[]=$rs;
}

get_admin_html('list');
?>