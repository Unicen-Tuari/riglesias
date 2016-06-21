$(window).on('scroll',function(){
  if($(document).scrollTop()>160){
    $('#nav-princ').addClass('navbar-fixed-top');
  }
  else $('#nav-princ').removeClass('navbar-fixed-top');
});
