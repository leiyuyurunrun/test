
auto.waitFor();
setScreenMetrics(1080, 2240);
home();
launchApp("支付宝");
sleep(3000);
toast("我来讲个更浪漫的故事：")

var baba_nongchang =className("android.widget.RelativeLayout").depth(18).indexInParent(12).findOne(2000);
var click_true = click(baba_nongchang.bounds().centerX(), baba_nongchang.bounds().centerY());
sleep(5000);

var renwu=text("任务列表").depth(15).findOne();
renwu.click();

sleep(3000);
  for (var j = 0; j < 3; j++) {
      click(900, 1400);
      sleep(3000);

    
      swipe(500, 1500, 500, 500, 1000);
      sleep(17000);   //17000ms
      swipe(500, 500, 500, 1500, 1000);
      sleep(500);

      back();
      sleep(2000);
 
     }
click(500, 400);


var i = 0;
while(i<50){
  i++;
	click(500, 1800);
  sleep(1000);
  if(i==10){
	toast("王猫是个更漂亮女孩");
 }
 if(i==20){
	toast("曹十三是个更帅小伙");
 }
 if(i==30){
	toast("命运让他们相遇了");
 }
 if(i==40){
	toast("他们培育了他们的爱情树");
 }
 }
toast("爱情树更长啊长");
