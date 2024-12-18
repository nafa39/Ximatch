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
    //console.log('genderSelf:', genderSelf.value);
    //console.log('genderPartner:', genderPartner.value);
    
    if (genderSelf.value === '--Select Option--') {
        console.log('pilih jenis kelamin');
        alert("Pilih Jenis Kelamin Yang Benar!!!");
        return false;
    }
    else if (genderPartner.value === '--Select Option--'){
        console.log('pilih jenis kelamin');
        alert("Pilih Jenis Kelamin Yang Benar!!!");
        return false;
    }
    else if (zodiakPartner.value === '--Select Option--' || zodiakSelf.value === '--Select Option--'){
        console.log('pilih zodiak');
        alert("Pilih Zodiak Yang Benar!!!");
        return false;
    }
    else if (buburPartner.value === '--Select Option--' || buburSelf.value === '--Select Option--'){
        console.log('pilih bubur');
        alert("Pilih Bubur Yang Benar!!!");
        return false;
    }
    else if (lampuPartner.value === '--Select Option--' || lampuSelf.value === '--Select Option--'){
        console.log('pilih lampu');
        alert("Pilih Lampu Yang Benar!!!");
        return false;
    }
    else if (posisiPartner.value === '--Select Option--' || posisiSelf.value === '--Select Option--'){
        console.log('pilih posisi');
        alert("Pilih Posisi Yang Benar!!!");
        return false;
    }
    else if (sukaPartner.value === '--Select Option--' || sukaSelf.value === '--Select Option--'){
        console.log('pilih suka');
        alert("Pilih Kesukaan Yang Benar!!!");
        return false;
    }
    else if (wcPartner.value === '--Select Option--' || wcSelf.value === '--Select Option--'){
        console.log('pilih wc');
        alert("Pilih WC Yang Benar!!!");
        return false;
    }
    else {
        console.log('You have selected a valid option');
        return true;
    }
}

//function same gender
function sameGender(){
    if (genderPartner.value === genderSelf.value){
        alert('kata gua lu berdua mending tobat dah.. \nDOSA KOCAK!!?!!');
        return false;
    }
    return true;
}

//function result
function result(){
    let total = 5;
    if (buburPartner.value === buburSelf.value){
        total += 1;
    }else{
        total += 0;
    }
    if (lampuPartner.value === lampuSelf.value){
        total += 1;
    }else{
        total += 0;
    }
    if (posisiPartner.value === posisiSelf.value){
        total += 1;
    }else{
        total += 0;
    }
    if (sukaPartner.value === sukaSelf.value){
        total += 1;
    }else{
        total += 0;
    }
    if (wcPartner.value === wcSelf.value){
        total += 1;
    }else{
        total += 0;
    }
    console.log(`${(total/10)*100}%`);
    //show in HTML progres and text
    document.getElementById('result-text').innerHTML = `You are ${(total/10)*100}% compatible with your partner`;
    document.getElementById('result-progres').innerHTML = `${(total/10)*100}%`;
    document.getElementById('result-progres').style = `width: ${(total/10)*100}%`;
}

//declare the click button
button.addEventListener('click', (event) => {
    event.preventDefault();
    if (right()){
        if(sameGender()){
            result()
            document.getElementById('hide-result').style.display = "block";
            document.getElementById('hide').style.display = "none";
        }
    }
});