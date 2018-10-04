var Driver = function(name){
  this.name = name;
  this.totalMiles = 0;
  this.totalDriveTime = 0;
  Driver.drivers.push(this);
}


Driver.prototype.calculateMPH = function () {
  if(this.totalMiles > 0){
    return (Math.round((this.totalMiles/this.totalDriveTime)))
  }
  else {
    return 0;
  }
};

Driver.drivers = [];

var Trip = function(driver, startTime, endTime, miles){
  this.driver = Driver.drivers.find(d => d.name === driver);
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
  if(((distance/duration) >= 5) && ((distance/duration) <= 100)) {
    this.driver.totalMiles = this.driver.totalMiles + distance;
    this.driver.totalDriveTime = this.driver.totalDriveTime + duration;
    Driver.drivers.sort(function(a,b){
      return b.totalMiles - a.totalMiles;
    });
  }
};

module.exports = { Driver, Trip };
