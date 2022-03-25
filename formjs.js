
function display(id){
	document.getElementById('display').innerText = document.getElementById(id).value;
}

function submit(){
	var fname = document.getElementById('fname').value;
		var lname = document.getElementById('lname').value;
					
					document.getElementById('values').innerHTML = "Hello "+fname+" "+lname+"...!";
}