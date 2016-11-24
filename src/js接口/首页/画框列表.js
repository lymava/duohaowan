/**
 * 画框列表
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
 * pubConlumnId						58214abdd6c45965757937e5	//画框
 * paintingFrameConlumn_id			//选取哪个类别就传哪个类别的值
 * backgroundWall_id				//背景编号
 * width					//宽度 像素(整数)
 * height					//高度 像素(整数)
 * 
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result ={
		"data" : [
					{
						"id" : "58283da8ef722c400404aa63",
						"pub_id" : "58283da8ef722c400404aa63",
						"name" : "1:3",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161113/58283da8ef722c400404aa63/58283d9eef722c400404aa62",
						"showTime" : "2016-11-13 18:17:12",
						"rootPubConlumnId" : "58214a83d6c45965757937da",
						"rootPubConlumnName" : "画框",
						"secondPubConlumnId" : "58214abdd6c45965757937e5",
						"secondPubConlumnName" : "画框",
						"comment_list" : [],
						"width" : "557",
						"height" : "188",
						"position_x" : "28",
						"position_y" : "29",
						"inner_width" : "553",
						"inner_height" : "129"
					},
					{
						"id" : "582822d2ef722c2326f37157",
						"pub_id" : "582822d2ef722c2326f37157",
						"name" : "1:1",
						"state" : "1",
						"viewcount" : "0",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161113/582822d2ef722c2326f37157/582822c4ef722c2326f37156",
						"showTime" : "2016-11-13 16:22:42",
						"rootPubConlumnId" : "58214a83d6c45965757937da",
						"rootPubConlumnName" : "画框",
						"secondPubConlumnId" : "58214abdd6c45965757937e5",
						"secondPubConlumnName" : "画框",
						"comment_list" : [],
						"width" : "953",
						"height" : "953",
						"position_x" : "56",
						"position_y" : "60",
						"inner_width" : "841",
						"inner_height" : "838"
					} ],
			"page" : "1",
			"lastPage" : "1",
			"pageSize" : "15",
			"count" : "2",
			"statusCode" : "200",
			"message" : "返回成功!"
		}
