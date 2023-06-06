let forml = document.querySelector("#forml");
forml.addEventListener('submit',resdata);

function resdata(e){
	e.preventDefault();
	let number = document.getElementById("number").value;
	let passwordl = document.getElementById("passwordl").value;
	
	let number_1 = localStorage.getItem('number');
	let password_1 = localStorage.getItem('Password1');
	
	if(number == number_1 && passwordl == password_1){
		alert("success");
	}
	else{
		alert("Correct Open Page");
	}
}