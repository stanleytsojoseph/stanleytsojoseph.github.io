function checkoutbuttonexpand() {

  $(".checkoutbutton").addClass("clickcheckout");
  $(".checkoutbutton").html(" ");
  $(".top").css("opacity", "0.0");
  $(".main").css("background-color", "#503cdd");
  $(".creditc").css("opacity", "0.0");
  $(".postclick").css("opacity", "1.0");
  $(".postclick").css("z-index", "16");


}

  $(".checkoutbutton").click(checkoutbuttonexpand);

$(document).ready(function() {
	console.log("")
$('.pricelist').scrollTop($('.pricelist')[0].scrollHeight);
});
$( ".productnav" ).click(function() {
	console.log('yo');
  $(".ppul").css("left","-=230px");

});




