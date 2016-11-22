import java.awt.Point;
import java.awt.Rectangle;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import com.google.gson.JsonArray;
import com.google.gson.JsonNull;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

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
		 //获取首页顶部新闻 作家
//		 entityParemeter_map.put("pubConlumnId", "581407b20e9f110d8cbbdb94");
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
//		 entityParemeter_map.put("pub_id", "5833dd6fd6c45923374bed6a");
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
//		 entityParemeter_map.put("secondPubConlumnId", "581407b20e9f110d8cbbdb94");
//		 entityParemeter_map.put("tag_string", "书法家");//国画,油画,书法
//		 String listPub = listPub();
//		 System.out.println(listPub); 
		 //背景列表
//		 String list_backgroundWall = list_backgroundWall();
//		 System.out.println(list_backgroundWall); 
		 //画框列表
//		 String list_paintingFrame = list_paintingFrame();
//		 System.out.println(list_paintingFrame); 
		 //卡纸列表
//		 String list_kazhi = list_kazhi();
//		 System.out.println(list_kazhi); 
		 //发布展品
//		 String publish_artworks = publish_artworks();
//		 System.out.println(publish_artworks); 
		 //画框种类列表
//		 String list_paintingFrameConlumn = list_paintingFrameConlumn();
//		 System.out.println(list_paintingFrameConlumn); 
		 //我发布的作品
//		 String list_artworks = list_artworks();
//		 System.out.println(list_artworks);
		 //我的评论
//		 String comment_list = comment_list();
//		 System.out.println(comment_list);
		 //提交意见反馈
//		 String leaveMessage = leaveMessage();
//		 System.out.println(leaveMessage);
		 //获取用户的基础信息
//		 String getUserInfo = getUserInfo();
//		 System.out.println(getUserInfo);
		// 更新用户的基础信息
//		 String updateSelf = updateSelf();
//		 System.out.println(updateSelf);
		 //更新名片
		 String updateArtistCard = updateArtistCard();
		 System.out.println(updateArtistCard);
		 //最新作品 
//		 entityParemeter_map.put("rootPubConlumnId", "58214a01d6c45965757937d3");
//		 String listPub = listPub();
//		 System.out.println(listPub); 
		 //分段上传文件
//		 String uploadChucks = uploadChucks();
//		 System.out.println(uploadChucks); 
		 //删除作品
//		 String delete_artworks = delete_artworks();
//		 System.out.println(delete_artworks); 
		 //我的收藏列表
//		 String list_shoucang_pub = list_shoucang_pub();
//		 System.out.println(list_shoucang_pub);
		 //收藏作家名片
//		 String shoucang_artistCard = shoucang_artistCard();
//		 System.out.println(shoucang_artistCard);
		 //艺术馆列表
//		 entityParemeter_map.put("secondPubConlumnId", "581ef1a1d6c4594f90fa046c");
//		 String list_artGallery = list_artGallery();
//		 System.out.println(list_artGallery);
		 //展馆详情
