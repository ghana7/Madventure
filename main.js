window.onload = function() {
	var print = function(data) {
		$("#textDisplay").append(data);
	}
	var println = function(data) {
		print(data);
		print("</br>");
		$("#textDisplay").scrollTop($("#textDisplay")[0].scrollHeight);
	}

	$("#textInput").on("keydown",function search(e) {
		if(e.keyCode == 13) { //if key is enter
			if ($(".current")[0]){
				//replace text in div
				$(".prompt:not(.current)")[0].addClass("current"); //sets next span to be the current one
				$(".current")[0].removeClass("current")
			} else {
				
			}
			
			
			println($(this).val());
			$("#textInput").val("");
		}
	});
	
	print("This is the story of <span class='prompt current'>[PROPER NAME]</span>.");
}

