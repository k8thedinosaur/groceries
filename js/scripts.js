$(document).ready(function() {
  $("#shoppingList").submit(function(event) {

    var shoppingList = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val(), $("input#item5").val()]
    console.log(shoppingList);

    $("#input").hide();
    $("#output").show();

    event.preventDefault();
  });
});