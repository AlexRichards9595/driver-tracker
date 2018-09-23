var Driver = function(){
  this.totalMiles = 0;
  this.totalDriveTime = 0;
  Driver.drivers.push(this);
}

Driver.drivers = [];

var Trip = function(driver, startTime, endTime, miles){
  this.driver = driver;
  this.startTime = startTime;
  this.endTime = endTime;
  this.miles = miles;
  this.addTrip();
}

Trip.prototype.calculateDuration = function (startTime, endTime) {
  const splitStartTime = startTime.split(":");
  const splitEndTime = endTime.split(":");

  const startTimeHour = parseInt(splitStartTime[0]);
  const endTimeHour = parseInt(splitEndTime[0]);

  const startTimeMin = parseInt(splitStartTime[1])/60;
  const endTimeMin = parseInt(splitEndTime[1])/60;
  return ((endTimeHour + endTimeMin) - (startTimeHour + startTimeMin));
};
Trip.prototype.addTrip = function () {
  const duration = this.calculateDuration(this.startTime, this.endTime);
  const distance = this.miles;
  this.driver.totalMiles += distance;
  this.driver.totalDriveTime += duration;
};
