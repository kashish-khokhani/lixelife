$(document).ready(function(){

   // pre loader
    setTimeout(function(){
      $('.preloader').fadeOut();
    },200);

    // sticky header
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

    // main slider
    $('.slider_for').slick({
      infinite: true,
      slidesToShow: 1,
      dots:true,
      vertical:true,
      verticalSwiping: true,
      prevArrow: "<button class='prev-btn'><i class='fa-solid fa-arrow-up'></i></button>",
      nextArrow: "<button class='next-btn'><i class='fa-solid fa-arrow-down'></i></button>",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            prevArrow: "<button class='prev-btn'><i class='fa-solid fa-arrow-right'></i></button>",
            nextArrow: "<button class='next-btn'><i class='fa-solid fa-arrow-left'></i></button>",
          }
        }
      ]
  });

  // blog slider
    $('.post_thumbnail_slider').slick({
      infinite: true,
      slidesToShow: 1,
      prevArrow: "<button class='prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
      nextArrow: "<button class='next-btn'><i class='fa-solid fa-arrow-right'></i></button>"
  });

  //   testimonial slider
      $('.slider_testi').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: "<button class='prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow: "<button class='next-btn'><i class='fa-solid fa-arrow-right'></i></button>",
    });

  //   about pagde testimonial slider
      $('.about_slider_testi').slick({
        infinite: true,
        slidesToShow: 2,
        prevArrow: "<button class='prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow: "<button class='next-btn'><i class='fa-solid fa-arrow-right'></i></button>",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });

  //   blog slider
      $('.blog_slider').slick({
        infinite: true,
        slidesToShow: 3,
        prevArrow: "<button class='prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow: "<button class='next-btn'><i class='fa-solid fa-arrow-right'></i></button>",
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });

    // progress bar
    $(document).ready(function(){
      progress_bar();
  });

  function progress_bar() {
      var speed = 25;
      var items = $('.progress_bar').find('.progress_bar_item');
      
      items.each(function() {
          var item = $(this).find('.progress');
          var itemValue = item.data('progress');
          var i = 0;
          var value = $(this);
          
          var count = setInterval(function(){
              if(i <= itemValue) {
                  var iStr = i.toString();
                  item.css({
                      'width': iStr+'%'
                  });
                  value.find('.item_value').html(iStr +'%');
              }
              else {
                  clearInterval(count);
              }
              i++;
          },speed);
      });
  }

  // bottom to top
  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  }); 

 
});