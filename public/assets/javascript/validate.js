$(document).ready(function() {
  console.log("document loaded");
  let burgerRequest = $("#burger_request")
    .val()
    .trim();
  $("#submit-button").on("click", function() {
    if (!burgerRequest) {
      console.log("no burger request");
      alert("please enter a burger name");
      return false;
    }
  });
});
