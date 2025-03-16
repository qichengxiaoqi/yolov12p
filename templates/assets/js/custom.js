!(function($) {
	"use strict";

// Preloader Timeout
setTimeout(function(){
	$('.loader-wrap').fadeToggle();
   }, 2500);

  
//   Hide and Show Tabs

  $(document).on('click', '.show', function() {
    var show = $(this).data('show');
	$(show).removeClass("hide").siblings().addClass("hide");
  });


//   Sticky Navbar

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}

// Nice-Select Actice

$(document).ready(function() {
	$('select').niceSelect();
  });

// Venobox Active

$(document).ready(function() {
$('.venobox').venobox({
	'share': false
});
});

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
  });

// Contact Form Validation

(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
		  if (form.checkValidity() === true) {
            alert("Mail Has Been Sent");
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

//   Owl Carousel Js


$("#featured-properties-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	margin:10,
	nav:false,
	smartSpeed: 1500,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
  });
  
  $("#single-v1-banner-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	nav:true,
	smartSpeed: 2500,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
	}
  });


  $("#main-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	nav:true,
	smartSpeed: 2500,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
	}
  });
  
  $("#client-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	smartSpeed: 2500,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		500:{
			items:3
		},
		800:{
			items:5
		}
	}
  });

  $("#testimonial-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	margin: 30,
	smartSpeed: 2500,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		575:{
			items:2
		},
		800:{
			items:3
		}
	}
  });

  $('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
  })
  

})(jQuery);