//		 entityParemeter_map.put("pub_id", "581ef1c8d6c4594f90fa046e");
//		 String get_artGallery = get_pub();
//		 System.out.println(get_artGallery);
	 } 
	 /**
		 * 获取展馆列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String list_artGallery() throws Exception {
			
			init_login();

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
		 * 收藏资讯
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String shoucang_artistCard() throws Exception {

			String urlString = baseUrl + "face/user/shoucang_pub.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("pub_id", "581ef1c8d6c4594f90fa046e");
			jsonObject.addProperty("memo", "23备1注123");

			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
		 * 我的收藏列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String list_shoucang_pub() throws Exception {

			String urlString = baseUrl + "face/user/list_shoucang_pub.do";
			
			JsonObject jsonObject = new JsonObject();
			
//			jsonObject.addProperty("secondPubConlumnId", "5812ef5478e0802052dd7a2f");//收藏的作品
			jsonObject.addProperty("secondPubConlumnId", "581407b20e9f110d8cbbdb94");//收藏的作家名片
			
			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
		 * 删除作品
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String delete_artworks() throws Exception {

			String urlString = baseUrl + "face/user/delete_artworks.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("artworks_id", "583284c4ef722c3907a03c41");
			
			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
		 * 分段上传文件
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String uploadChucks() throws Exception {
			
			String filePath = "/home/lymava/1115_2.jpg";
			Integer file_size = 1024*500;
			
			File file_input = new File(filePath);
			
			FileInputStream fis = new FileInputStream(file_input);
			
			byte[] file_bytes = new byte[file_size];
			
			Long chunks = file_input.length()/file_size;
			if(file_input.length()%file_size != 0){
				chunks += 1;
			}
			
			Long chunk = 0l;
			String name = file_input.getName();
			
			JsonParser jsonParser = new JsonParser();
			
			
			Long had_upload = 0l;
			while(had_upload < file_input.length()){
				fis.read(file_bytes);
				
				String uploadChuckOne = uploadChuckOne(file_bytes, name, chunk, chunks);
				/**
				 * {"statusCode":"200","message":"上传成功!"}	上传单片
				   {"data":{"fileName":"attachFiles/temp/bbd093b570e1201aa17b9f0b3be7960a"},"statusCode":"200","message":"上传成功!"}//上传完成
				 */
				
				System.out.println(uploadChuckOne);
				
				had_upload += file_size;
				chunk ++;
			}
			
			fis.close();

			return null;
		}
		
		public static String uploadChuckOne(byte[] file_bytes,String name,Long chunk,Long chunks) throws Exception{
			
			String urlString = baseUrl + "front/uploadChucks.do";
			
			HttpPost hp = new HttpPost(new URL(urlString));
			
			entityParemeter_map.put("name", name);
			entityParemeter_map.put("chunk", chunk+"");
			entityParemeter_map.put("chunks", chunks+"");
			
			String file_string = HexM.encodeHexString(file_bytes);
			entityParemeter_map.put("file_bytes", file_string);
			
			Set<Entry<String, String>> entrySet = entityParemeter_map.entrySet();
			
			for (Entry<String, String> entityKeyValue : entrySet) {
				hp.addParemeter(entityKeyValue.getKey(), entityKeyValue.getValue()+"");
			}
			
			String result = hp.getResult();
			return result;
		}
	 /**
		 * 提交意见反馈
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String updateArtistCard() throws Exception {

			String urlString = baseUrl + "face/user/updateArtistCard.do";
			
			JsonObject jsonObject = new JsonObject();
			
			byte[] readByte = IOUtil.readByte("/home/lymava/workhome/program/开发项目/林多好玩/测试合成/zuopin.jpg");
			String encodeHexString = HexM.encodeHexString(readByte);
			
			byte[] readByte_touxiang = IOUtil.readByte("/home/lymava/workhome/program/开发项目/林多好玩/首页720/热门1.jpg");
			String encodeHexString_touxiang = HexM.encodeHexString(readByte_touxiang);
			
			
			
			jsonObject.addProperty("name", "潘大总管");
			jsonObject.addProperty("intro", "321述描321");
			jsonObject.addProperty("pic", "<file>"+encodeHexString+"</file>");
			jsonObject.addProperty("pic_touxiang", "<file>"+encodeHexString_touxiang+"</file>");
			jsonObject.addProperty("touxian", "测试头衔");
			
			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 	/**
		 * 提交意见反馈
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String leaveMessage() throws Exception {

			String urlString = baseUrl + "face/user/leaveMessage.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("title", "title");
			jsonObject.addProperty("message", "message");
			
			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
		 * 我的评论列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String comment_list() throws Exception {

			String urlString = baseUrl + "face/user/comment_list.do";
			
			JsonObject jsonObject = new JsonObject();
			
			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 
	 	/**
		 * 我的作品列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String list_artworks() throws Exception {

			String urlString = baseUrl + "face/user/list_artworks.do";
			
			JsonObject jsonObject = new JsonObject();
			
			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
	 /**
	  * 
	  * @param rectangle_backWall 视图的宽高,宽是屏幕宽度 高是自定义的
	  * @param rectangle_image	图片的形状
	  * @param rectangle_image_inner	图内部的画框的形状
	  * @param point	点击的点
	  */
		public static boolean isPointClickOnImageInner(Rectangle rectangle_backWall,Rectangle rectangle_image,Rectangle rectangle_image_inner,Point click_point){
			
			int width = (int) rectangle_backWall.getWidth();
			int height = (int) rectangle_backWall.getHeight();
			
			Rectangle resizeRectangle =  resizeRectangle(rectangle_image, width, height);
			
			double width_image_inner = rectangle_image_inner.getWidth();
			
			Rectangle resizeRectangle_mage_inner =  resizeRectangle(rectangle_image_inner, width_image_inner/resizeRectangle.getWidth());
			
			boolean contains = resizeRectangle_mage_inner.contains(click_point);
			
			return contains;
		}
		public static Rectangle resizeRectangle(Rectangle rectangle,Integer max_width,Integer max_height){
			
			int x = (int) rectangle.getX();
			
			int y = (int) rectangle.getY();
			
			int width = (int) rectangle.getWidth();
			int height = (int) rectangle.getHeight();
			
			if(width > max_width){
				height = max_width* height/width ;
				width = max_width;
			} 
			
			if(height > max_height){
				width = max_height* width/height ;
				height = max_height;
			} 
			
			if(width < max_width && height < max_height ){
				height = height*max_width/width;
				width = max_width;
				
				if(height > max_height){
					width = width*max_height/height;
					height = max_height;
				}
			}
			
			Rectangle rectangle_return = new Rectangle(x, y, width, height);
			
			return rectangle_return;
		}
		public static Rectangle resizeRectangle(Rectangle rectangle,Double bili){
			
			int x = (int) rectangle.getX();
			
			int y = (int) rectangle.getY();
			
			int height = (int) rectangle.getHeight();
			
			int width = (int) rectangle.getWidth();
			
			x += width*(1-bili)/2;
			y += height*(1-bili)/2;
			
			height = (int) (height*bili);
			width = (int) (width*bili);
			
			Rectangle rectangle_return = new Rectangle(x, y, width, height);
			
			return rectangle_return;
		}
	 
		/**
		 * 画框类别列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String list_paintingFrameConlumn() throws Exception{
			 entityParemeter_map.put("pubConlumnId", "58293eadef722c116fe22066");
			 String listPub = listPub();
			 return listPub;
		}
	 /**
		 * 画框列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String list_paintingFrame() throws Exception{
			 entityParemeter_map.put("pubConlumnId", "58214abdd6c45965757937e5");
//			 entityParemeter_map.put("paintingFrameConlumn_id", "58296cfaef722c193b8deaa9");
			 
			 entityParemeter_map.put("width", "100");
			 entityParemeter_map.put("height", "800");
			 
			 String listPub = listPub();
			 return listPub;
		}
	 
	 	/**
		 * 发布展品
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String publish_artworks() throws Exception {

			String urlString = baseUrl + "face/user/publish_artworks.do";
			
			JsonObject jsonObject = new JsonObject();
			
			jsonObject.addProperty("artworks_name", "作品名称1");
			jsonObject.addProperty("years", "年份作品简介");
			jsonObject.addProperty("intro", "作品简介");
			jsonObject.addProperty("price_fen", "100");
			jsonObject.addProperty("true_width", "100");//真实尺寸 厘米
			jsonObject.addProperty("true_height", "500");//真实尺寸 厘米
			jsonObject.addProperty("pubConlumnId","5812ef8078e0802052dd7a31");
			/**
			 * 5812ef8078e0802052dd7a31 绘画作品
			 * 5812ef7878e0802052dd7a30	书法作品
			 */
			jsonObject.addProperty("backgroundWall_id","58268b59d6c4592590d7b27b");
			
			JsonArray artworksCompoment = new JsonArray();
			
			jsonObject.add("artworksCompoment", artworksCompoment);
			

			JsonObject jsonObject_part = createZuop();
			JsonObject jsonObject_part_1 = createZuop();
			
			
			artworksCompoment.add(jsonObject_part);
			artworksCompoment.add(jsonObject_part_1);
			
			System.out.println(jsonObject);
			

			String send_user_data = send_user_data(urlString, jsonObject.toString());

			return send_user_data;
		}
		
		public static JsonObject createZuop() throws IOException{
			JsonObject jsonObject_part  = new JsonObject();
			
			byte[] readByte = IOUtil.readByte("/home/lymava/workhome/program/开发项目/林多好玩/测试合成/zuopin.jpg");
			String encodeHexString = HexM.encodeHexString(readByte);
			jsonObject_part.addProperty("artworks_pic", "<file>"+encodeHexString+"</file>");
			jsonObject_part.addProperty("kazhi_1_id", "5826768ed6c45921bce7919c");
			jsonObject_part.addProperty("paintingFrame_id", "582678f2d6c45921bce791b1");
			
			//绘画
//			jsonObject_part.addProperty("pubConlumnId","5812ef7878e0802052dd7a30");//书法
			
			JsonObject artworks_position = new JsonObject();
			
			artworks_position.addProperty("x", "62");
			artworks_position.addProperty("y", "63");
			artworks_position.addProperty("width", "99");
			artworks_position.addProperty("height", "150");
			
			jsonObject_part.add("artworks_position", artworks_position);
			
			JsonObject kazhi_1_pic_position = new JsonObject();
			
			kazhi_1_pic_position.addProperty("x", "60");
			kazhi_1_pic_position.addProperty("y", "60");
			kazhi_1_pic_position.addProperty("width", "105");
			kazhi_1_pic_position.addProperty("height", "160");
			
			jsonObject_part.add("kazhi_1_pic_position", kazhi_1_pic_position);
			
			return jsonObject_part;
		}
	 /**
		 * 卡纸列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String list_kazhi() throws Exception{
			 entityParemeter_map.put("rootPubConlumnId", "58253865ef722c174838108a");
			 String listPub = listPub();
			 return listPub;
		}
	 /**
		 * 背景列表
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String list_backgroundWall() throws Exception{
			 entityParemeter_map.put("rootPubConlumnId", "58214a7dd6c45965757937d9");
//			 entityParemeter_map.put("width", "300");
//			 entityParemeter_map.put("height", "100");
			 String listPub = listPub();
			 return listPub;
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
			
			jsonObject.addProperty("pub_id", "58326d78ef722c322164ce7d");
			jsonObject.addProperty("memo", "备注123");

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
			
			jsonObject.addProperty("pub_id", "583284c4ef722c3907a03c41");
//			jsonObject.addProperty("comment_id", "581d465cd6c4593b2394cd89");
			jsonObject.addProperty("content", "对评论回复测试评论123fdsfds");

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
			
			jsonObject.addProperty("realname", "潘天寿1");
			jsonObject.addProperty("nickname", "潘潘2");
			jsonObject.addProperty("phone", "联系电话3");
			jsonObject.addProperty("addr", "地址4");
			jsonObject.addProperty("sheng", "省");
			jsonObject.addProperty("shi", "市");
			jsonObject.addProperty("birthDate", "出生日期");
			
			byte[] readByte = IOUtil.readByte("/home/lymava/workhome/program/开发项目/林多好玩/首页720/热门6.jpg");
			
			String encodeHexString = HexM.encodeHexString(readByte);
			
			jsonObject.addProperty("pic", "<file>"+encodeHexString+"</file>");
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
		
		public static void init_login(){
			 String randCode = System.currentTimeMillis()+"";
			String user_sign = Md5Util.MD5Normal(login_key+randCode.toLowerCase());
			
			
			entityParemeter_map.put("login_name", login_name);
			entityParemeter_map.put("randCode", randCode);
			entityParemeter_map.put("user_sign", user_sign);
		}
		/**
		 * 获取内容详情
		 * 
		 * @return
		 * @throws Exception
		 */
		private static String get_pub() throws Exception {
			
			init_login();

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
