$(document).ready(function(){
	var colors = ["green", "yellow"];
	$("#circle").click(function(){
		var rand = Math.floor(Math.random() * colors.length);
		$(this).css("background-color", colors[rand]);
		
	});
});