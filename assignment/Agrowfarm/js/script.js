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
  
