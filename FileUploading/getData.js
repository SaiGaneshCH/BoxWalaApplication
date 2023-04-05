// api url
const api_url =
	"https://zvh7aicfxg.execute-api.us-east-2.amazonaws.com/Dev/cust";

	var data;
	var loggedUser;
	var uID;

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
	console.log(data);
		if(data['id']===id && data['Password']===pwd){
			location.href="/home.html"
			loggedUser = data
			// window.location="/home.html"
		}
		else{
			let  warning =`<div class="alert alert-dismissible alert-primary">
			<button type="button" role="alert" class="btn-close" data-bs-dismiss="alert" onclick="onButtonPress()"></button>
			
			<strong>Oh snap!</strong> Change a few things up and try submitting again.
		  </div>`;
			document.getElementById("login").innerHTML = warning;
		}
		// console.log(data['id'],id,pwd);
	
}

function logout(){
	loggedUser = null
	uID = null
	window.location = "login.html"
}

function checkId(id){
	uid = JSON.stringify({"id":id});
	for(let r of data){
		if(r['id']===id){
			uID = r['id']
			loggedUser = r['Name'];
			// loggedUser = "Ganesh";
			// document.getElementById("user").innerHTML += loggedUser;
			sessionStorage.setItem("user",loggedUser);
			sessionStorage.setItem("uID",uID);
			// window.location = "http://file-uploader-30199.s3-website.us-east-2.amazonaws.com/index.html"
			window.location = "/index.html"
		}
		else{
			let  warning =`<div class="alert alert-dismissible alert-primary">
			<button type="button" role="alert" class="btn-close" data-bs-dismiss="alert" onclick="onButtonPress()"></button>
			
			<strong>Oh snap!</strong>It seems there is no user with the ID.
		  </div>`;
			// document.getElementById("Uid").innerHTML += warning;
		}
	}

}
// function uploader(id){
function uploader(){
uID = sessionStorage.getItem("uID");
console.log(uID);

// uID = id

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fileInput = document.querySelector('input[type="file"]');
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async () => {
	const base64Data = reader.result.split(',')[1];
	const response = await fetch('https://nk31rrtk7c.execute-api.us-east-2.amazonaws.com/test/demo', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({ userID:uID,data: base64Data, fileName: file.name })
	}).then(response => response.text())
	 .then(result => location.href="stored.html");
	const result = await response.json();
	console.log(result);
  };
  reader.onerror = (error) => {
	console.error(error);
  };
});
}