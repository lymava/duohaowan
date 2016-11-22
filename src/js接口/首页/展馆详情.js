/**
 * 展馆详情
 */
// 地址 	{站点根目录}front/get_pub.do
// 请求方式 get/post 
/**
 * 参数说明
 * 
 * pub_id  						内容的系统编号
 * 
 * 如果已经登录需要再附加三个参数
 * login_key	是登录之后返回的key
 * randCode		自己任意生成
 * user_sign	用户签名的字符串
 * 
 * 签名规则
String randCode = System.currentTimeMillis()+"";
String user_sign = Md5Util.MD5Normal(login_key+randCode.toLowerCase());
 */
/**
 * 参数值
 * 
 * pub_id  						不固定
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : {
			"id" : "581ef1c8d6c4594f90fa046e",
			"pub_id" : "581ef1c8d6c4594f90fa046e",
			"name" : "艺术馆1",
			"intro" : "566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL",
			"state" : "1",
			"viewcount" : "0",
			"nice_count" : "0",
			"shoucang_count" : "1",
			"pic" : "attachFiles/20161106/581ef1c8d6c4594f90fa046e/5833be32ef722c0f39aa761a",
			"showTime" : "2016-11-06 17:03:04",
			"time" : "1478422984000",
			"rootPubConlumnId" : "57fca56def722c216b767c91",
			"rootPubConlumnName" : "内容管理",
			"secondPubConlumnId" : "581ef1a1d6c4594f90fa046c",
			"secondPubConlumnName" : "艺术馆",
			"comment_list" : [],
			"logo" : "attachFiles/temp/5833be56ef722c0f39aa761c",
			"jubanfang" : "江渝会馆"
		},
		"statusCode" : "200",
		"message" : "返回成功!"
	}