<?php
function Showtg($uid,$nums){
	global $db,$pre;
	$query = $db->query("SELECT * FROM {$pre}tuangou_content WHERE uid='$uid' ORDER BY id DESC LIMIT $nums");
	while($rs = $db->fetch_array($query)){
		$rs[picurl]=tempdir($rs[picurl]);
		$listdb[]=$rs;
	}
	return $listdb;
}
?>

<!--
<?php
print <<<EOT
-->
<div class="maincont1">
	<div class="head head1"><div class="tag">商家活动</div><div class="more"><a href="?m=tg&uid=$uid">更多</a></div></div>
	<div class="cont">		
		<ul class="liscoupons">
<!--
EOT;
unset($hytg);
$hytg=Showtg($uid,8);
foreach($hytg as $rs){
print <<<EOT
-->
			<li>
				<div class="img"><a href="$webdb[www_url]/tg/bencandy.php?fid=$rs[fid]&id=$rs[id]" target="_blank"><img src="$rs[picurl]" onerror="this.src='$webdb[www_url]/images/default/nopic.jpg'" height="120"/></a></div>
				<div class="t"><a href="$webdb[www_url]/tg/bencandy.php?fid=$rs[fid]&id=$rs[id]" target="_blank">$rs[title]</a></div>
				<div class="t">栏目：<a href="$webdb[www_url]/tg/list.php?fid=$rs[fid]" target="_blank">$rs[fname]</a></div>
			</li>
<!--
EOT;
}print <<<EOT
-->
		</ul>
	</div>
</div>
<!--
EOT;
?>
-->