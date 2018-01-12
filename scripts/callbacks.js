$(document).ready(function(){
  $.getJSON("mock-choice.json", function(choice) {
    $.choice=choice;
    $("#img-a").attr("src","images/" + choice.a); 
    $("#img-b").attr("src","images/" + choice.b); 
    $("#want-a").attr("href","success.html?chosen=" + choice.a); 
    $("#want-b").attr("href","success.html?chosen=" + choice.b); 
    $("#prefer-a").attr("href","index.html?chosen=" + choice.a); 
    $("#prefer-b").attr("href","index.html?chosen=" + choice.b); 
  });
});
