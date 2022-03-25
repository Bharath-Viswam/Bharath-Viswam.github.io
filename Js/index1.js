let email_ = document.getElementById('email');
let pwd_ = document.getElementById('pwd');
let email_span = document.getElementById('email_span');
let email_label = document.getElementById('email_label');
let pwd_span = document.getElementById('pwd_span');
let pwd_label = document.getElementById('pwd_label');
let regexp_obj__test = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');
let regexp_one_upper_c = new RegExp('(?=.*[A-Z])');
let regexp_one_lower_c = new RegExp('(?=.*[a-z])');
let regexp_one_digit = new RegExp('(?=.*[0-9])');
let regexp_obj = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
function pos_fix() {
	if (pwd_label.innerText != '') {
		pwd_span.style.top = '143px';
		pwd_span.style.left = '510px';
	} else if (email_label.innerText == '' && regexp_obj__test.test(pwd_.value.trim())) {
		pwd_span.style.top = '143px';
		pwd_span.style.left = '510px';
	} else {
		pwd_span.style.top = '166px';
		pwd_span.style.left = '510px';
	}
}
function pwd_indicator() {
	if (regexp_obj__test.test(pwd_.value.trim())) {
		pwd_span.innerText = 'Strong';

		pwd_span.style.border = '4px solid green';
		pwd_span.style.padding = '2px';
		pwd_span.style.background = 'green';
	} else if (pwd_.value.length < 8) {
		pwd_span.innerText = 'Weak';
		pwd_span.style.border = '4px solid red';
		pwd_span.style.padding = '2px';
		pwd_span.style.background = 'red';
	} else if (pwd_.value.length > 8) {
		if (
			regexp_one_digit.test(pwd_.value.trim()) ||
			regexp_one_upper_c.test(pwd_.value.trim()) ||
			regexp_one_lower_c.test(pwd_.value.trim())
		) {
			pwd_span.innerText = 'Medium';
			pwd_span.style.border = '4px solid orange';
			pwd_span.style.padding = '2px';
			pwd_span.style.background = 'orange';
		}
	}
}
let timeout;
pwd_.addEventListener('input', () => {
	pwd_span.style.display = 'block';
	clearTimeout(timeout);
	timeout = setTimeout(() => pwd_indicator(pwd_.value), 500);
	if (pwd_.value.length !== 0) {
		pwd_span.style.display != 'block';
		pos_fix();
	} else {
		pwd_span.style.display = 'none';
		pos_fix();
	}
});

pwd_.addEventListener('input', () => {
	pwd_label.style.display = 'block';
	pos_fix();
	clearTimeout(timeout);
	timeout = setTimeout(() => validation(pwd_.value), 500);
	if (regexp_obj__test.test(pwd_.value.trim()) && pwd_.value.length > 8) {
		pwd_label.style.display = 'none';
		pos_fix();
	} else if (pwd_.value.length == 0 || pwd_.value.length < 8) {
		pwd_label.style.display != 'block';
		pos_fix();
	} else {
		pwd_label.style.display = 'block';
		pos_fix();
	}
});

