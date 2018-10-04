const {Driver, Trip} = require('./DriveTracker');
const fs = require('fs');

if (!process.argv[2]) {
  console.log('Please specifiy a file to read');
  process.exit();
}

const inputFile = process.argv[2];


var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(inputFile),
  output: process.stdout,
  terminal: false
});
lineReader.on('line', function (line) {
  const parsedLine = line.split(' ');
  if(parsedLine[0] === 'Driver') {
    const driver = new Driver(parsedLine[1]);
  }
  else if (parsedLine[0] === 'Trip') {
    const parsedMiles = parseInt(parsedLine[4]);
    console.log(parsedMiles);
    const trip = new Trip(parsedLine[1], parsedLine[2], parsedLine[3], parsedMiles)
  }
  else {
    lineReader.close();
  }
});
lineReader.on('close', function(){
  let report = '';

  for (driver of Driver.drivers) {
    if (driver.totalMiles) {
      report += `${driver.name}: ${driver.totalMiles} miles @ ${driver.calculateMPH()} mph \n`
    } else {
      report += `${driver.name}: 0 miles \n`
    }
  }

  fs.writeFile('output.txt', report, () => console.log("Report was written successfully"));
  console.log(report);
});
