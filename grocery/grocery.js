function displayDate(){

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
//document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
document.getElementById("date").innerHTML = n.toDateString() + " "+ n.toLocaleTimeString();

}


function saveUserData(){
	
	localStorage.setItem("emailId",document.forms["SignupForm"]["email"].value);
	localStorage.setItem("name", document.forms["SignupForm"]["name"].value);
	localStorage.setItem("pwdID", document.forms["SignupForm"]["pswd"].value);
	
	alert("user data Saved to LocalStorage "+document.forms["SignupForm"]["email"].value)
}

function validateSignDate(){
   let x = document.forms["LoginForm"]["email"].value;
   let y = document.forms["LoginForm"]["pswd"].value;
  if (x == localStorage.getItem("emailId") && localStorage.getItem("pwdID")) {
    alert("Login Succesfull! ");
  }else {
	  alert("User not found. Click to Register.");
  }
 
	
}




$(document).ready( function () {
const txt = '{"name":"John", "age":30, "city":"New York"}'
const prices = '[{"item":"Apple", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.23","wholefooods":"2.35"},{"item":"Grapes", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.23","wholefooods":"2.35"},{"item":"Grapes", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.23","wholefooods":"2.35"},{"item":"Grapes", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.54","wholefooods":"2.35"},{"item":"Grapes", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.23","wholefooods":"2.35"},{"item":"Apple", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.23","wholefooods":"2.35"},{"item":"Grapes", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.23","wholefooods":"2.35"},{"item":"Grapes", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.23","wholefooods":"2.35"},{"item":"Grapes", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.54","wholefooods":"2.35"},{"item":"Grapes", "target":"1.25", "walmart":"1.32","amazon":"1.35","safeway":"1.35","savemart":"1.23","wholefooods":"2.36"}]'
const obj = JSON.parse(prices);
//console.log(obj)
//document.getElementById("demo").innerHTML = obj.item + ", " + obj.target + ", " + obj.walmart;
renderDataInTheTable(obj);
});

 function renderDataInTheTable(obj) {
            const mytable = document.getElementById("myTable");
            obj.forEach(item => {
				
                let newRow = document.createElement("tr");
                Object.values(item).forEach((value) => {
                    let cell = document.createElement("td");
                    cell.innerText = value;
                    newRow.appendChild(cell);
                })
		
                mytable.appendChild(newRow);
            });
        }




 /*fetch('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                return response.json();
            }).then(function (apiJsonData) {
               // console.log(apiJsonData);
                renderDataInTheTable(apiJsonData);
            })

        function renderDataInTheTable(todos) {
            const mytable = document.getElementById("html-data-table");
            todos.forEach(todo => {
                let newRow = document.createElement("tr");
                Object.values(todo).forEach((value) => {
                    let cell = document.createElement("td");
                    cell.innerText = value;
                    newRow.appendChild(cell);
                })
                mytable.appendChild(newRow);
            });
        }

  const list = document.createDocumentFragment();
  const url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;
//console.log(authors)
      authors.map(function(author) {
        let li = document.createElement('li');		
        let name = document.createElement('h2');
        let email = document.createElement('h6');
		 let username = document.createElement('h6');
        name.innerHTML = `${author.name}`;
        email.innerHTML = `${author.email}`;
		username.innerHTML = `${author.username}`
		li.appendChild(username);
        li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li);
		const ul = document.getElementById('authors');
		//console.log(ul)
		ul.appendChild(list);
      });
    }).catch(function(error) {
      console.log(error);
    });*/
	
	
	//ul.innerHTML = 'test';
	

  



