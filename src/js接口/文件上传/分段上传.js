/**
 * 画框类别列表
 */
// 地址 	{站点根目录}front/uploadChucks.do
// 请求方式 get/post 
/**
 * 参数说明
 * 
 * name  				文件名称
 * chunk				当前分段下标
 * chunks 				下标总数
 * file_bytes			String file_string = HexM.encodeHexString(file_bytes);
 */ 
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result ={
		"statusCode" : "200",
		"message" : "上传成功!"
	}
var result = {//文件上传完成
		"data" : {
			"fileName" : "attachFiles/temp/bbd093b570e1201aa17b9f0b3be7960a"
		},
		"statusCode" : "200",
		"message" : "上传成功!"
	}