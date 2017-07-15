//Create a random number 19-120
var targetScore;
var gemValue;
var totalScore;
var losses = 0;
var wins = 0;

function randomNumber(min, max) {
	return min + Math.floor((Math.random() * (max + 1 - min)));
}



function initializeGemValues () {
	$(".blue-rupee").val(randomNumber(1,12));
	$(".red-rupee").val(randomNumber(1,12));
	$(".green-rupee").val(randomNumber(1,12));
	$(".yellow-rupee").val(randomNumber(1,12));	
}

function reset () {
	initializeGemValues();
	totalScore = 0;
	$("#total-score").text(totalScore);
	$("#target-score").text(randomNumber(19,120));
	targetScore = $("#target-score").text();
	console.log($("#total-score").text());
}

$(document).ready(function () {
	$("#total-score").text(totalScore);
	$("#wins").text(wins);
	$("#losses").text(losses);
	$("#wins").html("0");
	$("#losses").html("0");

	reset();
		

	$(".gems").on("click", function() {
		totalScore = totalScore + parseInt($(this).val());
		$("#total-score").text(totalScore);

		if(totalScore > targetScore) {
			alert("You Lost!");
			losses++;
			$("#losses").text(losses);
			reset();
	
	}
		if(parseInt(totalScore) === parseInt(targetScore)) {
			alert("You win!");
			wins++;
			$("#wins").text(wins);
			reset();
		}	
		console.log("totalScore: " + totalScore);
		console.log("targetScore: " + targetScore)
	});
	
}); //$(document).ready