email_.addEventListener('input', () => {
	email_label.style.display = 'block';
	pos_fix();
	clearTimeout(timeout);
	timeout = setTimeout(() => validation(email_.value), 500);
	if (regexp_obj__test.test(email_.value.trim()) && email_.value.length > 8) {
		email_label.style.display = 'none';
		pos_fix();
	} else if (email_.value.length == 0) {
		email_label.style.display != 'block';
		pos_fix();
	} else {
		email_label.style.display = 'block';
		pos_fix();
	}
});
//TODO Email validation via event listener
//*next function will include both basic form validation and format validation:)
function validation() {
	//TODO Email Validation First- email validate wrong
	pwd_label.innerText = '';
	email_label.innerText = '';
	pos_fix();
	if (regexp_obj__test.test(pwd_.value.trim())) {
		pwd_span.innerText = 'Strong';
		pwd_span.style.border = '4px solid green';
		pwd_span.style.padding = '2px';
		pwd_span.style.background = 'green';
	}
	if (email_.value.trim() == '' || pwd_.value.trim() == '') {
		pwd_indicator();

		if (email_.value.trim() == '') {
			email_label.innerText = 'email field should not be empty';
			email_label.style.color = 'red';
			pwd_label.innerText = '';
			email_label.style.display = 'block';
			pwd_label.style.display = 'none';
			pos_fix();
			return false;
		} else if (pwd_.value.trim() == '') {
			pwd_label.innerText = 'password field should not be empty';
			pwd_label.style.color = 'red';
			email_label.innerText = '';
			email_label.style.display = 'none';
			pwd_label.style.display = 'block';
			pos_fix();
			return false;
		}
	} else if (regexp_obj.test(email_.value.trim()) == false) {
		pwd_indicator();

		email_label.style.display = 'block';
		pwd_label.style.display = 'block';
		if (pwd_.value.trim() != '') {
			email_label.innerText = 'email should be in the correct format';
			email_label.style.color = 'red';
			pwd_label.innerText = '';
			pos_fix();
			return false;
		} else {
			email_label.innerText = 'email should be in the correct format';
			email_label.style.color = 'red';
			pos_fix();
			return false;
		}
	} else if (regexp_obj.test(email_.value.trim())) {
		pwd_indicator();

		email_label.style.display = 'block';
		pwd_label.style.display = 'block';
		if (pwd_.value.length < 8) {
			email_label.innerText = '';
			pwd_label.innerText = 'password should be atleast 8 letters long';
			pwd_label.style.color = 'red';
			pos_fix();
			return false;
		} else if (regexp_one_lower_c.test(pwd_.value.trim()) == false) {
			email_label.innerText = '';
			pwd_label.innerText = 'password should contain atleast one lower case letter';
			pwd_label.style.color = 'red';
			pos_fix();
			return false;
		} else if (regexp_one_upper_c.test(pwd_.value.trim()) == false) {
			email_label.innerText = '';
			pwd_label.innerText = 'password should contain atleast one upper case letter';
			pwd_label.style.color = 'red';
			pos_fix();
			return false;
		} else if (regexp_one_digit.test(pwd_.value.trim()) == false) {
			email_label.innerText = '';
			pwd_label.innerText = 'password should  contain atleast one digit';
			pwd_label.style.color = 'red';
			pos_fix();
			return false;
		}
	} else {
		//TODO Important doubt to be rectified in js you know  if one code doesnt work the rest below does'nt work,so how should we find such errors, which stop below code from executing!!//
		pwd_indicator();
		pos_fix();
		email_label.style.display = 'block';
		pwd_label.style.display = 'block';
		if (regexp_obj.test(email_.value) == false) {
			pos_fix();
			return false;
		} else {
			pos_fix();
			return true;
		}
	}
}
//*Signup Page
//*Email,Password,Phonenumber
// let email_signuplbl = document.getElementById('emailsignuplabl_'); //email label
// let paswd_signuplbl = document.getElementById('paswdsignuplabl_'); //paswd label
// let phnmb_signuplbl = document.getElementById('phnmbsignuplabl'); // phnmb label
// let paswd_span_signup = document.getElementById('strength_paswd'); //paswd strength indicator
// let email_signup = document.getElementById('email_signup'); //email element
// let paswd_signup = document.getElementById('paswd_signup'); //paswd element
// let phnmb_signup = document.getElementById('phnmb_signup'); //phnmb element
// let phn_no_regexp_obj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //ph_no reg exp
// // regexp_obj__test -pwd_indicator_first condition
// // regexp_one_upper_c  - paswd upper case regular exp
// //regexp_one_lower_c - paswd lower case regular exp
// //regexp_one_digit - paswd  digit regular exp
// //regexp_obj - email regexp
// //TODO to create  event listner similar to the one we had for login page
// function pwd_indicator_signup() {
// 	if (regexp_obj__test.test(paswd_signup.value.trim())) {
// 		paswd_span_signup.innerText = 'Strong';
// 		paswd_span_signup.style.border = '4px solid green';
// 		paswd_span_signup.style.padding = '2px';
// 		paswd_span_signup.style.background = 'green';
// 	} else if (paswd_signup.value.length < 8) {
// 		paswd_span_signup.innerText = 'Weak';
// 		paswd_span_signup.style.border = '4px solid red';
// 		paswd_span_signup.style.padding = '2px';
// 		paswd_span_signup.style.background = 'red';
// 	} else if (paswd_signup.value.length > 8) {
// 		if (
// 			regexp_one_digit.test(paswd_signup.value.trim()) ||
// 			regexp_one_upper_c.test(paswd_signup.value.trim()) ||
// 			regexp_one_lower_c.test(paswd_signup.value.trim())
// 		) {
// 			paswd_span_signup.innerText = 'Medium';
// 			paswd_span_signup.style.border = '4px solid orange';
// 			paswd_span_signup.style.padding = '2px';
// 			paswd_span_signup.style.background = 'orange';
// 		} else {
// 		}
// 	}
// }
// function validation_snup() {
// 	// TODO to add validation to signup page for 3 fields-email first then paswd -add indicator -create event listner -
// 	// TODO then phn number then if all are satisfied return true - this is the logic i want to implement here
// 	//? Current TO DO LOGIC
// 	if (regexp_obj__test.test(paswd_signup.value.trim())) {
// 		paswd_span_signup.innerText = 'Strong';
// 		paswd_span_signup.style.border = '4px solid green';
// 		paswd_span_signup.style.padding = '2px';
// 		paswd_span_signup.style.background = 'green';
// 	} else if (email_signup.value.trim() == '' || paswd_signup.value.trim() == '') {
// 		pwd_indicator_signup();
// 		if (email_signup.value.trim() == '' && paswd_signup.value.trim() == '') {
// 			email_signuplbl.innerText = 'email field should not be empty';
// 			email_signuplbl.style.color = 'red';
// 			paswd_signuplbl.innerText = 'password field should not be empty';
// 			paswd_signuplbl.style.color = 'red';
// 			return false;
// 		} else if (email_signup.value.trim() == '' && paswd_signup.value.trim() != '') {
// 			email_signuplbl.innerText = 'email field should not be empty';
// 			email_signuplbl.style.color = 'red';
// 			paswd_signuplbl.innerText = '';
// 			return false;
// 		} else if (email_signup.value.trim() != '' && paswd_signup.value.trim() == '') {
// 			paswd_signuplbl.innerText = 'password field should not be empty';
// 			paswd_signuplbl.style.color = 'red';
// 			email_signuplbl.innerText = '';
// 			return false;
// 		}
// 	} else if (regexp_obj.test(email_signup.value.trim()) == false) {
// 		pwd_indicator_signup();
// 		if (paswd_signup.value.trim() != '') {
// 			email_signuplbl.innerText = 'email should be in the correct format';
// 			email_signuplbl.style.color = 'red';
// 			paswd_signuplbl.innerText = '';
// 			return false;
// 		} else {
// 			email_signuplbl.innerText = 'email should be in the correct format';
// 			email_signuplbl.style.color = 'red';
// 			return false;
// 		}
// 	} else if (regexp_obj.test(email_signup.value.trim())) {
// 		pwd_indicator_signup();

