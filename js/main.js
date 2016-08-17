// menu oculto
$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	});
// fin menu
function home(){
	$("#about" ).hide();
	$("#skills" ).hide();
	$("#portfolio" ).hide();
	$("#contact" ).hide();
	$("#home").show();
}

function about(){
	$("#home" ).hide();
	$("#portfolio" ).hide();
	$("#skills" ).hide();
	$("#contact" ).hide();
	$("#about").show();
}
function skills(){
	$("#home" ).hide();
	$("#about" ).hide();
	$("#portfolio" ).hide();
	$("#contact" ).hide();
	$("#skills").show();
}
function portfolio(){
	$("#home" ).hide();
	$("#about" ).hide();
	$("#skills" ).hide();
	$("#contact" ).hide();
	$("#portfolio").show();
}

function contact(){
	$("#home" ).hide();
	$("#about" ).hide();
	$("#skills" ).hide();
	$("#portfolio" ).hide();
	$("#contact").show();
}