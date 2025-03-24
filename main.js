/**
   * Scroll top button
   */
document.addEventListener("DOMContentLoaded", function () {
    let scrollTop = document.querySelector('.scroll-top');

    if (!scrollTop) return; // Avoid errors if the element is missing

    function toggleScrollTop() {
        if (window.scrollY > 100) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    }

    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', toggleScrollTop);

    // Ensure visibility state is checked after full render
    setTimeout(toggleScrollTop, 100);
});

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

/**
   * Fixed scrolled navbar
   */
window.addEventListener("scroll", function () {
    let header = document.querySelector(".nav-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/**
   * Toggle navabr menu icon
   */
const navToggle = document.getElementById("nav-toggle");
const navIcon = document.querySelector(".nav-icon i");
const navLinks = document.querySelectorAll(".navbar a");

// Toggle icon change when menu opens/closes
navToggle.addEventListener("change", function () {
    if (this.checked) {
        navIcon.classList.remove("fa-bars");
        navIcon.classList.add("fa-times"); // Change to 'X' icon
    } else {
        navIcon.classList.remove("fa-times");
        navIcon.classList.add("fa-bars"); // Change back to menu icon
    }
});

// Close menu when a nav link is clicked & reset the icon
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navToggle.checked = false; // Uncheck the toggle to close the menu
        navIcon.classList.remove("fa-times");
        navIcon.classList.add("fa-bars"); // Reset icon back to menu
    });
});


/**
   * Scroll down icon in home
   */
$('.scrolldown a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

