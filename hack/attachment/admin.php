<?php
!function_exists('html') && exit('ERR');
if($job=="listimg"&&$Apower[attachment_list]){
	$imgdb=array();
	get_imgfile(ROOT_PATH."$webdb[updir]");
	krsort($imgdb);
	if($page<1){
		$page=1;
	}
	$rows=20;
	$min=($page-1)*$rows;
	$i=-1;
	foreach($imgdb AS $key=>$value){
		$i++;
		if($i<$min){
			continue;
		}elseif($i>$min+$rows-1){
			break;
		}
		$listdb[]=array('time'=>date("m-d H:i",$key),'name'=>basename($value),'path'=>str_replace(ROOT_PATH,"",$value));
	}
	$showpage=getpage("","","?lfj=$lfj&job=$job","$rows",$total=count($imgdb));

	hack_admin_tpl('listimg');
}
elseif($job=="list"&&$Apower[attachment_list]){
	!$page&&$page=1;
	$rows=40;
	$min=($page-1)*$rows;
	$down_path || $down_path=$webdb[updir];
	
	$up_path=preg_replace("/(.*)\/([^\/]+)/is","\\1",$down_path);

	$thispath=ROOT_PATH.$down_path;

	$file_db=get_file($down_path);

	$total=count($file_db);
	
	$showpage=getpage("","","index.php?lfj=$lfj&job=$job&down_path=$down_path",$rows,$total);

	for($i=$min;$i<$min+$rows;$i++){
		if(!$file_db[$i]){
			break;
		}
		$rs[type]=$file_db[$i][type];
		$rs[size]=number_format(filesize(ROOT_PATH.$file_db[$i][path])/1024,3);
		$rs[path]=($file_db[$i][path]);
		$rs[name]=basename($file_db[$i][path]);
		$rs[icon]=$file_db[$i][icon];
		$rs[posttime]=date("Y-m-d H:i:s",filemtime(ROOT_PATH.$file_db[$i][path]));
		$rs[url]="$webdb[www_url]/".$file_db[$i][path];
		$rs[id]=$i;
		$listdb[]=$rs;
	}

	//$totalsize=dskspace(ROOT_PATH."$webdb[updir]");
	//$totalsize=abs(number_format($totalsize/(1024),3));


	hack_admin_tpl('list');
}elseif($job=="show"&&$Apower[attachment_list]){
	$up_path=preg_replace("/(.*)\/([^\/]+)/is","\\1",$down_path);
	$thispath=ROOT_PATH.$down_path;
	list_dir_file(ROOT_PATH.$down_path);	
	$fileArray=$file_array[$type];
	krsort($fileArray);	
	
	if($atc=="del"){
		foreach($iddb AS $key=>$value){
			unlink($fileArray[$key]);
		}
		jump("ɾ���ɹ�","$FROMURL",1);
	}

	$page || $page=1;
	$rows=($type=="pic")?18:30;
	$min=($page-1)*$rows;
	$max=$min+$rows;
	$totalNum = count($fileArray);
	$showpage=getpage("","","?lfj=$lfj&job=$job&down_path=$down_path&type=$type",$rows,$totalNum);
	$i=-1;
	foreach($fileArray AS $time=>$filename) {
		$i++;
		if($i<$min)continue;
		if($i>=$max)break;	
		$size=number_format(filesize($filename)/1024,3);
		$filename=str_replace(ROOT_PATH.$webdb['updir'],"",$filename);
		$filename1=$filename;
		$filedir=preg_replace("/(.*)\/([^\/]+)/is","\\1",$filename);
		$filename=str_replace($filedir."/","",$filename);
		$uid=preg_replace("/^([\d]+)_(.*)/is","\\1",$filename);
		$listdb[]=array("keys"=>$time,"times"=>date("Y-m-d H:i:s",$time),"name"=>$filename,"size"=>$size,"uid"=>$uid,"name1"=>$filename1,"id"=>$i+1);
	}
	hack_admin_tpl('showlist');
}
elseif($action=="delete"&&$Apower[attachment_list])
{
	foreach($iddb AS $key=>$value)
	{
		if(!strstr($value,"..")&&!ereg("^\/",$value)&&$value){
			del_file(ROOT_PATH.$value);
		}
	}
	jump("ɾ���ɹ�","$FROMURL",1);
}
// 

function get_file($dir){
	$dir_hand = opendir(ROOT_PATH.$dir);
	while(($file=readdir($dir_hand))!='')
	{
		$rs[path]="$dir/$file";
		if(is_file(ROOT_PATH."$dir/$file"))
		{
			$rs[type]="file";
			$rs[icon]="images/file_icon.gif";
			$array[]=$rs;
		}
		elseif( $file!="." && $file!=".." && is_dir(ROOT_PATH."$dir/$file") )
		{
			$rs[type]="dir";
			$rs[icon]="images/dir_icon.gif";
			$array[]=$rs;
		}
	}
	return $array;
}

function dskspace($dir) 
{ 
   $s = stat($dir); 
   $space = $s["blocks"]*512; 
   if (is_dir($dir)) 
   { 
     $dh = opendir($dir); 
     while (($file = readdir($dh)) != '') 
       if ($file != "." and $file != "..") 
         $space += dskspace($dir."/".$file); 
     closedir($dh); 
   } 
   return $space; 
}

function get_imgfile($path){
	global $imgdb;
	if (file_exists($path)){
		if(is_file($path)){
			if(eregi("(\.gif|\.bmp|\.png|\.jpg)$",$path)){
				$imgdb[filemtime($path)]=$path;
			}			
		} else{
			$handle = opendir($path);
			while (($file = readdir($handle))!='') {
				if (($file!=".") && ($file!="..") && ($file!="")){
					if (is_dir("$path/$file")){
						get_imgfile("$path/$file");
					} else{
						if(eregi("(\.gif|\.bmp|\.png|\.jpg)$",$file)){
							$imgdb[filemtime("$path/$file")]="$path/$file";
						}
					}
				}
			}
			closedir($handle);
		}
	}
}


function list_dir_file($path){
	global $file_array;
	if(is_dir($path)){
		$dir=opendir($path);
		while(($file=readdir($dir))!=''){
			if(is_file("$path/$file")){
				//if($uid && !eregi("^{$uid}_",$file)){
					//continue;
				//}

				//if($filetype!='' && !eregi("\.($filetype)$",$file)){
				//	continue;
				//}elseif($NOfiletype!='' && eregi("\.($NOfiletype)$",$file)){
				//	continue;
				//}

				if( eregi("\.(jpg|gif|png|bmp)$",$file) ){
					$types='pic';
				}else{
					$types='files';
				}
				$i++;				
				$time=filemtime("$path/$file"); 
				while($file_array[$types][$time]){
					$time++;
				}
				$file_array[$types][$time]="$path/$file";				
			}elseif($file!='.'&&$file!='..'){
				list_dir_file("$path/$file");
			}
		}
		closedir($dir);
	}
}

?>