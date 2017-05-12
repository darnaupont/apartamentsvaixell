$(document).foundation();
$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $('.top-bar').addClass("shrink");
  }
  else{
    $('.top-bar').removeClass("shrink");
  }
});
