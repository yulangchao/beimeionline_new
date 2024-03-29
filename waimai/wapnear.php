<?php
define('MOB_PAGE',true);
require(dirname(__FILE__)."/global.php");



web_cache($webdb['shop_cache_time']);	//调取缓存，直接显示，下面的代码不再执行

//SEO
$titleDB['title'] = "{$city_DB[name][$city_id]} ".($webdb['SEO_title']?$webdb['SEO_title']:$webdb['Info_webname']);
$titleDB['keywords']	= "{$city_DB[name][$city_id]} ".($webdb['SEO_keywords']?$webdb['SEO_keywords']:$webdb['metakeywords']);
$titleDB['description']	= "{$city_DB[name][$city_id]} ".($webdb['SEO_description']?$webdb['SEO_description']:$webdb['description']);

$rows=30;
$SQL = " WHERE 1 ";
$sql_list="A.list";
$sql_order="DESC";

if($city_id){
	$SQL .= " AND A.city_id='$city_id' ";
}
if($zone_id){
	$SQL .= " AND A.zone_id='$zone_id' ";
}
if($street_id){
	$SQL .= " AND A.street_id='$street_id' ";
}
if($orders){
	$orders=filtrate($orders);
	$sql_list="A.$orders";
}
$listdb=array();
if($page<1){
	$page=1;
}
$min=($page-1)*$rows;

if($mylat){
	$tsdb=array();
	$lonA=$mylon;
	$latA=$mylat;
	$i=0;
	require(ROOT_PATH."inc/gps.inc.php");
	$dw  = new GPS();
	$query=$db->query("SELECT SQL_CALC_FOUND_ROWS A.*,C.title AS companyname,C.renzheng  FROM {$_pre}company A LEFT JOIN {$pre}hy_company C ON A.uid=C.uid $SQL ORDER BY $sql_list $sql_order");
	while( $rs=$db->fetch_array($query) ){
		
		$rs[content]=@preg_replace('/<([^<]*)>/is',"",$rs[content]);	//把HTML代码过滤掉
		$rs[content]=get_word($rs[full_content]=$rs[content],100);
		$rs[title]=get_word($rs[full_title]=$rs[title],50);
		if($rs['list']>$timestamp){
			$rs[title]=" <font color='$webdb[Info_TopColor]'>$rs[title]</font> <img src='$webdb[www_url]/images/default/icotop.gif' border=0>";
		}elseif($rs['list']>$rs[posttime]){
			//置顶过期的信息,需要恢复原来发布日期以方便排序,放在后面
			$db->query("UPDATE {$_pre}company SET list='$rs[posttime]' WHERE id='$rs[id]'");
		}
		$rs[posttime]=date("Y-m-d",$rs[full_time]=$rs[posttime]);
		if($rs[picurl]){
			$rs[picurl]=tempdir($rs[picurl]);
		}
		$Module_db->showfield($field_db,$rs,'list');
		$rs[url]=get_info_url($rs[id],$rs[fid],$rs[city_id]);
		
		
		
		list($latB,$lonB)=explode(",",$rs[maps]);
		$rs[width]=$dw->distance($latA, $lonA, $latB, $lonB);
		$rs[width1]=@floor($rs[width] / 1000);
		$rs[width2]=@floor($rs[width] % 1000);
		if($rs[width1]<2000){//2000千米范围内
			$i++;
			if($i>$rows) break;
			$tsdb[]=$rs;
			
		}
	}
	$tsdb=multi_array_sort($tsdb,'width');//升序排列
	if(!$tsdb){
		echo "nodate";
	}else{
		foreach($tsdb AS $key=>$ts){
		   $thisPC=ge_pingfen_pc($ts[id]);
		   $ts[arrive_time]||$ts[arrive_time]=0;
		   if($ts[width1]>0){
			   $kilometres = "<font style='color:red;'>{$ts[width1]}</font>公里";
		   }
			$metres = "<font style='color:red;'>{$ts[width2]}</font>米";
		   $str ='';
		   $str .= "<dl class='ListHy'>
			<dt>
				<div class='img'><a href='wapshowhy.php?fid=$ts[fid]&id=$ts[id]'><img src='$ts[picurl]' onError=\"this.src='$webdb[www_url]/images/default/nopic.jpg'\"/></a></div>
				<div class='state'>营业中</div>
			</dt>
			<dd>
				<div class='title'><a href='wapshowhy.php?fid=$ts[fid]&id=$ts[id]'><em>$ts[title]</em><span>查看商家</span></a></div>
				<div class='xingxing'><span style='width:{$thisPC}%;'></span></div>
		<div class='showthismap'>距离约<em>{$kilometres}{$metres}</em></div>
				<div class='number'>
					<span>{$ts[price]}元起送</span>
					<span>{$ts[arrive_time]}分钟</span>
					<span>配送费{$ts[sendprice]}元</span>
				</div>
				<div class='phone'><span>电话：{$ts[telphoto]}</span></div>
				<div class='address'>地址：{$ts[address]}</div>
			</dd>
			</dl>";
			echo $str;	
		}
	}	
	exit;
}


function multi_array_sort($multi_array,$sort_key,$sort=SORT_ASC){
	if(is_array($multi_array)){
		foreach ($multi_array as $row_array){
			if(is_array($row_array)){
				$key_array[] = $row_array[$sort_key];
			}else{
				return false; 
			}
		}
	}else{
		return false;
	}
	array_multisort($key_array,$sort,$multi_array);
	return $multi_array;
}








if($job=="showmore"){	
	if(!$listdb){
		echo "nodate";
	}else{
		foreach($listdb AS $key=>$rs){
		   $thisPC=ge_pingfen_pc($rs[id]);
		   $rs[arrive_time]||$rs[arrive_time]=0;
		   $str ='';
		   $str .= "<dl class='ListHy'>
			<dt>
				<div class='img'><a href='wapshowhy.php?fid=$rs[fid]&id=$rs[id]'><img src='$rs[picurl]' onError=\"this.src='$webdb[www_url]/images/default/nopic.jpg'\"/></a></div>
				<div class='state'>营业中</div>
			</dt>
			<dd>
				<div class='title'><a href='wapshowhy.php?fid=$rs[fid]&id=$rs[id]'><em>$rs[title]</em><span>查看商家</span></a></div>
				<div class='xingxing'><span style='width:{$thisPC}%;'></span></div>
				<div class='number'>
					<span>{$rs[price]}元起送</span>
					<span>{$rs[arrive_time]}分钟</span>
					<span>配送费{$rs[sendprice]}元</span>
				</div>
				<div class='phone'><span>电话：{$rs[telphoto]}</span></div>
				<div class='address'>地址：{$rs[address]}</div>
			</dd>
		</dl>";
		   echo $str;	
		}
	}	
	exit;
}


//主页个性头部与尾部
get_index_tpl($head_tpl,$foot_tpl);


//获取标签内容
$template_file=getTpl("wapnear");
fetch_label_value(array('pagetype'=>'0','file'=>$template_file,'module'=>$webdb['module_id']));


//推荐的栏目在首页显示
//$listdb_moresort=Info_ListMoreSort($webdb[InfoIndexCSRow],$webdb[InfoIndexCSLeng],$city_id);

//每个栏目的信息数
//$InfoNum=get_infonum($city_id);

//require(ROOT_PATH."inc/waphead.php");
require($template_file);
//require(ROOT_PATH."inc/wapfoot.php");


?>