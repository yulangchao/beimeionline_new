<?php
function_exists('html') OR exit('ERR');

define('Mdirname', preg_replace("/(.*)\/([^\/]+)\/([^\/]+)/is","\\2",str_replace("\\","/",dirname(__FILE__))) );
define('Mpath', preg_replace("/(.*)\/([^\/]+)\/([^\/]+)/is","\\1/\\2/",str_replace("\\","/",dirname(__FILE__))) );

define('Madmindir', preg_replace("/(.*)\/([^\/]+)/is","\\2",str_replace("\\","/",dirname(__FILE__))) );
define('SYS_TYPE','hr');
$Mpath = Mpath;
define('Adminpath',dirname(__FILE__).'/');

require_once(Adminpath."../data{$GLOBALS[webdb][web_dir]}/config.php");
require_once(Adminpath."../data{$GLOBALS[webdb][web_dir]}/all_fid.php");
require_once(Mpath."inc/module.class.php");
require_once(Adminpath."../inc/function.php");
require_once(Adminpath."../data{$GLOBALS[webdb][web_dir]}/module_db.php");

$Murl=$webdb[www_url].'/'.Mdirname;
$_pre="{$pre}{$webdb[module_pre]}";					//数据表前缀
$Module_db=new Module_Field(Mpath);						//自定义模型相关


$Mdomain=$ModuleDB[$webdb[module_pre]][domain]?$ModuleDB[$webdb[module_pre]][domain]:$Murl;

?>