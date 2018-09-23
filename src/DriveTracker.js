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
  const startTimeMin = parseInt(startTime.split(":")[1])/60;
  const endTimeMin = parseInt(endTime.split(":")[1])/60;
  return ((endTimeHour + endTimeMin) - (startTimeHour + startTimeMin));
};
