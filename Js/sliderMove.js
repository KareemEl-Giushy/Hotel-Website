$(document).ready(function (){
  var photo =$("#photo");
  var clean = setInterval(function () {
    if(photo.attr("src")=="imgs/slider3.jpg"){
        photo.fadeToggle(2000,function () {
          photo.attr("src","imgs/slider2.jpg");
        });
    }else{
      photo.fadeToggle(2000,function () {
        photo.attr("src","imgs/slider3.jpg");
      });
    }
},2000);
});
