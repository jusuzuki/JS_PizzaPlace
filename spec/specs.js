describe('pizza', function() {
  it("returns the price 7.50 for a small pizza with one topping", function() {
    var size = "small";
    var smallPizza = new Pizza(1, size);
    expect(smallPizza.getPrice()).to.equal(7.50);
  });

  it("returns the price 14 for a medium pizza with 2 toppings", function() {
    var size = "medium";
    var mediumPizza = new Pizza(2, size);
    expect(mediumPizza.getPrice()).to.equal(14);
  });

  it("returns the price 19 for a large pizza with 4 toppings", function() {
    var size = "large";
    var largePizza = new Pizza(4, size);
    expect(largePizza.getPrice()).to.equal(19);
  });

});
