$(document).ready(function(){
	var colors = ["green", "yellow"];
	var i = 0;
	var selectedColor;
    $("#circle").click(function() {
        selectedColor = colors[i];
        document.getElementById("circle").style.backgroundColor = selectedColor;
        i++;
        if(i >= colors.length)
            i = 0;
    });
});

