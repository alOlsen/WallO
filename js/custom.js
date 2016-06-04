$(document).ready(function(){

console.log ("validator");

var visa 	= 	16 //the amount of digits that the card has
var discover = 	12
var master 	= 	10


var teachName
var teachEmail
var teachSchool
var addressSchool
var citySchool
var stateSchool
var zipSchool

var teachName_valid		= false;
var teachEmail_valid 	= false;
var teachSchool_valid 	= false;
var addressSchool_valid = false;
var citySchool_valid 	= false;
var stateSchool_valid 	= false;
var zipSchool_valid		= false;









$("#teach_btn").click(function(){

console.log ("volunteerBtn");

teachName = 	$("#teachName").val();
teachEmail = 	$("#teachEmail").val();
teachSchool = 	$("#teachSchool").val();
addressSchool =	$("#addressSchool").val();
citySchool =	$("citySchool").val();
stateSchool =	$("#stateSchool").val();
zipSchool =		$("#zipSchool").val();


console.log (teachName);
console.log (teachEmail);
console.log (teachSchool);
console.log (addressSchool);
console.log (citySchool);
console.log (stateSchool);
console.log (zipSchool);



if (teachName==" "){

	console.log("First name is required");
	$("teachName").css ("color", "red");
}
else {
	if(validate("normalString", teachName)){
		console.log ("Pass")
	}else{
		console.log ("Fail")
	}

}

if (teachEmail==" "){

	console.log("Email is required");
	$("teachEmail").css ("color", "red");
}
else {
	if(validate("emailAddress", emailAddress)){
		console.log ("Pass")
	}else{
		console.log ("Fail")
	}
}

if (teachEmail==" "){

	console.log("Email is required");
	$("teachEmail").css ("color", "red");
}
else {
	if(validate("emailAddress", emailAddress)){
		console.log ("Pass")
	}else{
		console.log ("Fail")
	}
}
	if(teachName_valid && teachEmail_valid && teachSchool_valid){
		
	}


});


	function validate(inputType, userInput){
		var valid = false;

		switch(inputType){

			case 'normalString':
					userInput = cleanup (userInput);
					console.log ("CLEAN UP RESULT");
					console.log (userInput);


				break;

			case 'emailAddress':
					userInput = cleanup (userInput);
					if (userInput.indexOf("@") >= 0){

						if(userInput.indexOf(".") >= 0 ){
							valid = true;
						}
					}
				break;

			case 'zipCode':
					console.log("Retype your zipcode");
					userInput = cleanup (userInput);
					if (isNaN (userInput) ) {
						valid = false;
					} else {

						valid = true;
					}

				break;
			case 'creditCard':
					console.log("Please pay for your shit")
					userInput = cleanup (userInput);
					if (isNaN (userInput) ) {
						valid = false;
					} else {

						valid = true;
					}
		}

		return valid;
	}

		function cleanup(userInput){
			console.log("cleanup()")

			var temp = userInput;
			temp = temp.replace(/-/)
			temp = temp.replace("<", "&lt");
			temp = temp.replace(">", "&gt");
			temp = temp.replace("SELECT", " ");
			temp = temp.replace("DELETE", " ");
			temp = temp.replace("INSERT", " ");
			temp = temp.replace("alert()", " ");
			
			return temp;
		}

	});



		if(temp.indexOf("<") == -1){

		}else{

			temp.replace("<", "&lt");
		}

		}

});

/*
var teacher= new Array ();
$("#teach_btn").click(function(){
	
	teacher['Name']= $("#teachName").val();
	teacher['Email']= $("#teachEmail").val();
	teacher['School']= $("#teachSchool").val();
	teacher['WkAdress']= $("#addressSchool").val();
	teacher['WkCity']= $("#citySchool").val();
	teacher['WkState']= $("#stateSchool").val();
	teacher['WkZip']= $("#zipSchool").val();
});


var subject= new Array();

subject[0]="ELL"
subject[1]="English"
subject[2]="Cretive Writing"
subject[3]="Business Writing"
subject[4]="Spanish"
subject[5]="French"
subject[6]="Latin"
subject[7]="German"
subject[8]="Basic Math"
subject[9]="Alegbra"
subject[10]="Geometry"
subject[11]="Triganometry"
subject[12]="Earth Science"
subject[13]="Biology"
subject[14]="Chemistry"
subject[15]="Physics"
subject[16]="U.S. History"
subject[17]="Global"
subject[18]="Social Studies"
subject[19]="Technology"
subject[20]="Art"
subject[21]="Health"
subject[22]="Other"


*/