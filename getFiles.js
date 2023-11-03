// api url
const api_url =
	"https://yhkehljqbi.execute-api.us-east-2.amazonaws.com/test/demo";

	var buckObjs;
	// var loggedUser;
	// var ProfileId;
	// var ProfileRole;
	// var ProfileCompany;
    

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	window.buckObjs = await response.json();
	console.log(buckObjs);
	if (response) {
		hideloader();
	}
	// showData(data);
}
// // Calling that async function
getapi(api_url);



function logout(){
	loggedUser = null
	window.location = "login.html"
}

let tab = `<tr>
<th>Your Files are</th>
</tr>`
function showData(data){
    // buckObjs = JSON.parse(data);
    console.log(data);
    
    // console.log(buckObjs);
   
    // location.href="/myFiles.html"; 
    // for (let i = 0; i < buckObjs.length; i++) {
    //     console.log(buckObjs[i]);
    //     tab += `<tr>
    //     <td>${buckObjs[i]}</td>
    // </tr>`;
    // }
    // document.getElementById("files").innerHTML += tab;
           

}

