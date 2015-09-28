var Pizza = function(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getPrice = function() {
  var sizeValue = this.getSizeValue(this.size);
  var price = sizeValue + (this.toppings * 0.50);
  return price;
}

Pizza.prototype.getSizeValue = function(size){
  if (size == "small"){
    return 7;
  } else if (size === "medium"){
    return 13;
  } else if (size === "large"){
    return 17;
  }
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {

    var toppings = 0;
    var toppingsArray = [];
      $(".toppings:checked").each(function() {
        toppingsArray[toppings++] = parseInt($(this).val());
      });

    var size = $('input[name="size"]:checked').val();
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
