
// $(document).ready(function(){
$(function() {

  location.href = '#flash';

  var browser_width = document.documentElement.clientWidth,
      browser_height = document.documentElement.clientHeight;

  var flash_width = 800,
      flash_height = 600;

  function replace(width, height) {
    // $('#flash').css({'marginTop': 0});
    var flash_margin_top = (height - flash_height) / 2 - $('.brand').height();

    if( flash_margin_top < $('.brand').height() + $('.brand').offset().top)
      flash_margin_top = $('.brand').height() + $('.brand').offset().top;

    $('#flash').css({'marginTop': flash_margin_top});

    $('#users').css({'marginTop': 0});
    var users_margin_top = height - $('#users').height() - $('#users').offset().top;
    // var users_margin_top = $(window).scrollTop() + $(window).height() - $('#users').height();
    $('#users').css({'marginTop': users_margin_top});
  }

  replace(browser_width, browser_height);

  $(window).resize(function() {
    // browser_width =  $(this).width();
    // browser_height = $(this).height();
    browser_width = document.documentElement.clientWidth,
    browser_height = document.documentElement.clientHeight;

    replace(browser_width, browser_height);
  });

  $('.user').find('.info').animate({width: '0'}, 1000);

  $('.user').hover(function() {
    // $(this).find('.info').show();
    // $(this).animate({width: '100px'});
    $(this).find('.info').animate({width: '200px'});
  }, function() {
    // $(this).find('.info').hide();
    // $(this).animate({width: '300px'});
    $(this).find('.info').animate({width: '0'});
  });

});
