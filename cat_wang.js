auto.waitFor();
setScreenMetrics(1176, 2400);
home();
launchApp("淘宝");
sleep(6000);
toast("let me show u a romantic story:")

var baba_nongchang = text('芭芭农场').findOne(2000);
var click_true = click(baba_nongchang.bounds().centerX(), baba_nongchang.bounds().centerY());
sleep(3000);

var i = 0;
while(i<50){
  i++;
	click(500, 2100);
  sleep(1000);
  if(i==10){
	toast("Cat Wang is a beatuiful girl,");
 }
 if(i==20){
	toast("Thirteen Cao is a hadsome boy.");
 }
 if(i==30){
	toast("one day, they ran across.");
 }
 if(i==40){
	toast("another day, they fall in love with each other.");
 }
 }
toast("then, their loving tree grow and grow, they live a happy life.");
