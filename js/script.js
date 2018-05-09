
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78732723-1', 'auto');
  ga('send', 'pageview');

var mainBlockVisible = false;

  // window.addEventListener('scroll', function() {
  //   var color = ($(window).width() <= 768)? '#333' : 'transparent';
  // 	if($(window).scrollTop() == 0) {
  // 		$('#header').css('background-color', color);
  //
  // 	}
  // 	else{
  // 		$('#header').css('background-color', '#286090'); //
  // 	}
  //   if( !mainBlockVisible && $(window).scrollTop() >  $(window).height()/2){
  //     $('.carousel').fadeIn( 1000, function() {
  //         mainBlockVisible= true;
  //   });
  //   }
  // });
  $(document).ready(function(){

    if(typeof AOS != 'undefined'){
      AOS.init({
       duration: 500,
     });
    }
    var fixmeTop  = $('div.main-navbar').offset().top;
    $(document).on('scroll', function(){
       var currentScroll = $(window).scrollTop();
      $target = $('div.main-navbar').prev();
       if (currentScroll >= fixmeTop) {
         console.log("below");
         $('div.main-navbar').addClass('sticky-navbar');
         $target.css('margin-bottom', '75px');
       }
       else{
         $('div.main-navbar').removeClass('sticky-navbar');
         $target.css('margin-bottom', '0px');

       }
    })
  })

  $(document).on('mouseover','.background-pic-1', function(){
    $('#about-us-link-text').css({ 'border-bottom': '3px solid #B3E9C7',
                                  'font-weight': '900',
                                  'font-size': '34px'
                                });

    $('#about-us-link-text').animate({left: '24%'}, {easing: "swing", duration: 1000});

  })
  .on('mouseleave','.background-pic-1', function(){
      $('#about-us-link-text').clearQueue().stop();
    $('#about-us-link-text').css({ 'border-bottom': '3px solid #27aae3',
                                  'font-weight': '500',
                                  'font-size': '30px'
                                });
  $('#about-us-link-text').animate({left: '50%'}, {easing: "swing", duration: 1000});
  })


  $(document).on('mouseover','.background-pic-2', function(){

    $('#bible-study-link-text').css({ 'border-bottom': '3px solid #8367C7',
                                  'font-weight': '900',
                                  'font-size': '34px'
                                });
    $('#bible-study-link-text').animate({right: '30%'}, {easing: "swing", duration: 1000});
  })
  .on('mouseleave','.background-pic-2', function(){
    $('#bible-study-link-text').clearQueue().stop();
    $('#bible-study-link-text').css({ 'border-bottom': '3px solid #27aae3',
                                  'font-weight': '500',
                                  'font-size': '30px'
                                });
    $('#bible-study-link-text').animate({right: '50%'}, {easing: "swing", duration: 1000});
  })

  $(document).on('mouseover','.background-pic-3', function(){
    $('#open-gym-link-text').css({ 'border-bottom': '3px solid #F991CC',
                                  'font-weight': '900',
                                  'font-size': '34px'
                                });

    $('#open-gym-link-text').animate({left: '24%'}, {easing: "swing", duration: 1000});

  })
  .on('mouseleave','.background-pic-3', function(){
    $('#open-gym-link-text').clearQueue().stop();
    $('#open-gym-link-text').css({ 'border-bottom': '3px solid #27aae3',
                                  'font-weight': '500',
                                  'font-size': '30px'
                                });
    $('#open-gym-link-text').animate({left: '50%'}, {easing: "swing", duration: 1000});
  })

  $(document).on('mouseover','.background-pic-4', function(){

    $('#events-link-text').css({ 'border-bottom': '3px solid #FFFF82',
                                  'font-weight': '900',
                                  'font-size': '34px'
                                });
    $('#events-link-text').animate({right: '24%'}, {easing: "swing", duration: 1000});
  })
  .on('mouseleave','.background-pic-4', function(){
    $('#events-link-text').clearQueue().stop();
    $('#events-link-text').css({ 'border-bottom': '3px solid #27aae3',
                                  'font-weight': '500',
                                  'font-size': '30px'
                                });
    $('#events-link-text').animate({right: '50%'}, {easing: "swing", duration: 1000});
  })
