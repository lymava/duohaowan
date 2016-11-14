/**
 * 画框类别列表
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
 * pubConlumnId			58293eadef722c116fe22066	//画框类别
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result ={
		"data" : [ {
			"id" : "58296cfaef722c193b8deaa9",
			"pub_id" : "58296cfaef722c193b8deaa9",
			"name" : "黄花梨画框",
			"state" : "1",
			"viewcount" : "0",
			"nice_count" : "0",
			"shoucang_count" : "0",
			"pic" : "attachFiles/20161114/58296cfaef722c193b8deaa9/58296cd7ef722c193b8deaa8",
			"showTime" : "2016-11-14 15:51:22",
			"rootPubConlumnId" : "58214a83d6c45965757937da",
			"rootPubConlumnName" : "画框",
			"secondPubConlumnId" : "58293eadef722c116fe22066",
			"secondPubConlumnName" : "画框类别",
			"comment_list" : [],
			"price_fen" : "0"
		} ],
		"page" : "1",
		"lastPage" : "1",
		"pageSize" : "15",
		"count" : "1",
		"statusCode" : "200",
		"message" : "返回成功!"
	}
