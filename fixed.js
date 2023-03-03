
setScreenMetrics(1080, 2240);
sleep(4000);

var farm = text('芭芭农场').findOne();
var click_true = click(farm.bounds().centerX(), farm.bounds().centerY());
sleep(5000);

var i = 0;
while(i<150){
  i++;

  click(500, 1850);
  sleep(1000);
 }

