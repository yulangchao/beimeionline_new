<?php
/* *
 * �����ļ�
 * �汾��3.3
 * ���ڣ�2012-07-19
 * ˵����
 * ���´���ֻ��Ϊ�˷����̻����Զ��ṩ���������룬�̻����Ը����Լ���վ����Ҫ�����ռ����ĵ���д,����һ��Ҫʹ�øô��롣
 * �ô������ѧϰ���о�֧�����ӿ�ʹ�ã�ֻ���ṩһ���ο���
	
 * ��ʾ����λ�ȡ��ȫУ����ͺ���������id
 * 1.������ǩԼ֧�����˺ŵ�¼֧������վ(www.alipay.com)
 * 2.������̼ҷ���(https://b.alipay.com/order/myorder.htm)
 * 3.�������ѯ����������(pid)��������ѯ��ȫУ����(key)��
	
 * ��ȫУ����鿴ʱ������֧�������ҳ��ʻ�ɫ��������ô�죿
 * ���������
 * 1�������������ã������������������������
 * 2���������������ԣ����µ�¼��ѯ��
 */
 
//�����������������������������������Ļ�����Ϣ������������������������������
//����������id����2088��ͷ��16λ������
$alipay_config['partner']		= $webdb['wapAlipay_partner'];//'2088301468823863';

//�տ�֧�����˺�
$alipay_config['seller_id']	= $webdb['wapAlipay_id'];//$alipay_config['partner'];

//�̻���˽Կ����׺��.pen���ļ����·��
$alipay_config['private_key_path']	= dirname(__FILE__).'/key/rsa_private_key.pem';

//֧������Կ����׺��.pen���ļ����·��
$alipay_config['ali_public_key_path']= dirname(__FILE__).'/key/alipay_public_key.pem';


//�����������������������������������Ļ�����Ϣ������������������������������


//ǩ����ʽ �����޸�
$alipay_config['sign_type']    = strtoupper('RSA');

//�ַ������ʽ Ŀǰ֧�� gbk �� utf-8
$alipay_config['input_charset']= strtolower('gbk');

//ca֤��·����ַ������curl��sslУ��
//�뱣֤cacert.pem�ļ��ڵ�ǰ�ļ���Ŀ¼��
$alipay_config['cacert']    = dirname(__FILE__).'/cacert.pem';

//����ģʽ,�����Լ��ķ������Ƿ�֧��ssl���ʣ���֧����ѡ��https������֧����ѡ��http
$alipay_config['transport']    = 'http';
?>