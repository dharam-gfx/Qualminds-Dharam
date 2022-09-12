var navbar = document.querySelector('.nav_section')
var navLink1 = document.querySelector('.navLink1')
var navLink2 = document.querySelector('.navLink2')
var navLink3 = document.querySelector('.navLink3')
var navLink4 = document.querySelector('.navLink4')
var navLink5 = document.querySelector('.navLink5')
var brand_name = document.querySelector('.brand_firstName');
var change_themeIcon = document.querySelector('.change_themeIcon');

window.onscroll = function() {

  // pageYOffset or scrollY

  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
    navLink1.classList.add('liScrollColor');
    navLink2.classList.add('liScrollColor');
    navLink3.classList.add('liScrollColor');
    navLink4.classList.add('liScrollColor');
    navLink5.classList.add('liScrollColor');
    brand_name.classList.add('brand_nameScrollColor');
    change_themeIcon.classList.add('change_theme_scrollColor');

  } else {
    navbar.classList.remove('scrolled')
    navLink1.classList.remove('liScrollColor');
    navLink2.classList.remove('liScrollColor');
    navLink3.classList.remove('liScrollColor');
    navLink4.classList.remove('liScrollColor');
    navLink5.classList.remove('liScrollColor');
    brand_name.classList.remove('brand_nameScrollColor');
    change_themeIcon.classList.remove('change_theme_scrollColor');

  }
}


$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("#scroll").fadeIn();
      } else {
        $("#scroll").fadeOut();
      }
    });
    $("#scroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  

  // Slideshow quote section  start
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Slideshow quote section  end

//count function start

(function( $ ){
  "use strict";

  $.fn.countUp = function( options ) {

    // Defaults
    var settings = $.extend({
        'time': 1500,
        'delay': 10
    }, options);

    return this.each(function(){

        // Store the object
        var $this = $(this);
        var $settings = settings;

        var counterUpper = function() {
            if(!$this.data('counterupTo')) {
                $this.data('counterupTo',$this.text());
            }
            var time = parseInt($this.data("counter-time")) > 0 ? parseInt($this.data("counter-time")) : $settings.time;
            var delay = parseInt($this.data("counter-delay")) > 0 ? parseInt($this.data("counter-delay")) : $settings.delay;
            var divisions = time / delay;
            var num = $this.data('counterupTo');
            var nums = [num];
            var isComma = /[0-9]+,[0-9]+/.test(num);
            num = num.replace(/,/g, '');
            var isInt = /^[0-9]+$/.test(num);
            var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
            var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

            // Generate list of incremental numbers to display
            for (var i = divisions; i >= 1; i--) {

                // Preserve as int if input was int
                var newNum = parseInt(Math.round(num / divisions * i));

                // Preserve float if input was float
                if (isFloat) {
                    newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                }

                // Preserve commas if input had commas
                if (isComma) {
                    while (/(\d+)(\d{3})/.test(newNum.toString())) {
                        newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                    }
                }

                nums.unshift(newNum);
            }

            $this.data('counterup-nums', nums);
            $this.text('0');

            // Updates the number until we're done
            var f = function() {
                $this.text($this.data('counterup-nums').shift());
                if ($this.data('counterup-nums').length) {
                    setTimeout($this.data('counterup-func'),delay);
                } else {
                    delete $this.data('counterup-nums');
                    $this.data('counterup-nums', null);
                    $this.data('counterup-func', null);
                }
            };
            $this.data('counterup-func', f);

            // Start the count up
            setTimeout($this.data('counterup-func'),delay);
        };

        // Perform counts when the element gets into view
        $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
    });

  };

})( jQuery );
$( '.counter' ).countUp();

//count function end
