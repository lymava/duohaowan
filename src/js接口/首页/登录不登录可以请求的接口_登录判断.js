/**
 * 参数说明
 * 
 * 如果已经登录需要再附加三个参数 纯http参数
 * login_key	是登录之后返回的key
 * randCode		自己任意生成
 * user_sign	用户签名的字符串
 * 
 * 签名规则
	String randCode = System.currentTimeMillis()+"";
	String user_sign = Md5Util.MD5Normal(login_key+randCode.toLowerCase());
 */ 