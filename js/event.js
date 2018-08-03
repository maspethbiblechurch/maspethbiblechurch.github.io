  $(document).ready(function(){


    $('.random-color').each(function(index, element){

      var randomNumber = Math.floor((Math.random() * 4) + 1);

      var title = $(this).attr('title')

      var randomNumber = (title.charCodeAt(0) % 4) +1;
      $(this).addClass("random-color-"+randomNumber);

    });

    $('.close-event-container').on('click', function(e){
      e.preventDefault();
       $('#event-info-modal').toggle();
    })
  });
