/**
 * 最新作品
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
 * 
 * secondPubConlumnId  						5812ef5478e0802052dd7a2f
 * tag_type						标签 1/推荐	2/热门	3(热门+推荐)
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [
					{
						"id" : "58159b01d6c4596dd06bf7f9",
						"name" : "作8",
						"pic" : "attachFiles/20161030/58159b01d6c4596dd06bf7f9/58159b01d6c4596dd06bf7f8",
						"state" : "1",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
						"thirdPubConlumnName" : "绘画作品",
						"pic_width" : "682",
						"pic_height" : "715",
						"zuozhe" : "作者",
						"years" : "2014",
						"chaodai" : "现代",
						"cicun" : "100x50cm"
					},
					{
						"id" : "58159aeed6c4596dd06bf7f7",
						"name" : "作7",
						"pic" : "attachFiles/20161030/58159aeed6c4596dd06bf7f7/58159ad9d6c4596dd06bf7f6",
						"state" : "1",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
						"thirdPubConlumnName" : "绘画作品",
						"pic_width" : "684",
						"pic_height" : "447",
						"zuozhe" : "作者",
						"years" : "2016",
						"chaodai" : "当代",
						"cicun" : "100x50cm"
					},
					{
						"id" : "58159ac8d6c4596dd06bf7f5",
						"name" : "作6",
						"pic" : "attachFiles/20161030/58159ac8d6c4596dd06bf7f5/58159ac6d6c4596dd06bf7f4",
						"state" : "1",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
						"thirdPubConlumnName" : "绘画作品",
						"pic_width" : "684",
						"pic_height" : "398"
					},
					{
						"id" : "58159ab3d6c4596dd06bf7f3",
						"name" : "作5",
						"pic" : "attachFiles/20161030/58159ab3d6c4596dd06bf7f3/58159ab0d6c4596dd06bf7f2",
						"state" : "1",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
						"thirdPubConlumnName" : "绘画作品",
						"pic_width" : "684",
						"pic_height" : "499"
					},
					{
						"id" : "58159a9ad6c4596dd06bf7f1",
						"name" : "作4",
						"pic" : "attachFiles/20161030/58159a9ad6c4596dd06bf7f1/58159a99d6c4596dd06bf7f0",
						"state" : "1",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
						"thirdPubConlumnName" : "绘画作品",
						"pic_width" : "684",
						"pic_height" : "770"
					},
					{
						"id" : "58159a88d6c4596dd06bf7ee",
						"name" : "作3",
						"pic" : "attachFiles/20161030/58159a88d6c4596dd06bf7ee/58159cb9d6c4596dd06bf7fb",
						"state" : "1",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
						"thirdPubConlumnName" : "绘画作品",
						"pic_width" : "684",
						"pic_height" : "424"
					},
					{
						"id" : "58159a71d6c4596dd06bf7ed",
						"name" : "枫桥夜泊",
						"pic" : "attachFiles/20161030/58159a71d6c4596dd06bf7ed/58159a6fd6c4596dd06bf7ec",
						"state" : "1",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef7878e0802052dd7a30",
						"thirdPubConlumnName" : "书法作品",
						"pic_width" : "684",
						"pic_height" : "904",
						"zuozhe" : "作者",
						"years" : "2013",
						"chaodai" : "现代",
						"cicun" : "100x50cm"
					},
					{
						"id" : "58159a37d6c4596dd06bf7eb",
						"name" : "破壁",
						"pic" : "attachFiles/20161030/58159a37d6c4596dd06bf7eb/58159a34d6c4596dd06bf7ea",
						"state" : "1",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef7878e0802052dd7a30",
						"thirdPubConlumnName" : "书法作品",
						"pic_width" : "684",
						"pic_height" : "528"
					} ],
					"page" : "1",//当前页
					"lastPage" : "1",//最后一页
					"pageSize" : "15",//每页数量
					"count" : "1",//总数量
			"statusCode" : "200",
			"message" : "返回成功!"
		}