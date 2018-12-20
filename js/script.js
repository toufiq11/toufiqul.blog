/*var backgroundColor = document.querySelector(".bg");
backgroundColor.style.color = "red";


var textColor = document.querySelector(".bg");

textColor.addEventListener("click", function() {
  textColor.style.color = "red";
});
*/

/*
// OBJECT//
var person = {
  firstName: "toufiqul",
  lastName: "sajib",
  height: 5.6,
  age: 26
};

document.write("<br>" + person.firstName + "<br>");
document.write("<br>" + person.lastName + "<br>");
document.write("<br>" + person.height + "<br>");
document.write("<br>" + person.age + "<br>");

*/

//jquery
//$(selector).(action)
//$("h1").hide();

/*
var hide = document.querySelector("h1");
hide.style.display = "none";
*/

//$("h1").hide(500).show(500);
/*
//DOCUMENT READY METHOD
$(function() {
  $("h1")
    .slideUp(1000)
    .slideDown(1000);
  $(".main").css({
    color: "red"
  });

  $("h3").click(function() {
    $("p").css({
      color: "blue",
      fontSize: 24
    });
  });
});

$(window).on("laod", function() {


});


*/



/*progress bar*/
$(function(){
  $("#progress-elements").waypoint(function(){
    $(".progress-bar").each(function(){

      $(this).animate({
      width: $(this).attr("aria-valuenow") + "%"
      }, 1000);
      });

  }, {
      offset:"50%"
  });


});


/*MAGNIFI POPUP

$(function(){
  $("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    
    gallery:{
      enabled:true
    }
  
  });
});

*/




/*testimonial section

$(function(){

  $('#customers-testimonials').owlCarousel({
    items:1,
    autoplay:true,
    loop:true,
    smartSpeed: 500,
    autoplayHoverPause:true


  });
});

*/
/*counter

$(function(){

$('.counter').counterUp({

delay: 10,
time: 2000
});
});


//Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 70) {
            // hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});


// Smooth scrolling
$(function () {

  $("a.smooth-scroll").click(function (event) {

      event.preventDefault();

      // get/return id like #about, #work, #team and etc
      var section = $(this).attr("href");

      $('html, body').animate({
          scrollTop: $(section).offset().top - 45
      }, 1250);
  });
});

// click and menue hiding

$(function(){
$(".navbar-collapse ul li a").on("click touch", function(){
  $(".navbar-toggle").click();

});

});


*/

/* MOBILE MENUE */





/*SAJIB-GALARY*/
$(function(){

  $('.gal-img').owlCarousel({
    items:4,
    autoplay:true,
    loop:true,
    smartSpeed: 500,
    autoplayHoverPause:true,

    responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
      },
      992: {
        items: 4
        }
		}

    


  });
    
});

/*MAGNIFI POPUP*/

$(function(){
  $("#galary").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    
    gallery:{
      enabled:true
    }
  
  });
});

/* click and menue hiding

$(document).ready(function() {
	$('.mobile-menu a').on('click',function(){
    $('#main-nav').toggle('slow');
        
    });
          
          var breakpoint=768
        $window.resize (function(){
            if($(document).width()>=breakpoint){
                $('#main-nav').show();
            }else{
            $('#main-nav').hide();

            }
        });
});

*/

/*
$(document).ready(function() {     
          var breakpoint=768;
        $window.resize (function(){
            if($(document).width()<=breakpoint){
              $("#main-nav").on("click touch", function(){
                $(".mobile-menu a").click();
              
              });
            }else{
            $('#main-nav').hide();

            }
        });
});


*/

/*

  $(function(){
    $("#main-nav li a").on("click touch", function(){
      $(".mobile-menu a").click();
    
    });
    
    });
  */

  //Show/Hide transparent black navigation
$(function () {

  $(window).scroll(function () {

      if ($(this).scrollTop() > 70) {
          // hide nav
          $("nav").addClass("black-nav-top");
          

      } else {
          // show nav
          $("nav").removeClass("black-nav-top");
          
      }
  });
});

//mobile menue
$(function(){

  //show mobile nav

  $("#mobile-nav-open-btn").click(function(){
    $("#mobile-nav").css("height",  "100%");
  });
//hidding 
  $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
    $("#mobile-nav").css("height",  "0%");
  });

});




// Smooth scrolling
$(function () {

  $("a.smooth-scroll").click(function (event) {

      event.preventDefault();

      // get/return id like #about, #work, #team and etc
      var section = $(this).attr("href");

      $('html, body').animate({
          scrollTop: $(section).offset().top - 30
      }, 1250);
  });
});


/* way point animation using css animation*/
$(function(){
  $('.js-wp-1').waypoint(function(){
    $('.js-wp-1').addClass('animated fadeIn');

  }, { offset: '50%'

  });


//for progressbr
  $('.js-wp-2').waypoint(function(){
    $('.js-wp-2').addClass('animated slideInUp');

  }, { offset: '70%'

  });



  // about myself
  $('.js-wp-3').waypoint(function(){
    $('.js-wp-3').addClass('animated fadeInLeft');

  }, { offset: '50%'

  });

  $('.js-wp-4').waypoint(function(){
    $('.js-wp-4').addClass('animated fadeInRight');

  }, { offset: '60%'

  });

  $('.js-wp-5').waypoint(function(){
    $('.js-wp-5').addClass('animated  fadeIn');

  }, { offset: '40%'

  });

  $('.js-wp-6').waypoint(function(){
    $('.js-wp-6').addClass('animated  zoomIn');

  }, { offset: '50%'

  });
});