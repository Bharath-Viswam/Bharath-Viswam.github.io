let email_signuplbl = document.getElementById('emailsignuplabl_'); //email label
let paswd_signuplbl = document.getElementById('paswdsignuplabl_'); //paswd label
let phnmb_signuplbl = document.getElementById('phnmbsignuplabl'); // phnmb label
let paswd_span_signup = document.getElementById('strength_paswd'); //paswd strength indicator
let email_signup = document.getElementById('email_signup'); //email element
let paswd_signup = document.getElementById('paswd_signup'); //paswd element
let phnmb_signup = document.getElementById('phnmb_signup'); //phnmb element
let phn_no_regexp_obj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let regexp_obj__test = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');
let regexp_one_upper_c = new RegExp('(?=.*[A-Z])');
let regexp_one_lower_c = new RegExp('(?=.*[a-z])');
let regexp_one_digit = new RegExp('(?=.*[0-9])');
let regexp_obj = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//ph_no reg exp
// regexp_obj__test -pwd_indicator_first condition
// regexp_one_upper_c  - paswd upper case regular exp
//regexp_one_lower_c - paswd lower case regular exp
//regexp_one_digit - paswd  digit regular exp
//regexp_obj - email regexp
//TODO to create  event listner similar to the one we had for login page
let timeout;
paswd_signup.addEventListener('input', () => {
	paswd_span_signup.style.display = 'block';
	clearTimeout(timeout);
	timeout = setTimeout(() => pwd_indicator_signup(paswd_signup.value), 500);
	if (paswd_signup.value.length !== 0) {
		paswd_span_signup.style.display != 'block';
	} else {
		paswd_span_signup.style.display = 'none';
	}
});

paswd_signup.addEventListener('input', () => {
	paswd_signuplbl.style.display = 'block';

	clearTimeout(timeout);
	timeout = setTimeout(() => validation_snup(paswd_signup.value), 500);
	if (regexp_obj__test.test(paswd_signup.value.trim()) && paswd_signup.value.length > 8) {
		paswd_signuplbl.style.display = 'none';
	} else if (paswd_signup.value.length !== 0) {
		paswd_signuplbl.style.display != 'block';
	} else {
		paswd_signuplbl.style.display = 'none';
	}
});

email_signup.addEventListener('input', () => {
	email_signuplbl.style.display = 'block';

	clearTimeout(timeout);
	timeout = setTimeout(() => validation_snup(email_signup.value), 500);
	if (regexp_obj__test.test(email_signup.value.trim()) && email_signup.value.length > 8) {
		email_signuplbl.style.display = 'none';
	} else if (email_signup.value.length !== 0) {
		email_signuplbl.style.display != 'block';
	} else {
		email_signuplbl.style.display = 'none';
	}
});

phnmb_signup.addEventListener('input', () => {
	phnmb_signuplbl.style.display = 'block';

	clearTimeout(timeout);
	timeout = setTimeout(() => validation_snup(phnmb_signup.value), 500);
	if (regexp_obj__test.test(phnmb_signup.value.trim()) && phnmb_signup.value.length > 8) {
		phnmb_signuplbl.style.display = 'none';
	} else if (phnmb_signup.value.length !== 0) {
		phnmb_signuplbl.style.display != 'block';
	} else {
		phnmb_signuplbl.style.display = 'none';
	}
});

