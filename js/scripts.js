var Pizza = function(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getPrice = function() {
  var price = this.size + (this.toppings * 0.50);
  return price;
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {

    var toppings = 0;
    var toppingsArray = [];
      $(".toppings:checked").each(function() {
        toppingsArray[toppings++] = parseInt($(this).val());
      });

    var size = parseInt($('input[name="size"]:checked').val());
    var quantity = parseInt($("input#pizza_quantity").val());

    $(".toppings").text(toppings);
    $(".size").text(size);
    $(".quantity").text(quantity);

    var order = new Pizza(toppings, size);
    var total = order.getPrice() * quantity;
    $(".total").text(total);

    $("#result").show();
    event.preventDefault();
  });
});
