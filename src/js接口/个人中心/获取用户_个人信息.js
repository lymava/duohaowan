/**
 * 查询当前登录用户的信息
 */
// 地址 	{站点根目录}face/user/getUserInfo.do
// 请求方式 get/post 
/**
 * 请求参数
 * 无参数 
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : {
			"picname" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/581ae930ef722c2380d067c9",//用户头像
			"nickname" : "潘潘",//用户昵称
			"realname" : "潘天寿",//用户真实姓名
			"sheng" : "省",
			"shi" : "市",
			"balance" : "0",//余额
			"address" : "地址",
			"phone" : "联系电话",
			"idCard" : "证件号码",
			"showAnquanJibie" : "极佳"
		},
		"statusCode" : "200"
	}