// 		if (paswd_signup.value.length < 8) {
// 			email_signuplbl.innerText = '';
// 			paswd_signuplbl.innerText = 'password should be atleast 8 letters long';
// 			paswd_signuplbl.color = 'red';

// 			return false;
// 		} else if (regexp_one_lower_c.test(paswd_signup.value.trim()) == false) {
// 			email_signuplbl.innerText = '';
// 			paswd_signuplbl.innerText = 'password should contain atleast one lower case letter';
// 			paswd_signuplbl.color = 'red';

// 			return false;
// 		} else if (regexp_one_upper_c.test(paswd_signup.value.trim()) == false) {
// 			email_signuplbl.innerText = '';
// 			paswd_signuplbl.innerText = 'password should contain atleast one upper case letter';
// 			paswd_signuplbl.color = 'red';

// 			return false;
// 		} else if (regexp_one_digit.test(paswd_signup.value.trim()) == false) {
// 			email_signuplbl.innerText = '';
// 			paswd_signuplbl.innerText = 'password should  contain atleast one digit';
// 			paswd_signuplbl.color = 'red';

// 			return false;
// 		}
// 	} else {
// 		//TODO Important doubt to be rectified in js you know  if one code doesnt work the rest below does'nt work,so how should we find such errors, which stop below code from executing!!//
// 		pwd_indicator_signup();
// 		if (regexp_obj.test(email_signup.value) == false) {
// 			email_signuplbl.innerText = 'email should be in the correct format!';
// 			email_signuplbl.style.color = 'red';
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// }