function pwd_indicator_signup() {
	if (regexp_obj__test.test(paswd_signup.value.trim())) {
		paswd_span_signup.innerText = 'Strong';
		paswd_span_signup.style.border = '4px solid green';
		paswd_span_signup.style.padding = '2px';
		paswd_span_signup.style.background = 'green';
	} else if (paswd_signup.value.length < 8) {
		paswd_span_signup.innerText = 'Weak';
		paswd_span_signup.style.border = '4px solid red';
		paswd_span_signup.style.padding = '2px';
		paswd_span_signup.style.background = 'red';
	} else if (paswd_signup.value.length > 8) {
		if (
			regexp_one_digit.test(paswd_signup.value.trim()) ||
			regexp_one_upper_c.test(paswd_signup.value.trim()) ||
			regexp_one_lower_c.test(paswd_signup.value.trim())
		) {
			paswd_span_signup.innerText = 'Medium';
			paswd_span_signup.style.border = '4px solid orange';
			paswd_span_signup.style.padding = '2px';
			paswd_span_signup.style.background = 'orange';
		} else {
		}
	}
}
function validation_snup() {
	// TODO to add validation to signup page for 3 fields-email first then paswd -add indicator -create event listner -
	// TODO then phn number then if all are satisfied return true - this is the logic i want to implement here
	//? Current TO DO LOGIC
	phnmb_signuplbl.innerText = '';
	email_signuplbl.innerText = '';
	paswd_signuplbl.innerText = '';
	if (regexp_obj__test.test(paswd_signup.value.trim())) {
		paswd_span_signup.innerText = 'Strong';
		paswd_span_signup.style.border = '4px solid green';
		paswd_span_signup.style.padding = '2px';
		paswd_span_signup.style.background = 'green';
	} else if (email_signup.value.trim() == '' || paswd_signup.value.trim() == '' || phnmb_signup.value.trim() == '') {
		pwd_indicator_signup();

		if (email_signup.value.trim() == '') {
			email_signuplbl.style.display = 'block';
			email_signuplbl.innerText = 'email field should not be empty';
			email_signuplbl.style.color = 'red';
			paswd_signuplbl.style.display = 'none';
			phnmb_signuplbl.style.display = 'none';
			return false;
		} else if (paswd_signup.value.trim() == '') {
			paswd_signuplbl.style.display = 'block';
			paswd_signuplbl.innerText = 'password field should not be empty';
			paswd_signuplbl.style.color = 'red';
			phnmb_signuplbl.style.display = 'none';
			email_signuplbl.style.display = 'none';

			return false;
		} else if (phnmb_signup.value.trim() == '') {
			phnmb_signuplbl.style.display = 'block';
			phnmb_signuplbl.innerText = 'phnumber field should not be empty';
			phnmb_signuplbl.style.color = 'red';
			paswd_signuplbl.style.display = 'none';
			email_signuplbl.style.display = 'none';
			return false;
		}
	} else if (regexp_obj.test(email_signup.value.trim()) == false) {
		phnmb_signuplbl.style.display = 'block';
		email_signuplbl.style.display = 'block';
		paswd_signuplbl.style.display = 'block';
		pwd_indicator_signup();
		if (paswd_signup.value.trim() != '') {
			email_signuplbl.innerText = 'email should be in the correct format';
			email_signuplbl.style.color = 'red';
			paswd_signuplbl.innerText = '';
			return false;
		} else {
			email_signuplbl.innerText = 'email should be in the correct format';
			email_signuplbl.style.color = 'red';
			return false;
		}
	} else if (regexp_obj.test(email_signup.value.trim())) {
		pwd_indicator_signup();
		phnmb_signuplbl.style.display = 'block';
		email_signuplbl.style.display = 'block';
		paswd_signuplbl.style.display = 'block';
		if (paswd_signup.value.length < 8) {
			email_signuplbl.innerText = '';
			paswd_signuplbl.innerText = 'password should be atleast 8 letters long';
			paswd_signuplbl.style.color = 'red';

			return false;
		} else if (regexp_one_lower_c.test(paswd_signup.value.trim()) == false) {
			email_signuplbl.innerText = '';
			paswd_signuplbl.innerText = 'password should contain atleast one lower case letter';
			paswd_signuplbl.style.color = 'red';

			return false;
		} else if (regexp_one_upper_c.test(paswd_signup.value.trim()) == false) {
			email_signuplbl.innerText = '';
			paswd_signuplbl.innerText = 'password should contain atleast one upper case letter';
			paswd_signuplbl.style.color = 'red';

			return false;
		} else if (regexp_one_digit.test(paswd_signup.value.trim()) == false) {
			email_signuplbl.innerText = '';
			paswd_signuplbl.innerText = 'password should  contain atleast one digit';
			paswd_signuplbl.style.color = 'red';

			return false;
		}
	}
	if (phn_no_regexp_obj.test(phnmb_signup.value.trim()) == false) {
		pwd_indicator_signup();

		phnmb_signuplbl.innerText = 'phno should be in the correct format!';
		phnmb_signuplbl.style.color = 'red';
		return false;
	} else {
		//TODO Important doubt to be rectified in js you know  if one code doesnt work the rest below does'nt work,so how should we find such errors, which stop below code from executing!!//
		pwd_indicator_signup();
		phnmb_signuplbl.style.display = 'block';
		email_signuplbl.style.display = 'block';
		paswd_signuplbl.style.display = 'block';
		if (regexp_obj.test(email_signup.value) == false) {
			email_signuplbl.innerText = 'email should be in the correct format!';
			email_signuplbl.style.color = 'red';
			return false;
		} else if (regexp_obj.test(email_signup.value.trim()) == false) {
			phnmb_signuplbl.style.display = 'block';
			email_signuplbl.style.display = 'block';
			paswd_signuplbl.style.display = 'block';
			pwd_indicator_signup();
			if (paswd_signup.value.trim() != '') {
				email_signuplbl.innerText = 'email should be in the correct format';
				email_signuplbl.style.color = 'red';
				paswd_signuplbl.innerText = '';
				return false;
			} else {
				email_signuplbl.innerText = 'email should be in the correct format';
				email_signuplbl.style.color = 'red';
				return false;
			}
		} else if (regexp_obj.test(email_signup.value.trim())) {
			pwd_indicator_signup();

			if (paswd_signup.value.length < 8) {
				email_signuplbl.innerText = '';
				paswd_signuplbl.innerText = 'password should be atleast 8 letters long';
				paswd_signuplbl.style.color = 'red';

				return false;
			} else if (regexp_one_lower_c.test(paswd_signup.value.trim()) == false) {
				email_signuplbl.innerText = '';
				paswd_signuplbl.innerText = 'password should contain atleast one lower case letter';
				paswd_signuplbl.style.color = 'red';

				return false;
			} else if (regexp_one_upper_c.test(paswd_signup.value.trim()) == false) {
				email_signuplbl.innerText = '';
				paswd_signuplbl.innerText = 'password should contain atleast one upper case letter';
				paswd_signuplbl.style.color = 'red';

				return false;
			} else if (regexp_one_digit.test(paswd_signup.value.trim()) == false) {
				email_signuplbl.innerText = '';
				paswd_signuplbl.innerText = 'password should  contain atleast one digit';
				paswd_signuplbl.style.color = 'red';

				return false;
			}
		}
		if (phn_no_regexp_obj.test(phnmb_signup.value.trim()) == false) {
			pwd_indicator_signup();

			phnmb_signuplbl.innerText = 'phno should be in the correct format!';
			phnmb_signuplbl.style.color = 'red';
			return false;
		} else {
			return true;
		}
	}
}
