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
 * pubConlumnId						583bdffeef722c2ab4a5fea7	//艺术展类别(固定)
 * pub.artGallery_id				583bed93ef722c32795fe537	//展馆编号
 * 
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [ {
			"id" : "583bee88ef722c32795fe539",
			"pub_id" : "583bee88ef722c32795fe539",
			"name" : "展览",
			"state" : "1",
			"viewcount" : "0",
			"nice_count" : "0",
			"shoucang_count" : "0",
			"pic" : "attachFiles/20161128/d41d8cd98f00b204e9800998ecf8427e/583beda5ef722c32795fe538",
			"showTime" : "2016-11-28 16:44:56",
			"time" : "1480322696000",
			"rootPubConlumnId" : "57fca56def722c216b767c91",
			"rootPubConlumnName" : "内容管理",
			"secondPubConlumnId" : "583bdfe4ef722c2ab4a5fea6",
			"secondPubConlumnName" : "艺术展",
			"thirdPubConlumnId" : "583bdffeef722c2ab4a5fea7",
			"thirdPubConlumnName" : "艺术展",
			"comment_list" : [],
			"zhanlan_zhanpin" : [ {
				"id" : "583bf3e2ef722c3571ecc577",
				"pub_id" : "583bf3e2ef722c3571ecc577",
				"name" : "321321",
				"intro" : "5bGV5ZOB566A5LuL",
				"state" : "1",
				"viewcount" : "0",
				"nice_count" : "0",
				"shoucang_count" : "0",
				"pic" : "attachFiles/20161128/583bf3e2ef722c3571ecc577/583bf3d9ef722c3571ecc576",
				"showTime" : "2016-11-28 17:07:46",
				"time" : "1480324066000",
				"rootPubConlumnId" : "57fca56def722c216b767c91",
				"rootPubConlumnName" : "内容管理",
				"secondPubConlumnId" : "583bdfe4ef722c2ab4a5fea6",
				"secondPubConlumnName" : "艺术展",
				"thirdPubConlumnId" : "583be011ef722c2ab4a5fea8",
				"thirdPubConlumnName" : "展览品",
				"comment_list" : []
			} ]
		} ],
		"page" : "1",
		"lastPage" : "1",
		"pageSize" : "15",
		"count" : "1",
		"statusCode" : "200",
		"message" : "返回成功!"
	}