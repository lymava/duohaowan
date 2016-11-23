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
 * secondPubConlumnId			5812ef5478e0802052dd7a2f	//搜索作品
 * artist_id					58159e36d6c4596dd06bf7fc	作家系统编号
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [
					{
						"id" : "583502cad6c45939e2bd206e",
						"pub_id" : "583502cad6c45939e2bd206e",
						"state" : "1",
						"viewcount" : "2",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161123/583502cad6c45939e2bd206e/583502cbd6c45939e2bd206f_file",
						"showTime" : "2016-11-23 10:45:30",
						"time" : "1479869130000",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
						"thirdPubConlumnName" : "绘画作品",
						"comment_list" : [],
						"pic_width" : "720",
						"pic_height" : "960",
						"cicun" : "30x50cm",
						"artist" : {
							"picname" : "attachFiles/temp/583005d7d6c4597eb85cc909",
							"nickname" : "民警1101",
							"realname" : "民警1101",
							"sheng" : "北京",
							"shi" : "北京市",
							"integral" : "0",
							"balance" : "0",
							"showAnquanJibie" : "强",
							"pic" : "attachFiles/temp/583005d7d6c4597eb85cc909",
							"touxian" : "中国测试协会会长",
							"zhiwei" : "中国书画协会会长",
							"dongtai_count" : "17",
							"shoucang_count" : "0",
							"guanzhu_count" : "12",
							"pub_id" : "5828818fd6c459379b8bbba6",
							"artistCard_id" : "5828818fd6c459379b8bbba6",
							"artist_id" : "581426f40e9f1113f4736c1b",
							"pic_back" : "attachFiles/20161113/5828818fd6c459379b8bbba6/58215f3ad6c45965757937e9",
							"pic_touxiang" : "attachFiles/temp/5835861aef722c48ab0911ac",
							"intro" : "5bim5oiR5amG5amG5paw5YWs5Y+46ZmM55Sf5Lq65L2g5Y+q6ZyA6KaB",
							"state" : "1",
							"viewcount" : "7",
							"nice_count" : "0"
						},
						"aartworksCompoment_jsonArray" : [ {
							"artworks_pic" : "attachFiles/20161123/583502cad6c45939e2bd206e/37a6259cc0c1dae299a7866489dff0bd",
							"artworks_position" : {
								"x" : "73",
								"y" : "85",
								"width" : "575",
								"height" : "783"
							}
						} ]
					},
					{
						"id" : "5835024fd6c45939e2bd206a",
						"pub_id" : "5835024fd6c45939e2bd206a",
						"state" : "1",
						"viewcount" : "1",
						"nice_count" : "0",
						"shoucang_count" : "0",
						"pic" : "attachFiles/20161123/5835024fd6c45939e2bd206a/58350250d6c45939e2bd206b_file",
						"showTime" : "2016-11-23 10:43:27",
						"time" : "1479869007000",
						"rootPubConlumnId" : "57fca56def722c216b767c91",
						"rootPubConlumnName" : "内容管理",
						"secondPubConlumnId" : "5812ef5478e0802052dd7a2f",
						"secondPubConlumnName" : "艺术品",
						"thirdPubConlumnId" : "5812ef8078e0802052dd7a31",
						"thirdPubConlumnName" : "绘画作品",
						"comment_list" : [],
						"pic_width" : "801",
						"pic_height" : "908",
						"cicun" : "30x50cm",
						"artist" : {
							"picname" : "attachFiles/temp/583005d7d6c4597eb85cc909",
							"nickname" : "民警1101",
							"realname" : "民警1101",
							"sheng" : "北京",
							"shi" : "北京市",
							"integral" : "0",
							"balance" : "0",
							"showAnquanJibie" : "强",
							"pic" : "attachFiles/temp/583005d7d6c4597eb85cc909",
							"touxian" : "中国测试协会会长",
							"zhiwei" : "中国书画协会会长",
							"dongtai_count" : "17",
							"shoucang_count" : "0",
							"guanzhu_count" : "12",
							"pub_id" : "5828818fd6c459379b8bbba6",
							"artistCard_id" : "5828818fd6c459379b8bbba6",
							"artist_id" : "581426f40e9f1113f4736c1b",
							"pic_back" : "attachFiles/20161113/5828818fd6c459379b8bbba6/58215f3ad6c45965757937e9",
							"pic_touxiang" : "attachFiles/temp/5835861aef722c48ab0911ac",
							"intro" : "5bim5oiR5amG5amG5paw5YWs5Y+46ZmM55Sf5Lq65L2g5Y+q6ZyA6KaB",
							"state" : "1",
							"viewcount" : "7",
							"nice_count" : "0"
						},
						"aartworksCompoment_jsonArray" : [ {
							"artworks_pic" : "attachFiles/20161123/5835024fd6c45939e2bd206a/37a6259cc0c1dae299a7866489dff0bd",
							"artworks_position" : {
								"x" : "95",
								"y" : "116",
								"width" : "574",
								"height" : "728"
							}
						} ]
					} ],
			"page" : "1",
			"lastPage" : "64",
			"pageSize" : "2",
			"count" : "127",
			"statusCode" : "200",
			"message" : "返回成功!"
		}
