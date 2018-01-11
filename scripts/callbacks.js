$(document).ready(function(){
  $.getJSON("mock-choice.json", function(choice) {
    $("#img-a").attr("src","images/" + choice.a); 
    $("#img-b").attr("src","images/" + choice.b); 
  });
});
