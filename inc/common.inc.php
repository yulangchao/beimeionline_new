<?php
error_reporting(7);

unset($_GET['FileName'],$_POST['FileName'],$_COOKIE['FileName'],$_FILES['FileName']);

@ini_set('pcre.backtrack_limit', 999999999);
//@ini_set('pcre.recursion_limit', 10000);
set_include_path('.');
set_magic_quotes_runtime(0);

if(function_exists('date_default_timezone_set')){date_default_timezone_set('Hongkong');}

$speed_headtime=explode(' ',microtime());
$speed_headtime=$speed_headtime[0]+$speed_headtime[1];

if(PHP_VERSION < '4.1.0') {
	$_GET = &$HTTP_GET_VARS;
	$_POST = &$HTTP_POST_VARS;
	$_COOKIE = &$HTTP_COOKIE_VARS;
	$_SERVER = &$HTTP_SERVER_VARS;
	$_ENV = &$HTTP_ENV_VARS;
	$_FILES = &$HTTP_POST_FILES;
}


$_POST=Add_S($_POST);
$_GET=Add_S($_GET);
$_COOKIE=Add_S($_COOKIE);

function Add_S($array){
	foreach($array as $key=>$value){
		@eregi("['\\\"]+",$key) && die('ERROR KEY!'.$key);
		if(!is_array($value)){
			$value=str_replace("&#x","& # x",$value);	//过滤一些不安全字符
			$value=preg_replace("/eval/i","eva l",$value);	//过滤不安全函数
			!get_magic_quotes_gpc() && $value=addslashes($value);
			$array[$key]=$value;
		}else{
			$array[$key]=Add_S($array[$key]); 
		}
	}
	return $array;
}

if(!ini_get('register_globals')){
	$array = array('Filedata','postfile','upfile','fileData','Filedata');
	foreach($array AS $key=>$value){
		is_array($_FILES[$value]) && $$value = $_FILES[$value];
	}
}

foreach($_COOKIE AS $_key=>$_value){
	unset($$_key);
}
foreach($_POST AS $_key=>$_value){
	$_key=='GLOBALS' && die('error get value!');
	!@ereg("^\_[A-Z]+",$_key) && $$_key=$_POST[$_key];
	
	if(!defined('IS_ADMIN') && !@ereg("^(title|content)$",$_key) && @ereg("(<|;| |'|\\\|\"|\\$)",$_value)){
		$$_key='danger word!!';
	}
}
foreach($_GET AS $_key=>$_value){
	$_key=='GLOBALS' && die('error get value!');
	!@ereg("^\_[A-Z]+",$_key) && $$_key=$_GET[$_key];

	if(!defined('IS_ADMIN') && !@ereg("^(title|content)$",$_key) && @ereg("(<|;| |'|\\\|\"|\\$)",$_value)){
		$$_key='danger word!!';
	}
}

define('WEB_LANG','gb2312');		//utf-8 gb2312 big5
define('ROOT_PATH', substr(dirname(__FILE__), 0, -4).'/');
define('PHP168_PATH', ROOT_PATH);

$qibosoft_Edition="V7.0";

ob_start();		//ob_start('ob_gzhandler');
header('Content-Type: text/html; charset='.WEB_LANG);

unset($webdb);
require(ROOT_PATH.'data/config.php');
require_once(ROOT_PATH.'inc/function.inc.php');
$webdb[SystemType] && @include(ROOT_PATH."$webdb[SystemType]/data/config.php");

//全局伪静态
if($webdb['RewriteUrl']==1){
	$detail=explode("-",substr($Rurl,0,-5));	//.html去除掉
	for($i=0;$i<count($detail) ;$i++ ){
		$_GET[$detail[$i]]=$$detail[$i]=addslashes(stripslashes($detail[++$i]));
	}
	unset($i,$detail);
}

