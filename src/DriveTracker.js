var Driver = function(){
}
var Trip = function(driver, startTime, endTime, miles){
  this.driver = driver;
  this.startTime = startTime;
  this.endTime = endTime;
  this.miles = miles;
}
Trip.prototype.calculateDuration = function (startTime, endTime) {
  const startTimeHour = parseInt(startTime.split(":")[0]);
  const endTimeHour = parseInt(endTime.split(":")[0]);
  return (endTimeHour - startTimeHour);
};
