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
						"id" : "582538d9ef722c174838109b",
						"pub_id" : "582538d9ef722c174838109b",
						"name" : "黄",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538d9ef722c174838109b/582538a0ef722c1748381090",
						"showTime" : "2016-11-11 11:19:53",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : []
					},
					{
						"id" : "582538d9ef722c174838109a",
						"pub_id" : "582538d9ef722c174838109a",
						"name" : "灰",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538d9ef722c174838109a/582538afef722c1748381092",
						"showTime" : "2016-11-11 11:19:53",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : []
					},
					{
						"id" : "582538d9ef722c1748381099",
						"pub_id" : "582538d9ef722c1748381099",
						"name" : "黑",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538d9ef722c1748381099/582538bbef722c1748381094",
						"showTime" : "2016-11-11 11:19:53",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : []
					},
					{
						"id" : "582538d9ef722c1748381098",
						"pub_id" : "582538d9ef722c1748381098",
						"name" : "测试",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538d9ef722c1748381098/582538cfef722c1748381096",
						"showTime" : "2016-11-11 11:19:53",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : []
					},
					{
						"id" : "582538d4ef722c1748381097",
						"pub_id" : "582538d4ef722c1748381097",
						"name" : "测试",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538d4ef722c1748381097/582538cfef722c1748381096",
						"showTime" : "2016-11-11 11:19:48",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : []
					},
					{
						"id" : "582538beef722c1748381095",
						"pub_id" : "582538beef722c1748381095",
						"name" : "黑",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538beef722c1748381095/582538bbef722c1748381094",
						"showTime" : "2016-11-11 11:19:26",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : []
					},
					{
						"id" : "582538b5ef722c1748381093",
						"pub_id" : "582538b5ef722c1748381093",
						"name" : "灰",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538b5ef722c1748381093/582538afef722c1748381092",
						"showTime" : "2016-11-11 11:19:17",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : []
					},
					{
						"id" : "582538abef722c1748381091",
						"pub_id" : "582538abef722c1748381091",
						"name" : "黄",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161111/582538abef722c1748381091/582538a0ef722c1748381090",
						"showTime" : "2016-11-11 11:19:07",
						"rootPubConlumnId" : "58253865ef722c174838108a",
						"rootPubConlumnName" : "卡纸",
						"secondPubConlumnId" : "58253895ef722c174838108f",
						"secondPubConlumnName" : "卡纸默认分类",
						"comment_list" : []
					} ],
			"page" : "1",
			"lastPage" : "1",
			"pageSize" : "15",
			"count" : "8",
			"statusCode" : "200",
			"message" : "返回成功!"
		}