check_parameter();
//过滤一些恶意提交的字符
function check_parameter(){
	$array_int = array('page','id','fup','aid','rid','fid','cid','cityid','mid','pid','tid','rows','leng','uid','city_id','zone_id','street_id','propagandize_uid');
	foreach($array_int AS $value){
		isset($GLOBALS[$value]) && $GLOBALS[$value] = intval($GLOBALS[$value]);
	}
	
	$array_key = array('typeid','iframeID','job','renzheng','jobs','ad_id','styletype','type','psid','TagId','u','show_type','showDomain');
	foreach($_GET AS $key=>$value){
		if($value!='' && in_array($key,$array_key) && !eregi("^([-_0-9a-z]+)$",$value)){
			die("$key<br>Parameter is error!");
		}		
	}
	foreach($_POST AS $key=>$value){
		if($value!='' && in_array($key,$array_key) && !eregi("^([-_0-9a-z]+)$",$value)){
			die("$key<br>Parameter is error!");
		}		
	}
}

if(!defined('IS_ADMIN'))unset($listdb,$array,$rs);
unset($label_hf,$label,$Html_Type,$erp,$_erp,$FidTpl,$Limitword,$SQL,$titledb,$main_tpl,$ltitle,$memberlevel,$showHtml_Type,$chdb,$fidDB,$rsdb,$ModuleDB,$city_DB,$Mdomain,$Murl,$choose_class,$foot_tpl,$head_tpl,$ch_file,$index_tpl,$seo_tile,$zone_DB,$street_DB,$_pre,$dbhost,$dbpw,$dbname,$votetype,$aboutsortTPL,$bigsortTPL,$listTPL,$sortnameTPL,$TB_pre,$Apower,$BM);

$PHP_SELF_TEMP=$_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['SCRIPT_NAME'];
$_SERVER['QUERY_STRING'] && $PHP_SELF_TEMP .= "?".$_SERVER['QUERY_STRING'];
$PHP_SELF=$_SERVER['REQUEST_URI']?$_SERVER['REQUEST_URI']:$PHP_SELF_TEMP;
$HTTP_HOST=$_SERVER['HTTP_HOST']?$_SERVER['HTTP_HOST']:$HTTP_SERVER_VARS['HTTP_HOST'];
$WEBURL='http://'.$HTTP_HOST.$PHP_SELF;
$FROMURL=$_SERVER["HTTP_REFERER"]?$_SERVER["HTTP_REFERER"]:$HTTP_SERVER_VARS["HTTP_REFERER"];

$webdb[www]=$webdb[www_url];
if($webdb[www_url]=='/.'){
	unset($webdb[cookieDomain]);
	$webdb[www]=preg_replace("/http:\/\/([^\/]+)\/(.*)/is","http://\\1",$WEBURL);
}

if($_SERVER['HTTP_CLIENT_IP']){
     $onlineip=$_SERVER['HTTP_CLIENT_IP'];
}elseif($_SERVER['HTTP_X_FORWARDED_FOR']){     
	 $onlineip=$_SERVER['HTTP_X_FORWARDED_FOR'];	//HTTP_X_REAL_FORWARDED_FOR
}else{
     $onlineip=$_SERVER['REMOTE_ADDR'];
}
$onlineip = preg_replace("/^([\d\.]+).*/", "\\1", filtrate($onlineip));
preg_match("/[\d\.]{7,15}/", $onlineip, $onlineipArray);
$onlineip = $onlineipArray[0] ? $onlineipArray[0] : '0.0.0.0';
unset($onlineipArray);

