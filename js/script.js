$('[data-spy="scroll"]').on('activate.bs.scrollspy', function (event) {
	var section = event.target.firstChild.innerHTML;

	if (section != "Home" ) {
		document.getElementById("main-header").style.display = "none";
		document.getElementById("additional-header").style.display = "block";
	} else {
		document.getElementById("main-header").style.display = "block";
		document.getElementById("additional-header").style.display = "none";
	}
})