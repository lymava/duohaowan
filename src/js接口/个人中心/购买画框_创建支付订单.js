/**
 * 评论_资讯_作品
 */
// 地址 	{站点根目录}face/user/save_order.do
// 请求方式 get/post 
/**
 * 请求参数
 * 
 * 		//支付宝支付
		public static final Integer pay_method_alipay=3;
		//微信支付
		public static final Integer pay_method_weipay=4;
 * 
 * 	peyMethod	支付方式
 * 	product_id	画框系统编号
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"pay_data" : {
			"appid" : "wx622e032827e49132",
			"partnerid" : "1420424402",
			"prepay_id" : "wx20161219203456587bc4fb840733742514",
			"package" : "Sign=WXPay",
			"noncestr" : "123456",
			"timestamp" : "1482150569",
			"sign" : "341556F3B59207FFE24BBEBAF6237BCC"
		},
		"statusCode" : "200",
		"message" : "操作成功！"
	}