/**
 * 问学篇_导师列表
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
 * pubConlumnId						5833e68dd6c4592b41d886f0	//问学篇列表类别编号(固定)
 * artist_id						58159e67d6c4596dd06bf7fd	//提问会员的编号
 * artist_instructor_id				58286542d6c45934ac9066d8	//被提问的导师的编号
 * 
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [ {
			"id" : "583c4941ef722c3388fb88cf",
			"pub_id" : "583c4941ef722c3388fb88cf",
			"name" : "ddddddddd",
			"intro" : "ZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRk",
			"state" : "1",
			"viewcount" : "0",
			"nice_count" : "0",
			"shoucang_count" : "0",
			"showTime" : "2016-11-28 23:12:01",
			"time" : "1480345921000",
			"rootPubConlumnId" : "5833e23ed6c4592b41d886ed",
			"rootPubConlumnName" : "艺术观",
			"secondPubConlumnId" : "5833e68dd6c4592b41d886f0",
			"secondPubConlumnName" : "问学篇",
			"comment_list" : [],
			"artist" : {
				"picname" : "attachFiles/temp/5832d1aad6c45923374bed14",
				"nickname" : "万力",
				"realname" : "万力",
				"sheng" : "北京",
				"shi" : "北京市",
				"balance" : "0",
				"showAnquanJibie" : "极佳",
				"pic" : "attachFiles/temp/5832d1aad6c45923374bed14",
				"dongtai_count" : "17",
				"shoucang_count" : "3",
				"guanzhu_count" : "12",
				"pub_id" : "5815bb5cd6c459747a637849",
				"artistCard_id" : "5815bb5cd6c459747a637849",
				"artist_id" : "58159e67d6c4596dd06bf7fd",
				"pic_back" : "attachFiles/20161030/5815bb5cd6c459747a637849/58350d1cef722c437e5b4b9f",
				"pic_touxiang" : "attachFiles/temp/58350d1fef722c437e5b4ba0",
				"intro" : "5LiH5Yqb",
				"state" : "1",
				"viewcount" : "14",
				"nice_count" : "2"
			},
			"artist_instructor" : {
				"picname" : "attachFiles/temp/58325cf4d6c4597eb85cc99a",
				"nickname" : "作者2",
				"realname" : "作者2",
				"sheng" : "北京",
				"shi" : "北京市",
				"integral" : "0",
				"balance" : "0",
				"showAnquanJibie" : "强",
				"pic" : "attachFiles/temp/58325cf4d6c4597eb85cc99a",
				"zhiwei" : "职位3",
				"dongtai_count" : "17",
				"shoucang_count" : "0",
				"guanzhu_count" : "12",
				"pub_id" : "582974e8d6c459379b8bbbcf",
				"artistCard_id" : "582974e8d6c459379b8bbbcf",
				"artist_id" : "58286542d6c45934ac9066d8",
				"pic_back" : "attachFiles/20161114/582974e8d6c459379b8bbbcf/582974e8d6c459379b8bbbd1_file",
				"state" : "1",
				"viewcount" : "1",
				"nice_count" : "0"
			},
			"isShoucang" : "false"
		} ],
		"page" : "1",
		"lastPage" : "1",
		"pageSize" : "15",
		"count" : "1",
		"statusCode" : "200",
		"message" : "返回成功!"
	}