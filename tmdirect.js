
auto.waitFor();
setScreenMetrics(1080, 2240);
home();
launchApp("淘宝");
sleep(6000);
toast("我来讲个浪漫的故事：")

var baba_nongchang = text("芭芭农场").findOne(2000);
var click_true = click(baba_nongchang.bounds().centerX(), baba_nongchang.bounds().centerY());
sleep(3000);

tuzi=className("android.widget.Image").depth(13).indexInParent(0).findOne();
tuzi.click();
toast("romantic story");
sleep(4000);
click(450, 800);
back();
sleep(3000);
var i = 0;
while(i<50){
  i++;
	click(500, 2000);
  sleep(1000);
  if(i==10){
	toast("王猫是个漂亮女孩,");
 }
	if(i==15){
	toast("a beautiful girl,");
 }
 if(i==20){
	toast("曹十三是个帅小伙,");
 }
	if(i==25){
	toast("handsome boy,");
 }
 if(i==30){
	toast("命运让他们相遇了.");
 }
if(i==35){
	toast("they ran across,");
 }
 if(i==40){
	toast("他们培育了他们的爱情树,");
 }
 }
toast("爱情树长啊长.");
