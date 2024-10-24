//WHEN CREATE ACCOUNT CLICKED
//declare default condition
document.getElementById('card-login').style.display = "block";
document.getElementById('card-register').style.display = "none";

//declare create and login button
let create = document.getElementById('create');
let login = document.getElementById('log');

//when create clicked
create.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Create button clicked");
    document.getElementById('card-login').style.display = "none";
    document.getElementById('card-register').style.display = "block";
});

//when login clicked
login.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Login button clicked");
    document.getElementById('card-login').style.display = "block";
    document.getElementById('card-register').style.display = "none";
});