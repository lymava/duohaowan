/**
 * 获取  获取首页顶部新闻
 */
// 地址 	{站点根目录}front/list_pub.do
// 请求方式 get/post 
/**
 * 参数说明
 * 
 * page  						页码(默认第一页)
 * pageSize						每页数量(默认15)
 * pubConlumnId 				产品分类
 * secondPubConlumnId			二级分类
 * thirdPubConlumnId			三级分类
 * sort_filed					排序字段
 */
/**
 * 参数值
 * 
 * pubConlumnId  						57fca5edef722c216b767c98
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [
					{
						"id" : "5812e1e378e0802052dd7a27",
						"name" : "逍遥游心-黄原书画艺术展",
						"pic" : "attachFiles/20161028/5812e1e378e0802052dd7a27/5812e1ba78e0802052dd7a1f",
						"intro" : "6YCN6YGl5ri45b+DLem7hOWOn+S5pueUu+iJuuacr+WxlQ==",
						"content" : "6YCN6YGl5ri45b+DLem7hOWOn+S5pueUu+iJuuacr+WxlTxiciAvPg==",
						"state" : "1",
						"rootPubConlumnId" : "56ef9534d812a83901549457",
						"rootPubConlumnName" : "资讯管理",
						"secondPubConlumnId" : "57fca5d9ef722c216b767c97",
						"secondPubConlumnName" : "首页内容",
						"thirdPubConlumnId" : "57fca5edef722c216b767c98",
						"thirdPubConlumnName" : "首页图片滚动新闻",
							"pub_link_id" : "58369797d6c4594e7509b91f",
							"pub_link_name" : "刘新德",
							"pub_link_secondPubConlumn_id" : "581407b20e9f110d8cbbdb94",
							"pub_link_secondPubConlumn_name" : "作家名片",
							"pub_link_pubConlumn_id" : "581407b20e9f110d8cbbdb94",
							"pub_link_pubConlumn_name" : "作家名片"
					},
					{
						"id" : "5812e1e378e0802052dd7a26",
						"name" : "逍遥游心-黄原书画艺术展",
						"pic" : "attachFiles/20161028/5812e1e378e0802052dd7a26/5812e19878e0802052dd7a1e",
						"intro" : "6YCN6YGl5ri45b+DLem7hOWOn+S5pueUu+iJuuacr+WxlQ==",
						"content" : "6YCN6YGl5ri45b+DLem7hOWOn+S5pueUu+iJuuacr+WxlTxiciAvPg==",
						"state" : "1",
						"rootPubConlumnId" : "56ef9534d812a83901549457",
						"rootPubConlumnName" : "资讯管理",
						"secondPubConlumnId" : "57fca5d9ef722c216b767c97",
						"secondPubConlumnName" : "首页内容",
						"thirdPubConlumnId" : "57fca5edef722c216b767c98",
						"thirdPubConlumnName" : "首页图片滚动新闻"
					} ],
			"statusCode" : "200",
			"message" : "返回成功!"
		}
