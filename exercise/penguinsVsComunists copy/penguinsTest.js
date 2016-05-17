describe("Party constructer", function () {
    var party;
    beforeEach(function (){
        party = new Party("jimmy");

    });
    it("should set the population", function () {
        expect(party.population).toBe(1000000);

    });
    it("should set name correctly", function () {
        expect(party.name).toBe("jimmy");
    });
});
describe("onHit function", function (){
   var party;
    beforeEach(function () {
       Party = new Party("jimmy");
        onHit("jimmy");
   });
    it("should subtract commies population if not commies", function () {
      expect(comunists.population).toBeLessThan(1000000);
    });
    
});