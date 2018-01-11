$('[data-spy="scroll"]').on('activate.bs.scrollspy', function (event) {
	var section = event.target.firstChild.innerHTML;

	if (section != "Home" ) {
		document.getElementById("main-header").style.display = "none";
		$("#additional-header").addClass('additional-header-visible');
	} else {
		document.getElementById("main-header").style.display = "block";
		$("#additional-header").removeClass('additional-header-visible');
	}
})

// slow scroll
$(document).ready(function(){
	var offset = 100;
	$("#navMenu").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top - offset;
	    $('body,html').animate({scrollTop: top}, 1500);
	});
	$("#first-navMenu").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top - offset;
	    $('body,html').animate({scrollTop: top}, 1500);
	});
});

