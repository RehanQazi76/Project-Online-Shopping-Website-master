function ValidateFname()  
{  
	var inputtxt = document.forms["signupForm"]["fname"].value;
	var letters = /^[A-Za-z]+$/;  
	if(inputtxt.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert("Enter only Letters!"); 
		document.signupForm.fname.focus();  
		return false;  
	}  
} 

function ValidateLname()  
{  
	var inputtxt = document.forms["signupForm"]["lname"].value;
	var letters = /^[A-Za-z]+$/;  
	if(inputtxt.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert("Enter only Letters!"); 
		document.signupForm.Lname.focus();  
		return false;  
	}  
} 

function ValidateEmail()  
{  
	var checkmail = document.forms["signupForm"]["email"].value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(checkmail.match(mailformat))  
	{  
		document.myForm.emailAddr.focus();  
		return true;  
	}  
	else  
	{  
		alert("Invalid Email Address!");  
		document.signupForm.email.focus();  
		return false;  
	}  
}  
// validate phone number 
