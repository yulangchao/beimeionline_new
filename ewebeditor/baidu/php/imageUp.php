<?php
require_once(dirname(__FILE__)."/../../../inc/common.inc.php");
    error_reporting( E_ERROR | E_WARNING );
    //上传配置
    $config = array(
        "uploadPath"=>"../../../$webdb[updir]/other/",                          //保存路径
        "fileType"=>array(".gif",".png",".jpg",".jpeg",".bmp"),   //文件允许格式
        "fileSize"=>3000                                          //文件大小限制，单位KB
    );
    //原始文件名，表单名固定，不可配置
    $oriName = htmlspecialchars( $_POST[ 'fileName' ] , ENT_QUOTES );

    //上传图片框中的描述表单名称，
    $title = htmlspecialchars( $_POST[ 'pictitle' ] , ENT_QUOTES );

    //文件句柄
    $file = $_FILES[ "upfile" ];

    //文件上传状态,当成功时返回SUCCESS，其余值将直接返回对应字符窜并显示在图片预览框，同时可以在前端页面通过回调函数获取对应字符窜
    $state = "SUCCESS";

    //重命名后的文件名
    $fileName = "";

    //保存路径
    $path = $config[ 'uploadPath' ];

    if ( !file_exists( $path ) ) {
        mkdir( "$path" , 0777 );
    }

	if(!$lfjid){
		$state = "你还没登录";
	}

    //格式验证
    $current_type = strtolower( strrchr( $file[ "name" ] , '.' ) );
    if ( !in_array( $current_type , $config[ 'fileType' ] )  ) {
        $state = "不允许的图片格式";
    }

	if(!$file[ "tmp_name" ]){
		$state = "空间问题,上传失败";
	}
    //大小验证
    $file_size = 2000 * $config[ 'fileSize' ];
    if ( $file[ "size" ] > $file_size ) {
        $state = "图片大小超出限制";
    }
    //保存图片
    if ( $state == "SUCCESS" ) {/*
        $tmp_file = $file[ "name" ];
        $fileName = $path . rand( 1 , 10000 ) . time() . strrchr( $tmp_file , '.' );
        $result = move_uploaded_file( $file[ "tmp_name" ] , $fileName );
        if ( !$result ) {
            $state = "未知错误";
        }*/

		$array='';
		$array['name']=is_array($upfile)?$_FILES['upfile']['name']:$upfile_name;
		$array['path']=$webdb['updir']."/other";
		$array['size']=is_array($upfile)?$_FILES['upfile']['size']:$upfile_size;
		
		$array['updateTable']=1;	//统计用户上传的文件占用空间大小
		$fileName=upfile(is_array($upfile)?$_FILES['upfile']['tmp_name']:$upfile,$array);

    }
    //向浏览器返回数据json数据
    /**
     * 返回数据格式
     * {
     *   'url'      :'a.jpg',   //保存后的文件路径
     *   'title'    :'hello',   //文件描述，对图片来说在前端会添加到title属性上
     *   'original' :'b.jpg',   //原始文件名
     *   'state'    :'SUCCESS'  //上传状态，成功时返回SUCCESS,其他任何值将原样返回至图片上传框中
     * }
     */
	WEB_LANG=='gb2312' && $state = gbk2utf8($state);
	ob_end_clean();
    echo "{'url':'" . $fileName . "','title':'" . $title . "','original':'" . $oriName . "','state':'" . $state . "'}";

?>


