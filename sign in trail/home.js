const homepage = '/Users/moustafaelboghdady/Downloads/First%20site/home.html'
const enterdata = '/Users/moustafaelboghdady/Downloads/First%20site/enterdata.html'

onload =function(){
   if(localStorage.firstname == undefined || localStorage.secondname == undefined || localStorage.phonenumber == undefined || localStorage.age == undefined || 
    localStorage.firstname == "" || localStorage.secondname == "" || localStorage.phonenumber == "" || localStorage.age == ""){
    this.location.pathname = enterdata

   }else{
    let clear = this.document.getElementById('clear');
    let nameT = this.document.getElementById('nameT');
    let phonenumberT = this.document.getElementById('phonenumberT');
    let ageT = this.document.getElementById('ageT');
    let isAdultT = this.document.getElementById('isAdultT');
    let screenHight = this.document.getElementById('screenHight');
    let screenWidth = this.document.getElementById('screenWidth');
    let avaliableScreenHight = this.document.getElementById('avaliableScreenHight');
    let avaliableScreenWidth = this.document.getElementById('avaliableScreenWidth');
    let screenTypeT = this.document.getElementById('screenTypeT');
    let phonenumber = this.localStorage.phonenumber
    let age = this.localStorage.age
    let isAdult = function(){
        if(localStorage.age >= 18){
            return 'You are adult'
        }else{
            return 'You are not adult'
        }
    }
  nameT.innerText = `Welcome, ${this.localStorage.firstname} ${this.localStorage.secondname}` ;
  phonenumberT.innerText = `Your phonenumber is : ${phonenumber}`
  ageT.innerText =  `Your age is : ${age}`;
  isAdultT.innerText = isAdult();
  screenHight.innerText = `Your screen hight is : ${this.screen.height}`
  screenWidth.innerText = `Your screen width is : ${this.screen.width}`
  avaliableScreenHight.innerText = `Your screen avaliable hight is : ${this.screen.availHeight}`
  avaliableScreenWidth.innerText = `Your screen avaliable width is : ${this.screen.availWidth}`
  screenTypeT.innerText = `Your screen type is : ${this.screen.orientation.type}`
    clear.onclick = function(){
        localStorage.clear();
        location.reload();
    }

}

}