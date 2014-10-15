$(function(){
  // Renren.init({appId:235732});
  // $('img#renren').bind('click', function(){
  //   Renren.ui({
  //     url : 'feed',
  //     display : 'popup',
  //     style : {
  //       top : 50
  //     },
  //     params : {
  //       url:'http://adou.gitcafe.com/project/taihu/taihu.html',
  //       name: '夭折的太湖行',
  //       description:'2013-04-28'
  //     },
  //     onComplete: function(r){if(window.console) console.log("complete");},
  //     onFailure: function(r){if(window.console) console.log("failure:" + r.error + ' ' + r.error_description);} 
  //   });
  // });
  
  var slide_num = $('article').size();
  var x = -1000 * slide_num/2;
  var y = 0 ;
  var rotate = 0;
  
  $('div.step').attr('data-scale',slide_num);

  $('article').each(function() {
    rotate += (parseInt(Math.random()*60-30) / 15).toFixed(0) * 15 ;
    rotate = rotate<135 ? rotate : 135 ;
    rotate = rotate>-135 ? rotate : -135 ;
    if($(this).hasClass('smaller'))
      $(this).wrap('<div class="step" data-scale="0.5" data-x="'+x+'" data-y="'+y+'" data-rotate="'+rotate+'"></div>');
    else if($(this).hasClass('fill'))
      $(this).wrap('<div class="step" data-scale="2" data-x="'+x+'" data-y="'+y+'" data-rotate="'+rotate+'"></div>');
    else
      $(this).wrap('<div class="step" data-scale="1" data-x="'+x+'" data-y="'+y+'" data-rotate="'+rotate+'"></div>');
    x += 1000 ;
  });
  
  impress().init();
});