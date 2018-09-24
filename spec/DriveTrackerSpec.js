describe("The Test", function(){
  it("should pass", function() {
    expect(true).toBe(true);
  });
});
describe("The Driver", function() {
  it("should be a driver", function(){
    const alex = new Driver("Alex");
    expect(alex instanceof Driver).toBeTruthy();
  });
  it("should story the total sum of all trip miles and times", function(){
    const alex = new Driver("Alex");
    const testDrive = new Trip(alex, "6:00", "9:00", 17);
    const testDrive2 = new Trip(alex, "6:00", "6:30", 17);
    expect(alex.totalMiles).toEqual(34);
    expect(alex.totalDriveTime).toEqual(3.5);
  });
  it("should be stored in an array of all drivers", function(){
    expect(Driver.drivers).toBeTruthy();
    expect(Driver.drivers.length).not.toEqual(0);
  });
  it("should have an average mph", function(){
    const speedster = new Driver("Collin");
    const firstTrip = new Trip(speedster, "6:00", "9:00", 200);
    const secondTrip = new Trip(speedster, "6:00", "9:00", 150);

    const averageMPH = speedster.calculateMPH();
    expect(averageMPH).toBe(Math.round((speedster.totalMiles/speedster.totalDriveTime)));
  });
  it("should set average mph to zero if no trips", function(){
    const alex = new Driver("Alex");
    const averageMPH = alex.calculateMPH();
    expect(averageMPH).toEqual(0);
  });
  it("should be stored in drivers array by most miles to least", function(){
    Driver.drivers = [];

    const alex = new Driver("Alex");
    const bob = new Driver("Bob");
    const testDrive = new Trip(alex, "6:00", "9:00", 17);
    const bobsTrip = new Trip(bob, "6:00", "9:00", 100);
    expect(Driver.drivers[0].name).toBe("Bob");
  });
});


describe("The Trip", function(){
    const alex = new Driver("Alex");
    const startTime = "6:00";
    const endTime = "9:00";
    const miles = 17;
    const testDrive = new Trip(alex, startTime, endTime, miles);

  it("should be a trip", function(){
    expect(testDrive instanceof Trip).toBeTruthy();
  });
  it("should have a driver", function(){
    expect(testDrive.driver).toBe(alex);
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
    const specialTestDrive = new Trip(alex, startTime, endTime, 17);
    const duration = specialTestDrive.calculateDuration(this.startTime, this.endTime);
    expect(duration).toEqual(3.25);
  });
  it("should handle minutes in end time being greater than start time", function(){
    this.startTime = "6:30";
    this.endTime = "9:15";
    const specialTestDrive = new Trip(alex, startTime, endTime, 17);
    const duration = specialTestDrive.calculateDuration(this.startTime, this.endTime);
    expect(duration).toEqual(2.75);
  });
});
