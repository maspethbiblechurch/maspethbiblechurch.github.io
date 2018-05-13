
  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  // ga('create', 'UA-78732723-1', 'auto');
  // ga('send', 'pageview');

var mainBlockVisible = false;
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
         $('div.main-navbar').addClass('sticky-navbar');
         $target.css('margin-bottom', '75px');
       }
       else{
         $('div.main-navbar').removeClass('sticky-navbar');
         $target.css('margin-bottom', '0px');

       }
    })
    $(window).on('resize', function(){
       fixmeTop  = $('div.main-navbar').offset().top;
    })
  })

  $(document).on('mouseover','.background-pic-1', function(){
    $('#about-us-link-text').addClass('about-us-link-text-with-effect');
    $('#about-us-link-text').animate({left: '24%'}, {easing: "swing", duration: 1000});
  })
  .on('mouseleave','.background-pic-1', function(){
    $('#about-us-link-text').clearQueue().stop();
    $('#about-us-link-text').removeClass('about-us-link-text-with-effect');
    $('#about-us-link-text').animate({left: '50%'}, {easing: "swing", duration: 1000});
  })

  $(document).on('mouseover','.background-pic-2', function(){
    $('#bible-study-link-text').addClass('bible-study-link-text-with-effect');
    $('#bible-study-link-text').animate({right: '30%'}, {easing: "swing", duration: 1000});
  })
  .on('mouseleave','.background-pic-2', function(){
    $('#bible-study-link-text').clearQueue().stop();
    $('#bible-study-link-text').removeClass('bible-study-link-text-with-effect');
    $('#bible-study-link-text').animate({right: '50%'}, {easing: "swing", duration: 1000});
  })

  $(document).on('mouseover','.background-pic-3', function(){
    $('#open-gym-link-text').addClass('open-gym-link-text-with-effect');
    $('#open-gym-link-text').animate({left: '24%'}, {easing: "swing", duration: 1000});
  })
  .on('mouseleave','.background-pic-3', function(){
    $('#open-gym-link-text').clearQueue().stop();
    $('#open-gym-link-text').removeClass('open-gym-link-text-with-effect');
    $('#open-gym-link-text').animate({left: '50%'}, {easing: "swing", duration: 1000});
  })

  $(document).on('mouseover','.background-pic-4', function(){
    $('#events-link-text').addClass('events-link-text-text-with-effect');
    $('#events-link-text').animate({right: '24%'}, {easing: "swing", duration: 1000});
  })
  .on('mouseleave','.background-pic-4', function(){
    $('#events-link-text').clearQueue().stop();
    $('#events-link-text').removeClass('events-link-text-text-with-effect');
    $('#events-link-text').animate({right: '50%'}, {easing: "swing", duration: 1000});
  })

  $(document).on('click','.mobile-menu-open', function(e){
    e.preventDefault();
    $('.main-navbar').addClass('mobile-navbar');
  });
  $(document).on('click','.mobile-navbar .mobile-menu-open', function(e){
    e.preventDefault();
    $('.main-navbar').removeClass('mobile-navbar');
  });
