$(document).ready(function() {
	// Start at question 1
	var currentQuestion = 1;

	var showQuestion = function(questionId) {
		// Hide all questions
		$(".question").addClass("hidden");
		// Show only current question
		$("#question" + questionId).removeClass("hidden");
	}
	showQuestion(currentQuestion);

	$(".answer").on("click", function(event) {
		console.log($(this));
		var questionId = $(this).closest('.question').data('question-id');
		var answerId = $(this).data('answer-id');
		$.post("/questions/" + questionId + "/answer/" + answerId);
		// Advance to next question
		currentQuestion++;
		showQuestion(currentQuestion);
		// TODO handle reaching end of quiz
	})
});