<!-- Begin

function validate() {

	var erroralert = "";
	var scorestotal = 0;

	var answerscores = new Array;
	var errortext = new Array;

	answerscores[0] = document.answerform.q1v.value;
	answerscores[1] = document.answerform.q2v.value;
	answerscores[2] = document.answerform.q3v.value;
	answerscores[3] = document.answerform.q4v.value;
	answerscores[4] = document.answerform.q5v.value;
	answerscores[5] = document.answerform.q6v.value;

	// var PlayerName = document.answerform.form_id.value;
	// var Password = document.answerform.password.value;


	errortext[0] = "You have not submitted valid scores for all of the questions. You must assign one question worth 0 points, two worth 1 point, two worth 2, and one worth 3, for a total of nine points. Please correct.";
	errortext[1] = "You did not check the box confirming your submission. YOUR ANSWERS WERE NOT SUBMITTED. If you wish to submit, please check the box."

	if (document.answerform.q1v.value > 5) {
		erroralert = errortext[0];
	} else {
		for (var i = 0; i < 6; i++) {
			var scorecheck = parseInt(answerscores[i]);
			if (isNaN(scorecheck)) {
				erroralert = errortext[0];
			} else if ((scorecheck > 3) || (scorecheck < 0)) {
				erroralert = errortext[0];
			} else {
				scorestotal += Math.pow(10,scorecheck);
			}
		}

		var ready = document.answerform.ready.checked;
		if (!ready) { erroralert = errortext[1]; }

		if ((!erroralert) && (scorestotal != 1221)) {
			erroralert = errortext[0];
		}
	}

	if (erroralert) {
		alert(erroralert);

		return false;
	} else {
		document.getElementById("Q1ANS").style.display = "block";
		document.getElementById("Q2ANS").style.display = "block";
		document.getElementById("Q3ANS").style.display = "block";
		document.getElementById("Q4ANS").style.display = "block";
		document.getElementById("Q5ANS").style.display = "block";
		document.getElementById("Q6ANS").style.display = "block";
		//alert("poop");
		return true;
	}

}

// End -->

