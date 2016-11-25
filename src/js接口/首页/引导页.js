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
 * pubConlumnId			5837f4a9d6c459629f57d307	//卡纸根类别
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [
					{
						"id" : "5837f545d6c459629f57d30d",
						"pub_id" : "5837f545d6c459629f57d30d",
						"name" : "3",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161125/d41d8cd98f00b204e9800998ecf8427e/5837f544d6c459629f57d30c",
						"showTime" : "2016-11-25 16:24:37",
						"time" : "1480062277000",
						"rootPubConlumnId" : "56ef9534d812a83901549457",
						"rootPubConlumnName" : "资讯管理",
						"secondPubConlumnId" : "5837f4a9d6c459629f57d307",
						"secondPubConlumnName" : "引导页",
						"comment_list" : []
					},
					{
						"id" : "5837f536d6c459629f57d30b",
						"pub_id" : "5837f536d6c459629f57d30b",
						"name" : "2",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161125/d41d8cd98f00b204e9800998ecf8427e/5837f533d6c459629f57d30a",
						"showTime" : "2016-11-25 16:24:22",
						"time" : "1480062262000",
						"rootPubConlumnId" : "56ef9534d812a83901549457",
						"rootPubConlumnName" : "资讯管理",
						"secondPubConlumnId" : "5837f4a9d6c459629f57d307",
						"secondPubConlumnName" : "引导页",
						"comment_list" : []
					},
					{
						"id" : "5837f526d6c459629f57d309",
						"pub_id" : "5837f526d6c459629f57d309",
						"name" : "1",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161125/d41d8cd98f00b204e9800998ecf8427e/5837f524d6c459629f57d308",
						"showTime" : "2016-11-25 16:24:06",
						"time" : "1480062246000",
						"rootPubConlumnId" : "56ef9534d812a83901549457",
						"rootPubConlumnName" : "资讯管理",
						"secondPubConlumnId" : "5837f4a9d6c459629f57d307",
						"secondPubConlumnName" : "引导页",
						"comment_list" : []
					} ],
			"page" : "1",
			"lastPage" : "1",
			"pageSize" : "15",
			"count" : "3",
			"statusCode" : "200",
			"message" : "返回成功!"
		}