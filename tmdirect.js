
auto.waitFor();
setScreenMetrics(1080, 2240);
home();
launchApp("淘宝");
sleep(6000);
toast("我来讲个浪漫的故事：")

var baba_nongchang = text("芭芭农场").findOne(2000);
var click_true = click(baba_nongchang.bounds().centerX(), baba_nongchang.bounds().centerY());
sleep(3000);

className("android.widget.Image").bounds(15,1923,180,2106).click();
sleep(1000);
click(450, 800);
back();
sleep(1000);
var i = 0;
while(i<50){
  i++;
	click(500, 1800);
  sleep(1000);
  if(i==10){
	toast("王猫是个漂亮女孩,");
 }
 if(i==20){
	toast("曹十三是个帅小伙,");
 }
 if(i==30){
	toast("命运让他们相遇了.");
 }
 if(i==40){
	toast("他们培育了他们的爱情树,");
 }
 }
toast("爱情树长啊长.");
