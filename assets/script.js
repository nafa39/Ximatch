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

//declare variable gender-self and gender-partner
let genderSelf = document.getElementById('gender-self');
let genderPartner = document.getElementById('gender-partner');

//declare zodiak
let zodiakSelf = document.getElementById('zodiak-self');
let zodiakPartner = document.getElementById('zodiak-partner');

//declare bubur
let buburSelf = document.getElementById('bubur-self');
let buburPartner = document.getElementById('bubur-partner');

//declare lampu
let lampuSelf = document.getElementById('lampu-self');
let lampuPartner = document.getElementById('lampu-partner');

//declare posisi
let posisiSelf = document.getElementById('posisi-self');
let posisiPartner = document.getElementById('posisi-partner');

//declare suka
let sukaSelf = document.getElementById('suka-self');
let sukaPartner = document.getElementById('suka-partner');

//declare wc
let wcSelf = document.getElementById('wc-self');
let wcPartner = document.getElementById('wc-partner');

//function pilihan yang benar
function right() {
    console.log('genderSelf:', genderSelf.value);
    console.log('genderPartner:', genderPartner.value);
    
    if (genderPartner.value.trim() === 'Jenis Kelamin' || genderSelf.value.trim() === 'Jenis Kelamin') {
        console.log('pilih jenis kelamin');
        alert("Pilih Jenis Kelamin Yang Benar!!!");
    }
    else if (zodiakPartner.value.trim() === 'Zodiak' || zodiakSelf.value.trim() === 'Zodiak'){
        console.log('pilih zodiak');
        alert("Pilih Zodiak Yang Benar!!!");
    }
    else if (buburPartner.value.trim() === 'Bubur' || buburSelf.value.trim() === 'Bubur'){
        console.log('pilih bubur');
        alert("Pilih Bubur Yang Benar!!!");
    }
    else if (lampuPartner.value.trim() === 'Lampu' || lampuSelf.value.trim() === 'Lampu'){
        console.log('pilih lampu');
        alert("Pilih Lampu Yang Benar!!!");
    }
    else if (posisiPartner.value.trim() === 'Posisi' || posisiSelf.value.trim() === 'Posisi'){
        console.log('pilih posisi');
        alert("Pilih Posisi Yang Benar!!!");
    }
    else if (sukaPartner.value.trim() === 'Suka Ini' || sukaSelf.value.trim() === 'Suka Ini'){
        console.log('pilih suka');
        alert("Pilih Kesukaan Yang Benar!!!");
    }
    else if (wcPartner.value.trim() === 'Wc' || wcSelf.value.trim() === 'Wc'){
        console.log('pilih wc');
        alert("Pilih WC Yang Benar!!!");
    }
    else {
        console.log('You have selected a valid option');
    }
}

function sameGender(){
    if (genderPartner.value === genderSelf.value){
        alert('kata gua lu berdua mending tobat dah.. \nDOSA KOCAK!!?!!');
    }
}

//declare the click button
button.addEventListener('click', (event) => {
    event.preventDefault();
    right();
    sameGender();
    console.log(genderPartner.value);
})