describe("The Test", function(){
  it("should pass", function() {
    expect(true).toBe(true);
  });
});
describe("The Driver", function() {
  it("should be a driver", function(){
    const Alex = new Driver("Alex");
    expect(Alex instanceof Driver).toBeTruthy();
  });
  it("should story the total sum of all trip miles and times", function(){
    const Alex = new Driver("Alex");
    const testDrive = new Trip(Alex, "6:00", "9:00", 17);
    const testDrive2 = new Trip(Alex, "6:00", "6:30", 17);
    expect(Alex.totalMiles).toEqual(34);
    expect(Alex.totalDriveTime).toEqual(3.5);
  });
  it("should be stored in an array of all drivers", function(){
    expect(Driver.drivers).toBeTruthy();
    expect(Driver.drivers.length).not.toEqual(0);
  });
  it("should have an average mph", function(){
    const Speedster = new Driver("Collin");
    const firstTrip = new Trip(Speedster, "6:00", "9:00", 200);
    const secondTrip = new Trip(Speedster, "6:00", "9:00", 150);

    const averageMPH = Speedster.calculateMPH();
    console.log(averageMPH);
    expect(averageMPH).toBe((Speedster.totalMiles/Speedster.totalDriveTime)*60);
  });
  it("should set average mph to zero if no trips", function(){
    const totallyNewDriver = new Driver("Ron");
    const averageMPH = totallyNewDriver.calculateMPH();
    expect(averageMPH).toEqual(0);
  });
  it("should be stored in drivers array by most miles to least", function(){
    const Bob = new Driver("Bob");
    const bobsTrip = new Trip(Bob, "6:00", "9:00", 100);
    expect(Driver.drivers[0].name).toBe("Bob");
  });
});


describe("The Trip", function(){
    const Alex = new Driver("Alex");
    const startTime = "6:00";
    const endTime = "9:00";
    const miles = 17;
    const testDrive = new Trip(Alex, startTime, endTime, miles);

  it("should be a trip", function(){
    expect(testDrive instanceof Trip).toBeTruthy();
  });
  it("should have a driver", function(){
    expect(testDrive.driver).toBe(Alex);
  });
  it("should have a start time", function(){
    expect(testDrive.startTime).toBe(startTime);
  });
  it("should have an end time", function(){
    expect(testDrive.endTime).toBe(endTime);
  });
  it("should have a distance", function(){
    expect(testDrive.miles).toBe(miles);
  });
  it("should calculate the duration of the trip to the hour", function(){
    const duration = testDrive.calculateDuration(startTime, endTime);
    expect(duration).toEqual(3);
  });
  it("should calculate the duration of the trip to the minute as a decimal of hour", function(){
    this.startTime = "6:15";
    this.endTime = "9:30";
    const specialTestDrive = new Trip(Alex, startTime, endTime, 17);
    const duration = specialTestDrive.calculateDuration(this.startTime, this.endTime);
    expect(duration).toEqual(3.25);
  });
  it("should handle minutes in end time being greater than start time", function(){
    this.startTime = "6:30";
    this.endTime = "9:15";
    const specialTestDrive = new Trip(Alex, startTime, endTime, 17);
    const duration = specialTestDrive.calculateDuration(this.startTime, this.endTime);
    expect(duration).toEqual(2.75);
  });
});
