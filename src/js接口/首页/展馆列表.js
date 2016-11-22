/**
 * 获取展馆列表
 */
// 地址 	{站点根目录}front/list_pub.do
// 请求方式 get/post 
/**
 * 参数说明
 * 
 * page  						页码
 * pageSize						每页数量
 * pubConlumnId 				产品分类
 * secondPubConlumnId			二级分类
 * thirdPubConlumnId			三级分类
 */
/**
 * 参数值
 * 
 * secondPubConlumnId						581ef1a1d6c4594f90fa046c	//画框
 * secondPubConlumnId						581ef1a1d6c4594f90fa046c	//画框
 * 
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [ {
			"id" : "581ef1c8d6c4594f90fa046e",
			"pub_id" : "581ef1c8d6c4594f90fa046e",
			"name" : "艺术馆1",
			"intro" : "566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL566A5LuL",
			"state" : "1",
			"viewcount" : "0",
			"nice_count" : "0",
			"shoucang_count" : "0",
			"pic" : "attachFiles/20161106/581ef1c8d6c4594f90fa046e/5833be32ef722c0f39aa761a",
			"showTime" : "2016-11-06 17:03:04",
			"time" : "1478422984000",
			"rootPubConlumnId" : "57fca56def722c216b767c91",
			"rootPubConlumnName" : "内容管理",
			"secondPubConlumnId" : "581ef1a1d6c4594f90fa046c",
			"secondPubConlumnName" : "艺术馆",
			"comment_list" : [],
			"logo" : "attachFiles/temp/5833be56ef722c0f39aa761c",//logo
			"jubanfang" : "江渝会馆",//举办方
			 "isShoucang" : "true"//是否已收藏关注
		} ],
		"page" : "1",
		"lastPage" : "1",
		"pageSize" : "15",
		"count" : "1",
		"statusCode" : "200",
		"message" : "返回成功!"
	}
