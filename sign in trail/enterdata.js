const homepage = '/Users/moustafaelboghdady/Downloads/First%20site/home.html'

onload =function(){
   if(localStorage.firstname == undefined || localStorage.secondname == undefined || localStorage.phonenumber == undefined || localStorage.age == undefined || 
    localStorage.firstname == "" || localStorage.secondname == "" || localStorage.phonenumber == "" || localStorage.age == ""){
let firastnameI = this.document.getElementById('firstnameI');
let secondnameI = this.document.getElementById('secondnameI');
let phonenumberI = this.document.getElementById('phonenumberI');
let ageI = this.document.getElementById('ageI');
let submit = this.document.getElementById('submit');

submit.onclick = function(){
localStorage.firstname= firastnameI.value;
localStorage.secondname= secondnameI.value;
localStorage.phonenumber = phonenumberI.value;
localStorage.age=ageI.value;
location.reload();
}

   }else{
    this.location.pathname = homepage

}

}