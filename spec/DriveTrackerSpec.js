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
});
describe("The Trip", function(){
    const Alex = new Driver();

  it("should be a trip", function(){
    const testDrive = new Trip();
    expect(testDrive instanceof Trip).toBeTruthy();
  });
  it("should have a driver", function(){
    const testDrive = new Trip(Alex);
    expect(testDrive.driver).toBe(Alex);
  });
  it("should have a start time", function(){
    const startTime = "6:00";
    const testDrive = new Trip(Alex, startTime);
    expect(testDrive.startTime).toBe(startTime);
  });
  it("should have an end time", function(){
    const startTime = "6:00";
    const endTime = "9:00";
    const testDrive = new Trip(Alex, startTime, endTime);
    expect(testDrive.endTime).toBe(endTime);
  });
  it("should have a distance", function(){
    const startTime = "6:00";
    const endTime = "9:00";
    const miles = 17;
    const testDrive = new Trip(Alex, startTime, endTime, miles);
    expect(testDrive.miles).toBe(miles);
  });
  it("should calculate the duration of the trip to the hour", function(){
    const startTime = "6:00";
    const endTime = "9:00";
    const testDrive = new Trip(Alex, startTime, endTime);
    const duration = testDrive.calculateDuration(startTime, endTime);
    expect(duration).toEqual(3);
  });
  it("should calculate the duration of the trip to the minute as a decimal of hour", function(){
    const startTime = "6:15";
    const endTime = "9:30";
    const testDrive = new Trip(Alex, startTime, endTime);
    const duration = testDrive.calculateDuration(startTime, endTime);
    expect(duration).toEqual(3.25);
  });
  it("should handle minutes in end time being greater than start time", function(){
    const startTime = "6:30";
    const endTime = "9:15";
    const testDrive = new Trip(Alex, startTime, endTime);
    const duration = testDrive.calculateDuration(startTime, endTime);
    expect(duration).toEqual(2.75);
  });
});