if($webdb[cc_attack]){
	$cc_attack_time=3;
	$cc_attack_num=($webdb[cc_attack_num]>9)?$webdb[cc_attack_num]:20;
	$webdb[Forbid_cc_visttime]>0 || $webdb[Forbid_cc_visttime]=1;
	$Forbid_cc_visttime=$webdb[Forbid_cc_visttime]*60;
	$Limit_time=time()-@filemtime(ROOT_PATH."cache/cc_attack_ip.txt")-$Forbid_cc_visttime;
	if($Limit_time<0){
		$cc_attack_ip_file=read_file(ROOT_PATH."cache/cc_attack_ip.txt");
		if(strstr($cc_attack_ip_file,$onlineip)){
			$Limit_time=intval($Limit_time);
			die("Forbid CC Attack Vist,Limit $Limit_time");
		}
	}else{
		@unlink(ROOT_PATH."cache/cc_attack_ip.txt");
	}
	if(time()-@filemtime(ROOT_PATH."cache/cc_attack.txt")>$cc_attack_time){
		@unlink(ROOT_PATH."/cache/cc_attack.txt");
	}else{
		unset($_detail);
		$detail=explode("\r\n",read_file(ROOT_PATH."cache/cc_attack.txt"));
		foreach($detail AS $value){
			$_detail[$value]++;
			if($_detail[$value]>$cc_attack_num){
				write_file(ROOT_PATH."cache/cc_attack_ip.txt",time()." $onlineip\r\n",'a');
			}
		}
	}
	write_file(ROOT_PATH."cache/cc_attack.txt","$onlineip\r\n",'a');
	if(date('s')%$cc_attack_time==0){
		@unlink(ROOT_PATH."/cache/cc_attack.txt");
	}
}
if(!$webdb['debug']){
	error_reporting(0);
}
require_once(ROOT_PATH.'inc/biz.php');
require_once(ROOT_PATH."data/module.php");
require_once(ROOT_PATH."data/mysql_config.php");
require_once(ROOT_PATH.'inc/mysql_class.php');
require_once(ROOT_PATH.'inc/class.user.php');
require_once(ROOT_PATH.'data/level.php');

$timestamp=time()+($webdb['time']*60);

$_POST[loginname] && $_POST[loginname]=filtrate($_POST[loginname]);
$_POST[loginpwd] && $_POST[loginpwd]=filtrate($_POST[loginpwd]);
$FROMURL=filtrate($FROMURL);
$WEBURL=filtrate($WEBURL);

/**
*封IP
**/
$IS_BIZ && Limt_IP('ForbidIp');

list($usr_sid,$usr_oltime,$usr_lastvist,$usr_lasturl)=explode("\t",get_cookie('USR'));


if(!$usr_sid){
	$usr_sid=rands(8);
}

unset($_ENV,$HTTP_COOKIE,$HTTP_ENV_VARS,$_REQUEST,$HTTP_POST_VARS,$HTTP_GET_VARS,$HTTP_POST_FILES,$HTTP_COOKIE_VARS);

$db=new MYSQL_DB;

unset($web_admin,$sort_admin,$lfjid,$lfjuid,$lfjpwd,$lfjdb,$groupdb);
$usr_oltime=intval($usr_oltime);



/*用户登录模块*/
if($webdb[passport_type]&&is_file(ROOT_PATH."inc/passport/{$webdb[passport_type]}.php")){
	require_once(ROOT_PATH."inc/passport/{$webdb[passport_type]}.php");
	$userDB = new qb_user;
	$lfjdb = PassportUserdb();
}else{
	$TB=array("table"=>"{$pre}members","uid"=>"uid","username"=>"username","password"=>"password");
	$userDB = new qb_user;
	$lfjdb = $userDB->login_info();
}

//同步后台登录
if($_COOKIE["adminID"]&&$detail=mymd5($_COOKIE["adminID"],'DE',$webdb['mymd5'])){
	unset($_uid,$_username,$_password);
	list($_uid,$_username,$_password)=explode("\t",$detail);
	$_uid = intval($_uid);
	$lfjdb = $userDB->get_allInfo($_uid);
	if(!$lfjdb['password'] || $lfjdb['password']!=$_password){
		unset($lfjdb);
	}
}


