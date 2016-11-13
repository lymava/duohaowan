/**
 * 卡纸列表
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
 * rootPubConlumnId			58253865ef722c174838108a	//卡纸根类别
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [
					{
						"id" : "5826768ed6c45921bce7919c",
						"pub_id" : "5826768ed6c45921bce7919c",
						"name" : "黑",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161112/5826768ed6c45921bce7919c/58267685d6c45921bce79199",
						"showTime" : "2016-11-12 09:55:26",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : [],
						"font_size" : "3.0",//卡纸内边框
						"font_size_aroud" : "1.5",//卡纸外边框
						"font_color" : "300f30"//卡纸颜色
					},
					{
						"id" : "5826768ed6c45921bce7919b",
						"pub_id" : "5826768ed6c45921bce7919b",
						"name" : "灰",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161112/5826768ed6c45921bce7919b/5826767dd6c45921bce79198",
						"showTime" : "2016-11-12 09:55:26",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : [],
						"font_size" : "3.0",
						"font_size_aroud" : "1.5",
						"font_color" : "210b21"
					},
					{
						"id" : "5826768ed6c45921bce7919a",
						"pub_id" : "5826768ed6c45921bce7919a",
						"name" : "黄",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161112/5826768ed6c45921bce7919a/58267671d6c45921bce79197",
						"showTime" : "2016-11-12 09:55:26",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : [],
						"font_color" : "871e87"
					},
					{
						"id" : "582538d9ef722c174838109b",
						"pub_id" : "582538d9ef722c174838109b",
						"name" : "黄",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538d9ef722c174838109b/58267671d6c45921bce79197",
						"showTime" : "2016-11-11 11:19:53",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : [],
						"font_color" : "913a91"
					},
					{
						"id" : "582538d9ef722c174838109a",
						"pub_id" : "582538d9ef722c174838109a",
						"name" : "灰",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538d9ef722c174838109a/5826767dd6c45921bce79198",
						"showTime" : "2016-11-11 11:19:53",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : [],
						"font_color" : "8c3b3b"
					},
					{
						"id" : "582538d9ef722c1748381099",
						"pub_id" : "582538d9ef722c1748381099",
						"name" : "黑",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538d9ef722c1748381099/58267685d6c45921bce79199",
						"showTime" : "2016-11-11 11:19:53",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : [],
						"font_color" : "5c0e5c"
					} ],
			"page" : "1",
			"lastPage" : "1",
			"pageSize" : "15",
			"count" : "6",
			"statusCode" : "200",
			"message" : "返回成功!"
		}