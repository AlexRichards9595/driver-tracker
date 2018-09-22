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