if($lfjdb[yz]){
	$lfjid=$lfjdb['username'];
	$lfjuid=$lfjdb['uid'];
	$lfjdb[icon] && $lfjdb[icon]=tempdir($lfjdb[icon]);
	if($lfjdb['groupid']==3||$lfjdb['groupid']==4){
		$web_admin=$sort_admin='1';
	}
	if( file_exists(ROOT_PATH."data/group/{$lfjdb[groupid]}.php") ){
		$groupdb=@include( ROOT_PATH."data/group/{$lfjdb[groupid]}.php");
	}else{
		$lfjdb['groupid']=8;
		$groupdb=@include( ROOT_PATH."data/group/8.php");
	}
	$lfjdb[C]=unserialize($lfjdb[config]);
	if($usr_oltime>30||!$usr_oltime){
		$usr_oltime>600 && $usr_oltime=600;
		$SQL="";
		if( isset($memberlevel[$lfjdb[groupid]]) ){
			//普通会员组按积分自动升级
			if(!$webdb[groupUpType]){
				$SQL=",groupid=8";
				$lfjdb[money]=get_money($lfjuid);
				asort($memberlevel);
				foreach( $memberlevel AS $key=>$value){
					if($lfjdb[money]>=$value){
						$SQL=",groupid=$key";
					}
				}
			//普通会员组按积分购买升级,系统组如果设置了载止日期，将按载止日期失效，否则长期有效
			}elseif($lfjdb['C']['endtime']&&$timestamp>$lfjdb['C']['endtime']){
				$SQL=",groupid=8";
			}
		//系统组如果设置了载止日期，将按载止日期失效，否则长期有效
		}elseif($lfjdb['C']['endtime']&&$timestamp>$lfjdb['C']['endtime']){
			$SQL=",groupid=8";
		}
		$db->query("UPDATE {$pre}memberdata SET lastvist='$timestamp',lastip='$onlineip',oltime=oltime+'$usr_oltime'$SQL WHERE uid='$lfjuid'");
		$usr_oltime=1;
	}else{
		$usr_oltime+=$timestamp-$usr_lastvist;
	}
}else{
	if( $lfjdb && $lfjdb[yz]==0 && $action!='quit' ){

		if($webdb[UserEmailAutoPass]){
			echo "<SCRIPT LANGUAGE=\"JavaScript\">
			<!--
			alert('很抱歉!你的当前帐号还没有通过审核，系统强迫你退出登录状态，你现在可以通过电子邮件审核你的帐号,或者联系管理员审核你的帐号!');
			//-->
			</SCRIPT>";
			$fromurl=urlencode("$webdb[www_url]/do/activate.php?username=$lfjdb[username]");
			echo "<META HTTP-EQUIV=REFRESH CONTENT='0;URL=$webdb[www_url]/do/login.php?action=quit&fromurl=$fromurl'>";
		}else{
			echo "<SCRIPT LANGUAGE=\"JavaScript\">
			<!--
			alert('很抱歉!你的当前帐号还没有通过审核，系统强迫你退出登录状态，请联系管理员审核你的帐号!');
			//-->
			</SCRIPT>";
			echo "<META HTTP-EQUIV=REFRESH CONTENT='0;URL=$webdb[www_url]/do/login.php?action=quit'>";
		}
		exit;
	}
	unset($lfjid,$lfjuid,$lfjpwd,$lfjdb);
	//游客组
	$groupdb=@include( ROOT_PATH."data/group/2.php");
}

/*用户组有效期处理*/
if($lfjdb[config]){
	$lfjdb[config]=unserialize($lfjdb[config]);
	if($groupdb['gptype']&&$lfjdb['groupid']!=5){
		if( ($lfjdb[config][begintime]&&$lfjdb[config][begintime]>$timestamp)||($lfjdb[config][endtime]&&$lfjdb[config][endtime]<$timestamp) ){
			unset($groupdb);
			$web_admin=$sort_admin='0';
			$lfjdb['groupid']=8;
			$groupdb=@include( ROOT_PATH."data/group/8.php");
		}
	}
}


//if($webdb[SystemType]){
//	$Mdomain=$webdb[www_url]."/".$webdb[SystemType];
//}

$STYLE=$webdb[style]=$webdb[style]?$webdb[style]:'default';

set_cookie("USR","$usr_sid\t$usr_oltime\t$timestamp\t$WEBURL",3600*24);

//SEO
$titleDB[title]		= $webdb[SeoTitle]?$webdb[SeoTitle]:$webdb[webname];
$titleDB[keywords]	= $webdb[metakeywords];
$titleDB[description] = $webdb[description];

//后台访问地址取完整网址
if(!ereg("^http://",$webdb[admin_url])){
	$webdb[admin_url]="$webdb[www_url]/$webdb[admin_url]";
}

