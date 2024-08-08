let yearI = document.getElementById("year");
let monthI = document.getElementById("month");
let dayI = document.getElementById("day");
let CcodeI = document.getElementById("Ccode");

function run(){
let year = yearI.value;
let month = monthI.value;
let day = dayI.value;
let Ccode = CcodeI.value ;
if(year>=1900 && year<2000 ) {
    var FPC = "2" ;
}else{
    var FPC = "3" ;
}
if(day.length == 1){
    var DLV = "0" + day

}else {
    var DLV = day
}

if(month.length == 1){
    var MLV = "0" + month

}else {
    var MLV = month
}
if(Ccode.length == 1){
    var CCLV = "0" + Ccode

}else {
    var CCLV = Ccode
}

var code = FPC + year[2] +  year[3] + MLV + DLV + CCLV
    console.log(code);

  document.write(`<h2> Your code is : ${code}</h2>`)  ;
}