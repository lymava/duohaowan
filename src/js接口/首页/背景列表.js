/**
 * 背景列表
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
 * rootPubConlumnId			58214a7dd6c45965757937d9	//背景
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [
					{
						"id" : "5822e1f078e0802b1109c732",
						"pub_id" : "5822e1f078e0802b1109c732",
						"name" : "测试背景",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161109/5822e1f078e0802b1109c732/5825973778e080057f511917",
						"showTime" : "2016-11-09 16:44:32",
						"rootPubConlumnId" : "58214a7dd6c45965757937d9",
						"rootPubConlumnName" : "场景",
						"secondPubConlumnId" : "58214ac4d6c45965757937e6",
						"secondPubConlumnName" : "场景默认分类",
						"comment_list" : [],
						"width" : "684",
						"height" : "770",
						"count" : "1",
						"bili" : "88",
						"backgroundWallWhiteList" : [ {
							"position_x" : "208",
							"position_y" : "66",
							"width" : "243",
							"height" : "345",
							"backgroundWall_id" : "5822e1f078e0802b1109c732"
						} ]
					},{
						"id" : "582166a1ef722c1052bbba04",
						"pub_id" : "582166a1ef722c1052bbba04",
						"name" : "测试背景",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161108/582166a1ef722c1052bbba04/582598e278e080057f51191e",
						"showTime" : "2016-11-08 13:46:09",
						"rootPubConlumnId" : "58214a7dd6c45965757937d9",
						"rootPubConlumnName" : "场景",
						"secondPubConlumnId" : "58214ac4d6c45965757937e6",
						"secondPubConlumnName" : "场景默认分类",
						"comment_list" : [],
						"width" : "684",
						"height" : "770",
						"count" : "1",
						"bili" : "88",
						"backgroundWallWhiteList" : [ {
							"position_x" : "502",
							"position_y" : "68",
							"width" : "168",
							"height" : "342",
							"backgroundWall_id" : "582166a1ef722c1052bbba04"
						}, {
							"position_x" : "208",
							"position_y" : "66",
							"width" : "243",
							"height" : "345",
							"backgroundWall_id" : "582166a1ef722c1052bbba04"
						} ]
					} ],
			"page" : "1",
			"lastPage" : "1",
			"pageSize" : "15",
			"count" : "2",
			"statusCode" : "200",
			"message" : "返回成功!"
		}