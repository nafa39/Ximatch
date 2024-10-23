//WHEN CLICK TAKE A TEST WILL BE DIRECTED TO FORM

//default hide test
document.getElementById('hide').style.display = "none";
document.getElementById('hide-result').style.display = "none";
document.getElementById('body-services').style.display = "block";

//declare variabel test
let test = document.getElementById('button-test');

//declare the function
test.addEventListener('click', (event)=>{
    event.preventDefault();
    document.getElementById('hide').style.display = "block";
    document.getElementById('body-services').style.display = "none";
})

//WHEN BUTTON SUBMIT CLICKED WILL BE SHOW THE RESULT

//declare variable button
let button = document.getElementById('submit');

//declare variable gender-self
let genderSelf = document.getElementById('gender-self');
let genderPartner = document.getElementById('gender-partner');


function right() {
    console.log('genderSelf:', genderSelf.value);
    console.log('genderPartner:', genderPartner.value);
    
    if (genderPartner.value.trim() === 'Jenis Kelamin' || genderSelf.value.trim() === 'Jenis Kelamin') {
        console.log('choose the right answer');
        alert("Choose the right answer!!!");
    } else {
        console.log('You have selected a valid option');
    }
}


//declare the function
button.addEventListener('click', (event) => {
    event.preventDefault();
    right();
    console.log(genderPartner.value);
})