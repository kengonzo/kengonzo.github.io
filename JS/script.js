$(document).ready(function(){
	//setting menu options width
	$(".HeaderMenu").css("width", (100/array.length) + "%");
	$.ajax({
		url: "Portfolio/Oil/Images/Fullsize/",
		success: function(data){
			$(data).find("td > a").each(function(){
				// will loop through 
				console.log("Found a file: " + $(this).attr("href"));
			});
		}
	});
});