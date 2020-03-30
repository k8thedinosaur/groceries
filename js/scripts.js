$(document).ready(function() {
  $("#shoppingList").submit(function(event) {

    var shoppingList = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val(), $("input#item5").val()]
    console.log(shoppingList);

    var sortedShoppingList = shoppingList.sort();
    console.log(sortedShoppingList);
    
    var shoutedShoppingList = sortedShoppingList.map(function(item) {
      return item.toUpperCase();
    }); 
    console.log(shoutedShoppingList);

    shoutedShoppingList.forEach(function(item) {
      $(".item").append("<li>" + item + "</li>")
    })


    $("#input").hide();
    $("#output").show();

    event.preventDefault();
  });
});