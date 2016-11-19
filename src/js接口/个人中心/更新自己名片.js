/**
 * 更新自己名片
 */
// 地址 	{站点根目录}face/user/updateArtistCard.do
// 请求方式 get/post 
/**
 * 请求参数
 * intro	描述
 * pic		<file>名片背景(先将图片读入二进制数组/然后再base64)</file>
 */
// 返回样例 {"statusCode":"300","message":"错误原因！"}//错误
// 返回结果
var result = {
		"statusCode" : "200",
		"message" : "操作成功"
	}
