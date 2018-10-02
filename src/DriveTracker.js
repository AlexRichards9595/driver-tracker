var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt'),
  output: process.stdout,
  terminal: false
});

lineReader.on('line', function (line) {
  const parsedLine = line.split(' ');
  if(parsedLine[0] === 'Driver') {
    const driver = new Driver(parsedLine[1]);
    console.log(driver);
  }
  else {
    const trip = new Trip(parsedLine[1], parsedLine[2], parsedLine[3], parsedLine[4])
    console.log(trip);
  }

});

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
  this.driver.totalMiles = this.driver.totalMiles + distance;
  this.driver.totalDriveTime = this.driver.totalDriveTime + duration;
  Driver.drivers.sort(function(a,b){
    return b.totalMiles - a.totalMiles;
  });
};
