import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import com.google.gson.JsonObject;

import java.util.Set;

public class Duohaowan {
	
	 /**
	  * 服务器地址
	  */
	 public static final String baseUrl = "http://121.40.177.251:3330/duohaowan/";
	 /**
	  * 本地地址
	  */
//	 public static final String baseUrl = "http://localhost:8080/duohaowan/";
	 
	 public static  Map<String,String> entityParemeter_map = new HashMap<String,String>();
	 
	 
	 public static final String login_name = "pantianshou";
	 public static final String login_key = "829eb6b4b4a0f11a0f4a8714";
	 public static final String userpwd = "123456";
	 
		public static final Integer client_type_xml = 1;
		public static final Integer client_type_json = 2;
	 
	 
	 public static void main(String[] args) throws Exception {
		 
		 //获取首页顶部新闻
//		 entityParemeter_map.put("pubConlumnId", "57fca5edef722c216b767c98");
//		 String listPub_top = listPub();
//		 System.out.println(listPub_top);
		 //获取首页顶部新闻
//		 entityParemeter_map.put("pubConlumnId", "57fca5ffef722c216b767c99");
//		 String listPub_top_news = listPub();
//		 System.out.println(listPub_top_news);
		 //热门
//		 entityParemeter_map.put("rootPubConlumnId", "57fca56def722c216b767c91");
//		 entityParemeter_map.put("tag_type", "2");
//		 String listPub = listPub();
//		 System.out.println(listPub);
		 //最新作品 
//		 entityParemeter_map.put("secondPubConlumnId", "5812ef5478e0802052dd7a2f");
//		 String listPub = listPub();
//		 System.out.println(listPub); 
		 //获取作家 作品 新闻 的详情
//		 entityParemeter_map.put("pub_id", "58159b01d6c4596dd06bf7f9");
//		 String get_pub = get_pub();
//		 System.out.println(get_pub);
		 //简洁登录
//		 String login_simple = login_simple();
//		 System.out.println(login_simple);
		 //更新用户的基础信息
//		 String updateSelf = updateSelf();
//		 System.out.println(updateSelf);
		 //评论内容
//		 String comment_pub = comment_pub();
//		 System.out.println(comment_pub);
		 //给评论点赞
//		 String nice_comment = nice_comment();
//		 System.out.println(nice_comment);
		 //给资讯点赞
//		 String nice_pub = nice_pub();
//		 System.out.println(nice_pub);
		 //收藏资讯
//		 String shoucang_pub = shoucang_pub();
//		 System.out.println(shoucang_pub);
		 
		 //作家列表页
		 entityParemeter_map.put("secondPubConlumnId", "581407b20e9f110d8cbbdb94");
		 entityParemeter_map.put("tag_string", "书法家");
		 String listPub = listPub();
		 System.out.println(listPub); 
	 } 
	 	/**
		 * 收藏资讯
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String shoucang_pub() throws Exception {

			String urlString = baseUrl + "face/user/shoucang_pub.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("pub_id", "58159b01d6c4596dd06bf7f9");
			jsonObject.addProperty("memo", "备注");

			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
		/**
		 * 给资讯点赞
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String nice_pub() throws Exception {

			String urlString = baseUrl + "face/user/nice_pub.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("pub_id", "58159b01d6c4596dd06bf7f9");

			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
		 /**
		 * 给评论点赞
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String nice_comment() throws Exception {

			String urlString = baseUrl + "face/user/nice_comment.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("comment_id", "581b3ff0ef722c0b53343f0b");

			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
		 * 获取用户自己信息
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String getUserInfo() throws Exception {

			String urlString = baseUrl + "face/user/getUserInfo.do";
			
			JsonObject jsonObject = new JsonObject();
			

			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
		 * 评论内容
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String comment_pub() throws Exception {

			String urlString = baseUrl + "face/user/comment_pub.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("pub_id", "58159b01d6c4596dd06bf7f9");
			jsonObject.addProperty("content", "测试评论123fdsfds");

			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
		 * 更新用户的基础信息
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String updateSelf() throws Exception {

			String urlString = baseUrl + "face/user/updateSelf.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("realname", "潘天寿");
			jsonObject.addProperty("nickname", "潘潘");
			jsonObject.addProperty("phone", "联系电话");
			jsonObject.addProperty("addr", "地址");
			jsonObject.addProperty("sheng", "省");
			jsonObject.addProperty("shi", "市");
			jsonObject.addProperty("birthDate", "出生日期");
			
			byte[] readByte = IOUtil.readByte("/home/lymava/workhome/program/开发项目/林多好玩/首页720/热门6.jpg");
			
			String encodeHexString = HexM.encodeHexString(readByte);
			
			jsonObject.addProperty("pic", encodeHexString);
			jsonObject.addProperty("idCard", "证件号码");
 
			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
		 * 简洁登录
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String login_simple() throws Exception {
			
			 String randCode = System.currentTimeMillis()+"";
			 
			String md5Final  = Md5Util.MD5Normal(userpwd);
			String userpwd_final = Md5Util.MD5Normal(md5Final+randCode.toLowerCase());
			
			 entityParemeter_map.put("username", login_name);
			 entityParemeter_map.put("randCode", randCode);
			 entityParemeter_map.put("userpwd", userpwd_final);

			String urlString = baseUrl + "front/login_simple.do";

			HttpPost hp = new HttpPost(new URL(urlString));
			
			Set<Entry<String, String>> entrySet = entityParemeter_map.entrySet();
			for (Entry<String, String> entityKeyValue : entrySet) {
				hp.addParemeter(entityKeyValue.getKey(), entityKeyValue.getValue()+"");
			}
			
			String result = hp.getResult();

			return result;
		}
		/**
		 * 获取内容详情
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String get_pub() throws Exception {
			
			 String randCode = System.currentTimeMillis()+"";
			String user_sign = Md5Util.MD5Normal(login_key+randCode.toLowerCase());
			
			
			entityParemeter_map.put("login_name", login_name);
			entityParemeter_map.put("randCode", randCode);
			entityParemeter_map.put("user_sign", user_sign);

			String urlString = baseUrl + "front/get_pub.do";

			HttpPost hp = new HttpPost(new URL(urlString));
			
			Set<Entry<String, String>> entrySet = entityParemeter_map.entrySet();
			for (Entry<String, String> entityKeyValue : entrySet) {
				hp.addParemeter(entityKeyValue.getKey(), entityKeyValue.getValue()+"");
			}
			
			String result = hp.getResult();

			return result;
		}
	 /**
		 * 获取内容列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String listPub() throws Exception {

			String urlString = baseUrl + "front/list_pub.do";

			HttpPost hp = new HttpPost(new URL(urlString));
			
			Set<Entry<String, String>> entrySet = entityParemeter_map.entrySet();
			for (Entry<String, String> entityKeyValue : entrySet) {
				hp.addParemeter(entityKeyValue.getKey(), entityKeyValue.getValue()+"");
			}
			
			hp.addParemeter("page", "1");
			hp.addParemeter("pageSize", "15");
			String result = hp.getResult();

			return result;
		}
		/**
		 * 获取栏目类别的图片
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String getPubConlumn(String pubConlumnId) throws Exception {

			String urlString = baseUrl + "front/getPubConlumn.do";

			HttpPost hp = new HttpPost(new URL(urlString));

			hp.addParemeter("pubConlumnId", pubConlumnId);

			String result = hp.getResult();

			return result;
		}
		
		public static String send_user_data(String url,String json) throws Exception {
			String request_data = request_data(url, login_key, login_name, json);
			return request_data;
		}
		 
		 public static String request_data(String url,String key,String name,String json) throws Exception {
			   	
			   	String randCode = System.currentTimeMillis()+"";
			   	  
			   	HttpPost hp = null; 
			   	
			   	String tempKey = Md5Util.MD5Normal(key+randCode);
			   	 
			   	
					try {
						
				    	hp = new HttpPost(new URL(url));
				    	
				    	hp.addParemeter("name", name);
				    	hp.addParemeter("randCode", randCode);
				    	hp.addParemeter("encrpt", "enAes");
				    	hp.addParemeter("sign_only","true");
				    	hp.addParemeter("mode",""+client_type_json );
						
				    	hp.addParemeter("data", json);
				    	String mac = Md5Util.MD5Normal(tempKey+HexM.StringToHex(name)+ json);
				    	hp.addParemeter("mac", mac);
				    	
					}  catch (Exception e) {            
						//缴费或查询失败 如果是缴费 这个当缴费失败处理  
						e.printStackTrace();   
					}  
					
					String result = null; 
					try {  
						result = hp.getResult(); 
					} catch (Exception e) {
						e.printStackTrace();
					}
			   	  return result;
			   }

}
