// header & footer 
$(document).ready(function() {
    $("#header").load("partials/header.html")
    $("#footer").load("partials/footer.html")    
})


// modal 
$(window).on("load", function() {
    setTimeout(function() {
      $('#myModal').modal('show')
    }, 5000); 
    // appear after 5 second
  })


// Contact us___________________________________________________________________ 


function contact() {

	var name = document.getElementById("name")
    var email = document.getElementById("email")
    var subject = document.getElementById("subject")
    
	if(name.value === "" || name.value === null) {
		document.getElementById("send_msg").innerHTML = "Fill out the required fields";
		document.getElementById("send_msg").style.color = "red";
		document.getElementById("name").style.borderColor = "red";
	} else if (email.value === "" || name.value === null) {
		document.getElementById("send_msg").innerHTML = "Fill out the required fields";
		document.getElementById("send_msg").style.color = "red";
		document.getElementById("email").style.borderColor = "red";
	} else if (subject.value === "" || name.value === null) {
		document.getElementById("send_msg").innerHTML = "Fill out the required fields";
		document.getElementById("send_msg").style.color = "red";
		document.getElementById("subject").style.borderColor = "red";
	} else {
		document.getElementById("send_msg").innerHTML = "Thank you for your email !";
		document.getElementById("send_msg").style.color = "green";
	}


	
}


// Amdt quiz___________________________________________________________________ 

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


if (question1 == "Creativity Starts Here") {
    correct += 2;
} else if(question1 == "creativity starts here") {
	correct += 2;
} else if(question1 == "CREATIVITY STARTS HERE") {
	correct++;
} else {
	correct -= 2;
}

	if (question2 == "In2005") {
		correct += 2;
    } else {
	correct -= 2;
    }
	
	if (question3 == "Pearson") {
		correct += 2;
	} else {
		correct -= 2;
	}

	if (question4 == "Falmouth") {
		correct += 2;
	} else {
		correct -= 2;
	}

	if (question5 == "Bambalapitiya") {
		correct += 2;
	} else {
		correct -= 2;
	}

	if (question6 == "Accounting") {
		correct += 2;
	} else {
		correct -= 2;
	}

	if (question7 == "APL") {
		correct += 2;
	} else {
		correct -= 2;
	}

	if (question8 == "Three") {
		correct += 2;
	} else {
		correct -= 2;
	}

	if (question9 == "Amdtians") {
		correct += 2;
	} else {
		correct -= 2;
	}

	if (question10 == "Creatvity") {
		correct += 2;
	} else {
		correct -= 2;
	} 


	
	var pictures = ["images/congrats.gif", "images/badluck.gif"];
	var messages = ["Congratulations!", "Try Harder Next Time!"];
	var score;

	if (correct < 12) {
		score = 1;
		document.getElementById("message").style.color = "red";
	}

	if (correct >= 12 && correct <= 20) {
		score = 0;
		document.getElementById("message").style.color = "green";
	}



	document.getElementById("after_submit").style.visibility = "visible";
	

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " out of 20.";
	document.getElementById("picture").src = pictures[score];
	}
	
// End of Amdt quiz ___________________________________________________________________


// About the developer page _________________________________________________________
function imgFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	expandImg.src = imgs.src;
	
	expandImg.parentElement.style.display = "block";
}
// End of About the developer page ___________________________________________________________________




// back to top btn _________________________________________________________
$(document).ready(function() {
	$("#topBtn").click(function() {
		$("html , body").animate({scrollTop : 0}, 800)
	})
})




