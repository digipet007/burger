$(document).ready(function() {
  var burgerRequest = $("#burger_request").val();
  $("#submit-button").on("click", function() {
    if (!burgerRequest) {
      alert("please enter a burger name");
      return false;
    }
  });
});