$webdb[FlashGet_ID] || $webdb[FlashGet_ID] = '95158';	//快车联盟ID
$webdb[XunLei_ID]	|| $webdb[XunLei_ID] = '125362';	//迅雷联盟ID


$webdb[_www_url] = $webdb[www_url];
@include(ROOT_PATH."data/all_city.php");
if(count($city_DB[name])==1){	//单城市版,强制城市ID
	foreach( $city_DB[name] AS $key=>$value){
		$city_id=$key;
	}
	set_cookie("city_id",$city_id);
}else{
	$isCityDomain = false;	//供do/main.php商铺二级域名如果绑定到根目录的情况做检查处理
	$tempDomain = preg_replace("/http:\/\/([^\/]+)\/(.*)/is","http://\\1",str_replace(':80/','/',$WEBURL));
	foreach( (array)$city_DB[domain] AS $key=>$value){		//城市二级域名
		if($value==$tempDomain){
			$_GET[choose_cityID]=$key;
			if(!defined('IS_ADMIN')){
				$webdb[www_url] = $city_DB[domain][$key];
			}
			$isCityDomain = true;
			break;
		}
	}
	if( $webdb['ForbidOtherDomainVisit'] && $isCityDomain == false 
		&& $tempDomain!=$webdb['www_url'] && $tempDomain!="http://$webdb[cookieDomain]"
	    && SYS_TYPE!='hy' && !defined('IS_ADMIN')){
		showerr('网址有误或者是当前城市不存在!');
	}
	if( $_GET[choose_cityID] ){	//用户选择城市
		set_cookie("choose_cityID",$_GET[choose_cityID],3600*24);
		$city_id=$_GET[choose_cityID];
	}
	if(!$city_id){	//用户选择城市优先于按来源判断城市
		if(get_cookie("choose_cityID")){
			$city_id=get_cookie("choose_cityID");
		}elseif(get_cookie("city_id")){
			$city_id=get_cookie("city_id");
		}elseif(get_cookie("From_City")){
			$city_id=get_cookie("From_City");
		}
	}
	if($city_id){
		if(!$city_DB[name][$city_id]){
			//echo "当前城市ID有误:$city_id";
			$city_id='';
		}			
	}
	if(!$city_id && !defined('IS_ADMIN') && !defined('allcity_page')){
		
		foreach( $city_DB[name] AS $key=>$value){
			$city_id=$key;
			break;
		}
		if($webdb[jump_city]){	//自动跳转城市
			$Area=ipfrom($onlineip);
			foreach( $city_DB[name] AS $key2=>$value2){		
				$value2=str_replace(array("市","区"," "),array("","",""),$value2);
				if(strstr($Area,$value2)){
					$city_id=$key2;
					set_cookie("From_City",$city_id,3600*12);
					break;
				}
			}
		}
	}
	set_cookie("city_id",$city_id,3600*24);
}

$city_id=intval($city_id);

//谷歌地图服务器经常变动，有时只能用.com域名，有时只能用.cn域名，请按需要自行调整
$webdb['googleMapUrl'] = $webdb['googleMapDomain']?'http://maps.google.com':'http://maps.google.cn';


//商家认证分类
$renzhengDB = array(''=>'未认证','0'=>'未认证','1'=>'普通认证','2'=>'银牌认证','3'=>'金牌认证');



//表单数据恢复功能
define( 'UID_POST_PATH' , ROOT_PATH.'cache/post_cache/'.ceil($lfjuid/1000).'/' );
if($webdb['ComebackDate'] && $lfjuid && count($_POST)>1){	
	makepath(UID_POST_PATH);
	write_file(UID_POST_PATH."$lfjuid.php",'<?php $post_cache='.var_export($_POST,true).';?>');
}

//支付宝付款掉单后notify通知
if(is_file(ROOT_PATH."cache/notify_1_{$lfjuid}.txt")){
	$url=read_file(ROOT_PATH."cache/notify_1_{$lfjuid}.txt");
	@unlink(ROOT_PATH."cache/notify_1_{$lfjuid}.txt");
	echo "<META HTTP-EQUIV=REFRESH CONTENT='0;URL=$url'>";exit;
}

$IsMob = is_mobile();

?>