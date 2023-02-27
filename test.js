auto.waitFor();
setScreenMetrics(1176, 2400);
sleep(6000);


var baba_nongchang = text('芭芭农场').findOne(2000);
var click_true = click(baba_nongchang.bounds().centerX(), baba_nongchang.bounds().centerY());
sleep(3000);

click(80, 500);
var i = 0;
while(i<100){
  i++;
	click(500, 1900);
  sleep(1000);
}
console.show()
log("Cat Wang，mission accomplished");
