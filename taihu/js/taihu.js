$(function(){

  Renren.init({appId:235732});
  $('img#renren').bind('click', function(){
    Renren.ui({
      url : 'share',
      display : 'page',
      // style : {
      //   top : 50
      // },
      params : {
        url: 'http://adou.gitcafe.com/project/taihu/taihu.html',
        name: '夭折的太湖行 ',
        description: '2013-04-28',
        image: 'http://adou.gitcafe.com/project/taihu/images/IMG_0022.JPG'
      },
      onComplete: function(r){if(window.console) console.log("complete");},
      onFailure: function(r){if(window.console) console.log("failure:" + r.error + ' ' + r.error_description);} 
    });
  });

});