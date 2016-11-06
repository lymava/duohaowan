/**
 * 搜索作家_列表页
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
 * sort_filed					排序字段
 */
/**
 * 参数值
 * name							作品/作家名称 支持模糊搜索
 * secondPubConlumnId			5812ef5478e0802052dd7a2f	//搜索作品
 * secondPubConlumnId			581407b20e9f110d8cbbdb94	//搜索作家
 * tag_string							标签名称	书法家/画家
 * tag_type						标签 1/推荐	2/热门	3(热门+推荐)
 * 
 * 
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [
					{
						"picname" : "attachFiles/temp/581b0915d6c45925f82e4915",
						"realname" : "张景岳",
						"artistCard_id" : "5815bbafd6c459747a637851",
						"artist_id" : "581b0916d6c45925f82e4916",
						"pic" : "attachFiles/20161030/5815bbafd6c459747a637851/5815bbaed6c459747a637850",//头像
						"pic_back" : "attachFiles/20161030/5815bbafd6c459747a637851/5815bbaed6c459747a637850",//名片背景
						"intro" : "5YiY5Lyv6aqP",//作家简介1
						"state" : "1",
						"viewcount" : "1",
						"present_count" : "1",//礼物数量
						"nice_count" : "1",
						"shoucang_count" : "1"
					},
					{
						"picname" : "attachFiles/temp/581b087fd6c45925f82e4913",
						"realname" : "刘伯骏",
						"artistCard_id" : "5815bba5d6c459747a63784f",
						"artist_id" : "581b0881d6c45925f82e4914",
						"pic" : "attachFiles/20161030/5815bba5d6c459747a63784f/5815bba4d6c459747a63784e",
						"pic_back" : "attachFiles/20161030/5815bba5d6c459747a63784f/5815bba4d6c459747a63784e",
						"intro" : "5YiY5Lyv6aqP",
						"state" : "1"
					},
					{
						"realname" : "万力",
						"artistCard_id" : "5815bb5cd6c459747a637849",
						"artist_id" : "58159e67d6c4596dd06bf7fd",
						"pic" : "attachFiles/20161030/5815bb5cd6c459747a637849/581b083dd6c45925f82e4911",
						"pic_back" : "attachFiles/20161030/5815bb5cd6c459747a637849/581b083dd6c45925f82e4911",
						"intro" : "5LiH5Yqb",
						"state" : "1",
						"viewcount" : "1",
						"nice_count" : "2",
						"shoucang_count" : "3"
					},
					{
						"picname" : "attachFiles/20161030/58159e36d6c4596dd06bf7fc/581b40d8ef722c0b53343f0c",
						"realname" : "潘天寿",
						"artistCard_id" : "58140e880e9f1111781740a8",
						"artist_id" : "58159e36d6c4596dd06bf7fc",
						"pic" : "attachFiles/20161029/58140e880e9f1111781740a8/581b084cd6c45925f82e4912",
						"pic_back" : "attachFiles/20161029/58140e880e9f1111781740a8/581b084cd6c45925f82e4912",
						"state" : "1",
						"viewcount" : "4",
						"nice_count" : "5",
						"shoucang_count" : "6"
					} ],
			"page" : "1",
			"lastPage" : "1",
			"pageSize" : "15",
			"count" : "4",
			"statusCode" : "200",
			"message" : "返回成功!"
		}