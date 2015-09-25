describe('bottlesOfBeer', function() {
    it("ends the song at 0", function() {
    expect(bottlesOfBeer(0)).to.equal(" No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    });

    it("starts singing at number given by user", function() {
    expect(bottlesOfBeer(7)).to.include("7 bottles of beer on the wall, 7 bottles of beer.");
    });
});
