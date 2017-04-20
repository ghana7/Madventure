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
			if ($(".prompt").length){
				$(".prompt").first().html($(this).val());
				$(".prompt").first().removeClass("prompt").addClass("filledPrompt");
				$("#textInput").val("");
			} else {
				println($(this).val());
				$("#textInput").val("");
			}
		}
	});
	
	print("This is the story of <span class='prompt'>[PROPER NAME]</span>. He is <span class='prompt'>[ADJECTIVE]</span>.");
}

