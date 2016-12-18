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
			"return_code" : "SUCCESS",
			"return_msg" : "OK",
			"appid" : "wx622e032827e49132",
			"mch_id" : "1420424402",
			"device_info" : "WEB",
			"nonce_str" : "92pkrkWS800uOGUY",
			"sign" : "018DD92477928427176ECC36BB85CBF7",
			"result_code" : "SUCCESS",
			"prepay_id" : "wx20161218173615d2cd5eb5320654763907",
			"trade_type" : "APP"
		},
		"statusCode" : "200",
		"message" : "操作成功！"
	}