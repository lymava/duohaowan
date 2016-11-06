/**
 * 获取  热门_作品_展馆_作家
 */
// 地址 	{站点根目录}front/list_pub.do
// 请求方式 get/post 
/**
 * 参数说明
 * 
 * page  						页码
 * pageSize						每页数量
 * name 						搜索名称(支持模糊搜索) 
 * pubConlumnId 				内容分类
 * secondPubConlumnId			二级分类
 * thirdPubConlumnId			三级分类
 * sort_filed					排序字段(viewcount/nice_count)(浏览次数/点赞次数)
 * tag_type						标签 1/推荐	2/热门	3(热门+推荐)
 */
/**
 * 参数值
 * 
 * rootPubConlumnId  						57fca56def722c216b767c91
 * tag_type									2
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"data" : [
					{
						"id" : "5812cc1f78e0802052dd7a14",
						"name" : "“云南味道”咖啡拉花艺术大赛亮相中国国际食品博览会",
						"intro" : "MTDmnIgyN+aXpe+8jOS4gOWcuuWIq+W8gOeUn+mdoueahOKAnOS6keWNl+WRs+mBk+KAneWSluWVoeaLieiKseiJuuacr+Wkp+i1m+WwhuWcqOS4reWbveWbvemZhemjn+WTgeWNmuiniOS8mueOsOWcuijkuIrmtbflsZXop4jkuK3lv4Mp5ouJ5byA5bqP5bmV44CC5q2k5qyh5aSn6LWb5piv5Zyo6L+Z5bqn57uP5Y6G5LqGNjHlubTpo47pm6jljoblj7LnmoTogIHlu7rnrZHkuK3kuL7lip7nmoTnrKzkuIDlnLrlhbPkuo7lkpbllaHnmoTmr5TotZvvvIzkuZ/mmK/po5/ljZrkvJrlr7nlkpbllaHotZvkuovlkozlkpbllaHmlofljJblsZXnpLrnmoTnrKzkuIDmrKHlsJ3or5XvvIzorqnmiJHku6zmnaXkuIDotbfnnIvnnIvvvIzov5nlnLrmtLvliqjmnInlk6rkupvnnIvngrnjgIIg",
						"content" : "MTDmnIgyN+aXpe+8jOS4gOWcuuWIq+W8gOeUn+mdoueahOKAnOS6keWNl+WRs+mBk+KAneWSluWVoeaLieiKseiJuuacr+Wkp+i1m+WwhuWcqOS4reWbveWbvemZhemjn+WTgeWNmuiniOS8mueOsOWcuijkuIrmtbflsZXop4jkuK3lv4Mp5ouJ5byA5bqP5bmV44CC5q2k5qyh5aSn6LWb5piv5Zyo6L+Z5bqn57uP5Y6G5LqGNjHlubTpo47pm6jljoblj7LnmoTogIHlu7rnrZHkuK3kuL7lip7nmoTnrKzkuIDlnLrlhbPkuo7lkpbllaHnmoTmr5TotZvvvIzkuZ/mmK/po5/ljZrkvJrlr7nlkpbllaHotZvkuovlkozlkpbllaHmlofljJblsZXnpLrnmoTnrKzkuIDmrKHlsJ3or5XvvIzorqnmiJHku6zmnaXkuIDotbfnnIvnnIvvvIzov5nlnLrmtLvliqjmnInlk6rkupvnnIvngrnjgII=",
						"state" : "1",
						"rootPubConlumnId" : "56ef9534d812a83901549457",
						"rootPubConlumnName" : "资讯管理",
						"secondPubConlumnId" : "57fca5d9ef722c216b767c97",
						"secondPubConlumnName" : "首页内容",
						"thirdPubConlumnId" : "57fca5ffef722c216b767c99",
						"thirdPubConlumnName" : "首页文字滚动资讯"
					},
					{
						"id" : "5812cc1f78e0802052dd7a13",
						"name" : "2016第四届北京ONE艺术周|胡同剧场的隐秘入口",
						"intro" : "MjAxNuesrOWbm+WxiuWMl+S6rE9OReiJuuacr+WRqHzog6HlkIzliaflnLrnmoTpmpDnp5jlhaXlj6M=",
						"content" : "PGgxPjIwMTbnrKzlm5vlsYrljJfkuqxPTkXoibrmnK/lkah86IOh5ZCM5Ymn5Zy655qE6ZqQ56eY5YWl5Y+jPC9oMT48YnIgLz4=",
						"state" : "1",
						"rootPubConlumnId" : "56ef9534d812a83901549457",
						"rootPubConlumnName" : "资讯管理",
						"secondPubConlumnId" : "57fca5d9ef722c216b767c97",
						"secondPubConlumnName" : "首页内容",
						"thirdPubConlumnId" : "57fca5ffef722c216b767c99",
						"thirdPubConlumnName" : "首页文字滚动资讯"
					} ],
			"statusCode" : "200",
			"message" : "返回成功!"
		}
