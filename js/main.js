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


function about(){
	$("#home" ).hide();
	$("#about").show();
}
// function skills(){
// 	$("#hero").hide();
// 	$("#skills").show();
// }
// function contact(){
// 	$("#hero" ).hide();
// 	$("#contact").show();
// }