<?php
define('MOB_PAGE',true);
require(dirname(__FILE__)."/global.php");

web_cache($webdb['fenlei_cache_time']);	//调取缓存，直接显示，下面的代码不再执行
 
//SEO
$titleDB['title'] = "{$city_DB[name][$city_id]} ".($webdb['SEO_title']?$webdb['SEO_title']:$webdb['Info_webname']);
$titleDB['keywords']	= "{$city_DB[name][$city_id]} ".($webdb['SEO_keywords']?$webdb['SEO_keywords']:$webdb['metakeywords']);
$titleDB['description']	= "{$city_DB[name][$city_id]} ".($webdb['SEO_description']?$webdb['SEO_description']:$webdb['description']);

//主页个性头部与尾部
get_index_tpl($head_tpl,$foot_tpl);


//获取标签内容
$template_file=getTpl("wapindex");
fetch_label_value(array('pagetype'=>'0','file'=>$template_file,'module'=>$webdb['module_id']));
unset($SQL);
$SQL = build_module_sql();

/**
*推荐的栏目在首页显示
**/
$page||$page=1;
$rows=4;
$min=($page-1)*$rows;
$query = $db->query("SELECT A.* FROM {$pre}fenlei_content A WHERE A.yz='1' $SQL ORDER BY A.hits DESC LIMIT $min,$rows");
while($rs = $db->fetch_array($query)){
	$rs[picurl] && $rs[picurl] = tempdir($rs[picurl]);
	$rs[picurl]=$rs[picurl]?$rs[picurl]:"/images/default/nopic.jpg";
	$rs[posttime]=date("Y-m-d",$rs[full_time]=$rs[posttime]);
	$listdb[]=$rs;
}

if($job=="showmore"){
	if(!$listdb){
		echo "nodate";
	}else{
		foreach($listdb AS $key=>$rs){
			$rs[url]="/f/wapbencandy.php?fid=$rs[fid]&id=$rs[id]";
			$rs[url2]="/f/wapbencandy.php?fid=$rs[fid]";
			echo "<dl>
	    <dt class='L'><a href=\"$rs[url]\"><img src=\"$rs[picurl]\" onerror=\"src='$webdb[www_url]/images/wap/newspic.png'\"/></a></dt>
		<dd class='R'>
		  <h3><a href=\"$rs[url]\">$rs[title]</a></h3>
		  <p class='m-sortname'>栏目分类：<a href=\"$rs[url2]\">$rs[fname]</a></p>
		  <p><span class='L'>$rs[posttime]</span><span class='R'>浏览：$rs[hits]人</span></p>
		  <div class='m-Look'><a href=\"$rs[url]\"><span>浏览</span></a></div>
		</dd>
	  </dl>";
		}
	}
	exit;
}



$listdb_moresort=Info_ListMoreSort($webdb[InfoIndexCSRow],$webdb[InfoIndexCSLeng],$city_id);




//每个栏目的信息数
$InfoNum=get_infonum($city_id);
//require(Mpath."inc/waphead.php");
require($template_file);


 
?>