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
			"id" : "583284c4ef722c3907a03c41",
			"pub_id" : "583284c4ef722c3907a03c41",
			"name" : "作品名称1",//名称
			"intro" : "5L2c5ZOB566A5LuL",//简介
			"state" : "1",
			"viewcount" : "3",//浏览数量
			"nice_count" : "0",//点赞数量
			"shoucang_count" : "0",//收藏数量
			"pic" : "attachFiles/20161121/583284c4ef722c3907a03c41/583284c4ef722c3907a03c44_file",
			"showTime" : "2016-11-21 13:23:16",
			"time" : "1479705796000",//系统时间	毫秒
			"rootPubConlumnId" : "57fca56def722c216b767c91",
			"rootPubConlumnName" : "内容管理",
			"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
			"secondPubConlumnName" : "艺术品",
			"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
			"thirdPubConlumnName" : "绘画作品",
			"comment_list" : [ {
				"user_show_name" : "潘天寿1",
				"user_logo" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/582eb917ef722c5f8e38f8c2_file",
				"comment_id" : "58328c98ef722c3c5571f669",
				"userId" : "58159e36d6c4596dd06bf7fc",
				"pub_id" : "583284c4ef722c3907a03c41",
				"content" : "5a+56K+E6K665Zue5aSN5rWL6K+V6K+E6K66MTIzZmRzZmRz",
				"viewcount" : "0",
				"nice_count" : "0",
				"shoucang_count" : "0",
				"state" : "1",
				"showTime" : "2016-11-21 13:56:40"
			} ],
			"years" : "年份作品简介",
			"price_fen" : "100",
			"pic_width" : "198",
			"pic_height" : "300",
			"cicun" : "100x500cm",
			"artist" : {//作家信息
				"picname" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/582eb917ef722c5f8e38f8c2_file",
				"nickname" : "潘天寿1",
				"realname" : "潘天寿1",
				"sheng" : "省",
				"shi" : "市",
				"balance" : "0",
				"address" : "地址4",
				"phone" : "联系电话3",
				"idCard" : "证件号码",
				"showAnquanJibie" : "极佳",
				"pic" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/582eb917ef722c5f8e38f8c2_file",
				"touxian" : "测试头衔",
				"dongtai_count" : "17",
				"shoucang_count" : "6",
				"guanzhu_count" : "12",
				"pub_id" : "58140e880e9f1111781740a8",
				"artistCard_id" : "58140e880e9f1111781740a8",
				"artist_id" : "58159e36d6c4596dd06bf7fc",
				"pic_back" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/58326008ef722c0f08ef0305_file",
				"pic_touxiang" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/58326008ef722c0f08ef0306_file",
				"intro" : "MzIx6L+w5o+PMzIx",
				"state" : "1",
				"viewcount" : "5",
				"nice_count" : "6"
			},
			"user_see_jsonArray" : [ {
				"picname" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/582eb917ef722c5f8e38f8c2_file",
				"nickname" : "潘天寿1",
				"realname" : "潘天寿1",
				"sheng" : "省",
				"shi" : "市",
				"balance" : "0",
				"address" : "地址4",
				"phone" : "联系电话3",
				"idCard" : "证件号码",
				"showAnquanJibie" : "极佳",
				"pic" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/582eb917ef722c5f8e38f8c2_file",
				"touxian" : "测试头衔",
				"dongtai_count" : "17",
				"shoucang_count" : "6",
				"guanzhu_count" : "12",
				"pub_id" : "58140e880e9f1111781740a8",
				"artistCard_id" : "58140e880e9f1111781740a8",
				"artist_id" : "58159e36d6c4596dd06bf7fc",
				"pic_back" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/58326008ef722c0f08ef0305_file",
				"pic_touxiang" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/58326008ef722c0f08ef0306_file",
				"intro" : "MzIx6L+w5o+PMzIx",
				"state" : "1",
				"viewcount" : "5",
				"nice_count" : "6"
			} ],
			"aartworksCompoment_jsonArray" : [//作品大图详情 作品详情内页 点击 作品显示作品大图的时候使用
					{
						"artworks_pic" : "attachFiles/20161121/583284c4ef722c3907a03c41/583284c4ef722c3907a03c43_file",
						"artworks_position" : {//作品位置 用户添加按钮识别是否是点了作品
							"x" : "62",
							"y" : "63",
							"width" : "99",
							"height" : "150"
						}
					},
					{
						"artworks_pic" : "attachFiles/20161121/583284c4ef722c3907a03c41/583284c4ef722c3907a03c42_file",
						"artworks_position" : {
							"x" : "62",
							"y" : "63",
							"width" : "99",
							"height" : "150"
						}
					} ]
		},
		"statusCode" : "200",
		"message" : "返回成功!"
	}