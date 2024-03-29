<?php
!function_exists('html') && exit('ERR');

if(!$webdb[alipay_id]){
	showerr('系统没有设置支付宝收款帐号,所以不能使用支付宝在线支付');
}

if($notify_end){//解决掉单问题

	list(,$uid,$out_trade_no,$url)=explode("\t",mymd5($notify_end,'DE'));
	$detail = explode('&',substr($url,1));
	foreach($detail AS $value){
		list($a,$b)=explode('=',$value);
		$a && $$a=$_GET[$a]=$b;
	}
	
	$pay_code = str_replace('QIBO','=',$pay_code);	//商城里的，这个符号“=”容易出问题
	
	@unlink(ROOT_PATH."cache/notify_1_{$lfjuid}.txt");
	if($lfjuid && $uid==$lfjuid){
		olpay_end($out_trade_no);
	}else{
		showerr('安全校验失败');
	}

}elseif($trade_status){

	$alipay_partner=$webdb[alipay_partner];
	$veryfy_result = file_get_contents("http://notify.alipay.com/trade/notify_query.do?notify_id=$notify_id&partner=$alipay_partner");
	if(!eregi("true$",$veryfy_result)){
		showerr('安全验证参数校验失败，无法完成充值！<hr>'.$veryfy_result);
	}
	
	@unlink(ROOT_PATH."cache/notify_0_{$lfjuid}.txt");
	@unlink(ROOT_PATH."cache/notify_1_{$lfjuid}.txt");

	olpay_end($out_trade_no);
}
else
{
	$array=olpay_send();

	$url  = $webdb['alipay_transport']."://mapi.alipay.com/gateway.do?";

	//支付宝的一些小BUG,要特别处理订单号
	if(eregi("^0",$array[numcode])){
		$array[numcode]="$array[numcode]code";
	}

	if(!$array['return_url']){
		showerr('返回地址不能为空！');
	}elseif(!$array['content']){
		showerr('描述不能为空！');
	}elseif(!$array['title']){
		showerr('名称不能为空！');
	}
	
	write_file(ROOT_PATH."cache/notify_0_{$lfjuid}.txt",$array['return_url']);

	$para = array(
			'extra_common_param'=>$lfjuid,
			'notify_url'	=> $webdb['www_url'].'/do/notify_url.php',
			
			'_input_charset' => 'gbk',
			'service'		 => $webdb['alipay_service'],	//交易类型
			'partner'		 => $webdb['alipay_partner'],		//合作商户号
			'return_url'	 => $array['return_url'],		//同步返回
			'payment_type'	 => 1,							//默认为1,不需要修改
			'quantity'		 => 1,							//商品数量,强制为1,总额在price处算好
			'subject'		 => $array['title'],			//商品名称，必填
			'body'			 => $array['content'],			//商品描述，必填
			'out_trade_no'	 => $array['numcode'],			//商品外部交易号，必填（保证唯一性）
			'price'		 => $array['money'],				//总额
			'seller_email'	 => $webdb['alipay_id'],		//卖家邮箱，必填
			'logistics_fee'		=> '0.00',        			//物流配送费用
			'logistics_payment'	=> 'BUYER_PAY',   			//物流费用付款方式：SELLER_PAY(卖家支付)、BUYER_PAY(买家支付)、BUYER_PAY_AFTER_RECEIVE(货到付款)
			'logistics_type'	=> 'EXPRESS'    			//物流配送方式：POST(平邮)、EMS(EMS)、EXPRESS(其他快递)
		);
	ksort($para);
	$and='';
	foreach($para as $key => $value){
		if($value!==''){
			$_url  .= $and."$key=$value";
			$url  .= $and."$key=".urlencode($value);
			$and="&";
		}
	}

	$sign=md5($_url.$webdb['alipay_key']);
	$url.="&sign=".$sign."&sign_type=MD5";
	echo "<META HTTP-EQUIV=REFRESH CONTENT='0;URL=$url'>";
	exit;
}


?>