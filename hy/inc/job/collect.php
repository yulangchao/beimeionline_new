<?php
if(!function_exists('html')){
die('F');
}
if(!$lfjid){
	showerr("请先登录");
}elseif(!$id){
	showerr("ID不存在");
}
if($db->get_one("SELECT * FROM `{$_pre}collection` WHERE `id`='$id' AND uid='$lfjuid'")){
	showerr("请不要重复收藏本条信息",1); 
}
if(!$web_admin){
	$rs=$db->get_one("SELECT COUNT(*) AS NUM FROM `{$_pre}collection` WHERE uid='$lfjuid'");
	if($rs[NUM]>$groupdb[post_info_collection_num]){
		showerr("你最多只能收藏{$groupdb[post_info_collection_num]}条信息",1);
	}
}
$db->query("INSERT INTO `{$_pre}collection` (  `id` , `uid` , `posttime`) VALUES ('$id','$lfjuid','$timestamp')");

refreshto("$webdb[_www_url]/member/?main=$Murl/member/collection.php","收藏成功!",1);
?>