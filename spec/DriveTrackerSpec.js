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
});
describe("The Trip", function(){
  it("should be a trip", function(){
    const testDrive = new Trip();
    expect(testDrive instanceof Trip).toBeTruthy();
  });
  it("should have a driver", function(){
    const Alex = new Driver();
    const testDrive = new Trip(Alex);
    expect(testDrive.driver).toBe(Alex);
  });
  it("should have a start time", function(){
    const Alex = new Driver();
    const startTime = "6:00";
    const testDrive = new Trip(Alex, startTime);
    expect(testDrive.startTime).toBe(startTime);
  });
});
