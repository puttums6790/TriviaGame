var timer = 90;
var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;
$(document).ready(function(){
	$("#game").hide();
	$("#final").hide();
	$("#start_button").on("click", function(){
		$("#start").hide();
		$("#game").show();
		startCountdown();
		return;
	});
	function countdown(){
		timer--;
    	$('#timer_number').html(timer + " Seconds");
			$("#done_button").on("click", function(){
			timer = 0;
			return;
			});
			if(timer == -1){
				timeUp();
				$("#game").hide();
			}
	}
	function startCountdown(){
		setInterval(countdown, 1000);
	}
	function timeUp(){
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();
		var Q11 = $('input:radio[name="q11"]:checked').val();
		var Q12 = $('input:radio[name="q12"]:checked').val();
		var Q13 = $('input:radio[name="q13"]:checked').val();
		var Q14 = $('input:radio[name="q14"]:checked').val();
		var Q15 = $('input:radio[name="q15"]:checked').val();

		if(Q1 == undefined){
			unansweredScore++;
		}
		else if(Q1 == "MARTHA"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}


		if(Q2 == undefined){
			unansweredScore++;
		}
		else if(Q2 == "1938"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}


		if(Q3 == undefined){
			unansweredScore++;
		}
		else if(Q3 == "Bill Murray"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}


		if(Q4 == undefined){
			unansweredScore++;
		}
		else if(Q4 == "New Jersey"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}


		if(Q5 == undefined){
			unansweredScore++;
		}
		else if(Q5 == "Jay Garrick"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}


		if(Q6 == undefined){
			unansweredScore++;
		}
		else if(Q6 == "Lucy Lawless"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}


		if(Q7 == undefined){
			unansweredScore++;
		}
		else if(Q7 == "magic"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}


		if(Q8 == undefined){
			unansweredScore++;
		}
		else if(Q8 == "Matches Malone"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}


		if(Q9 == undefined){
			unansweredScore++;
		}
		else if(Q9 == "2814"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}



		if(Q10 == undefined){
			unansweredScore++;
		}
		else if(Q10 == "Oreos"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}

		if(Q11 == undefined){
			unansweredScore++;
		}
		else if(Q11 == "Bat-phone"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}

		if(Q12 == undefined){
			unansweredScore++;
		}
		else if(Q12 == "THE ICE AGE!!!"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}

		if(Q13 == undefined){
			unansweredScore++;
		}
		else if(Q13 == "Red"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}

		if(Q14 == undefined){
			unansweredScore++;
		}
		else if(Q14 == "The readers"){
			correctScore++;
		}
		else{
			incorrectScore++;
		}

		if(Q15 == undefined){
			unansweredScore++;
		}
		else{
			correctScore++;
		}

		$('#correct_answers').html(correctScore);
		$('#wrong_answers').html(incorrectScore);
		$('#unanswered').html(unansweredScore);
		$("#final").show();

	}

});
