// api url
const api_url =
	"https://zvh7aicfxg.execute-api.us-east-2.amazonaws.com/Dev/cust";

	var data;
	var loggedUser;
	var person;
	var ProfileId;
	var ProfileRole;
	var ProfileCompany;

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	window.data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	// show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

function onButtonPress() {
    $('.alert').alert('close')
}

function checkLogin(id,pwd){
	logData = JSON.stringify({"id":id,"pwd":pwd});
	// console.log(data);
	for(let r of data){
		if(r['id']===id && r['Password']===pwd){
			location.href="/home.html";
			ProfileId = r['id'];
			ProfileRole = r['Role'];
			loggedUser = r['Name'];
			ProfileCompany = r['Company'];
			
			console.log(r);
			// window.location="/home.html";
			sessionStorage.setItem("ProfileId",ProfileId);
			sessionStorage.setItem("ProfileRole",ProfileRole);
			sessionStorage.setItem("ProfileCompany",ProfileCompany);
			sessionStorage.setItem("user",loggedUser);

		}
		else{
			let  warning =`<div class="alert alert-dismissible alert-primary">
			<button type="button" role="alert" class="btn-close" data-bs-dismiss="alert" onclick="onButtonPress()"></button>
			
			<strong>Oh snap!</strong> Change a few things up and try submitting again.
		  </div>`;
			document.getElementById("login").innerHTML = warning;
		}

	}
	
}
function logout(){
	loggedUser = null
	window.location = "/index.html"
}
var loggedIn = 0;
function checkId(id){
	uid = JSON.stringify({"id":id});
	for(let i of data){
		if(i['id']===id){
			person = i['id'];
			// getFiles(personID);
			sessionStorage.setItem("person",person);

			window.location = "/myFiles.html"
			
		}
		else{
			let  warning =`<div class="alert alert-dismissible alert-primary">
			<button type="button" role="alert" class="btn-close" data-bs-dismiss="alert" onclick="onButtonPress()"></button>
			
			<strong>Oh snap!</strong>It seems there is no user with the ID.
		  </div>`;
			// document.getElementById("Uid").innerHTML = warning;
		}
	}

}

