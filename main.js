$(document).ready(startMe);

function startMe() {
  //uncomment needed function, change selectors to your own
  //setHeight();
  //movingMenu();
  //scrollBack();
  //stickyElement();
}

function setHeight() {
  $('.atf-container').height($(window).innerHeight());
}

function movingMenu() {
  $('.menu-button').on('click touch', function(event) {
    event = event || window.event;
    var sectionID = event.currentTarget.id + "-section";
    jQuery("html,body").animate({
        scrollTop: jQuery("#" + sectionID).offset().top - 60
    }, 1000);
  });
}

function scrollBack() {
  $('.scroll-back-button').on('vclick click touch', function(event) {
    event.preventDefault();
    event = event || window.event;
    jQuery("html,body").animate({
      scrollTop: -100
    }, 1000);
  });
}

function stickyElement() {
	var elementPosition = $('.element-to-stick-or-something-else').offset().top;
	var stickyNav = function() {
	  var windowPosition = $(window).scrollTop();
	  if (windowPosition >= elementPosition) {
      //activate sticky nav or anything else
	  } else {
      //deactivate sticky nav or anything else
	  }
	};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});
}