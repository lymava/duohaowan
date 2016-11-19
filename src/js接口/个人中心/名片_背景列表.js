/**
 * 画框列表
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
 * pubConlumnId						rootPubConlumnId	//画框名片背景
 * 
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result ={
		"data" : [
					{
						"id" : "58215f4ed6c45965757937ec",
						"pub_id" : "58215f4ed6c45965757937ec",
						"name" : "背景3",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"showTime" : "2016-11-08 13:14:54",
						"time" : "1478582094000",
						"rootPubConlumnId" : "58214a01d6c45965757937d3",
						"rootPubConlumnName" : "名片背景",
						"secondPubConlumnId" : "58214ab7d6c45965757937e4",
						"secondPubConlumnName" : "默认分类",
						"comment_list" : []
					},
					{
						"id" : "58215f46d6c45965757937eb",
						"pub_id" : "58215f46d6c45965757937eb",
						"name" : "背景2",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"showTime" : "2016-11-08 13:14:46",
						"time" : "1478582086000",
						"rootPubConlumnId" : "58214a01d6c45965757937d3",
						"rootPubConlumnName" : "名片背景",
						"secondPubConlumnId" : "58214ab7d6c45965757937e4",
						"secondPubConlumnName" : "默认分类",
						"comment_list" : []
					},
					{
						"id" : "58215f41d6c45965757937ea",
						"pub_id" : "58215f41d6c45965757937ea",
						"name" : "背景1",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161108/58215f41d6c45965757937ea/58215f3ad6c45965757937e9",
						"showTime" : "2016-11-08 13:14:41",
						"time" : "1478582081000",
						"rootPubConlumnId" : "58214a01d6c45965757937d3",
						"rootPubConlumnName" : "名片背景",
						"secondPubConlumnId" : "58214ab7d6c45965757937e4",
						"secondPubConlumnName" : "默认分类",
						"comment_list" : []
					} ],
			"page" : "1",
			"lastPage" : "1",
			"pageSize" : "15",
			"count" : "3",
			"statusCode" : "200",
			"message" : "返回成功!"
		}
