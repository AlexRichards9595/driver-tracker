describe("The Test", function(){
  it("should pass", function() {
    expect(true).toBe(true);
  });
});
describe("The Driver", function() {
  it("should be a driver", function(){
    const Alex = new Driver();
    expect(Alex instanceof Driver).toBeTruthy();
  });
  it("should have trips", function(){
    const Alex = new Driver();
    expect(Alex.trips).toBeTruthy();
  });
  it("should add a trip when they are the driver of the trip", function(){
    const Alex = new Driver();
    const testDrive = new Trip(Alex, "6:00", "9:00", 17);
    expect(Alex.trips.length).not.toEqual(0);
  });
});
describe("The Trip", function(){
    const Alex = new Driver();
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
