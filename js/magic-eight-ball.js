$(document).ready(function(){

var magic8Ball = {};
magic8Ball.listOfAnswers = ["Certainly!", "Yes, most definitely", "Without a doubt", "You may rely on it", "Definitely no", "Yes", "No", "Very doubtful", "Maybe", "Possibly", "Of course!", "Probably not"];

$("#answer").hide();

magic8Ball.askQuestion = function(randomQuestion)
{
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	var randomAnswer = this.listOfAnswers[randomIndex];
	$("#answer").text(randomAnswer);
	console.log(randomQuestion);
	console.log(randomAnswer);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
};

$("#answer").hide();

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");


var onClick = function () {
	setTimeout (
		function () {
				$("#8ball").effect("shake");
				var question = prompt("What is your question?")
				magic8Ball.askQuestion(question)
			}, 500);

  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

$("#answer").hide();

$("#answer").fadeIn(4000);
};

$("#questionButton").click(onClick);
});
