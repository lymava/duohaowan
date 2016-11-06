/**
 * 获取作家_作品_新闻_的详情
 */
// 地址 	{站点根目录}front/get_pub.do
// 请求方式 get/post 
/**
 * 参数说明
 * 
 * pub_id  						内容的系统编号
 * 如果已经登录需要再附加三个参数
 * 
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
			"id" : "58159b01d6c4596dd06bf7f9",
			"name" : "作8",
			"intro" : "5L2c5ZOB566A5LuL",
			"content" : "6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF",
			"state" : "1",
			"viewcount" : "13",//浏览数量
			"nice_count" : "2",//点赞数量
			"shoucang_count" : "3",//收藏数量
			"pic" : "attachFiles/20161030/58159b01d6c4596dd06bf7f9/581ace7aef722c0b7936d7f2",
			"showTime" : "2016-10-30 15:02:25",
			"rootPubConlumnId" : "57fca56def722c216b767c91",
			"rootPubConlumnName" : "内容管理",
			"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
			"secondPubConlumnName" : "艺术品",
			"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
			"thirdPubConlumnName" : "绘画作品",
			"comment_list" : [ {
				"userId" : "58159e36d6c4596dd06bf7fc",
				"user_show_name" : "王麻子",
				"pub_id" : "58159b01d6c4596dd06bf7f9",
				"viewcount" : "0",
				"nice_count" : "0",
				"shoucang_count" : "0",
				"state" : "1",
				"showTime" : "2016-11-03 15:46:34"
			} ],
			"pic_width" : "684",
			"pic_height" : "770",
			"zuozhe" : "作者",
			"years" : "2014",
			"chaodai" : "现代",
			"price_fen" : "25000000",
			"cicun" : "100x50cm",
			"showTag_list" : "[\"明代\",\"测试\"]",
			"artist" : {
				"picname" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/581ae930ef722c2380d067c9",
				"realname" : "潘天寿",
				"touxian" : "头衔",
				"zhiwei" : "职位",
				"artistCard_id" : "58140e880e9f1111781740a8",
				"artist_id" : "58159e36d6c4596dd06bf7fc",
				"pic_back" : "attachFiles/20161029/58140e880e9f1111781740a8/581ace6eef722c0b7936d7f1",
				"state" : "1",
				"viewcount" : "4",
				"nice_count" : "5",
				"shoucang_count" : "6"
			},
			"user_see_jsonArray" : [
					{
						"picname" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/581ae930ef722c2380d067c9",
						"realname" : "潘天寿",
						"artistCard_id" : "58140e880e9f1111781740a8",
						"artist_id" : "58159e36d6c4596dd06bf7fc",
						"pic_back" : "attachFiles/20161029/58140e880e9f1111781740a8/581ace6eef722c0b7936d7f1",
						"state" : "1",
						"viewcount" : "4",
						"nice_count" : "5",
						"shoucang_count" : "6"
					},
					{
						"picname" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/581ae930ef722c2380d067c9",
						"realname" : "潘天寿",
						"artistCard_id" : "58140e880e9f1111781740a8",
						"artist_id" : "58159e36d6c4596dd06bf7fc",
						"pic_back" : "attachFiles/20161029/58140e880e9f1111781740a8/581ace6eef722c0b7936d7f1",
						"state" : "1",
						"viewcount" : "4",
						"nice_count" : "5",
						"shoucang_count" : "6"
					} ]
		},
		"statusCode" : "200",
		"message" : "返回成功!"
	}