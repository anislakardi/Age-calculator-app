const findage = async () =>{
const y=  document.getElementById("year").value;
const m=  document.getElementById("month").value;
const d=  document.getElementById("day").value;
const  t1=document.querySelector("#text1");
const  t2=document.querySelector("#text2");
const  t3=document.querySelector("#text3");
if ( m>=13 || d>=32 || d<0 || y<0 || m<0 ) {
  if(d>=32|| d<0){
  t1.innerText="Must be a vaild day";
  t1.style.color="FF5757";
  t1.style.display="block";
  document.getElementById("day").style.borderColor = "red";
  }
  if(m>=13 ||m<0){
    t2.innerText="Must be a vaild month";
    t2.style.color="FF5757";
    t2.style.display="block";
    document.getElementById("month").style.borderColor = "red";
  }
  if(y<0){
    t3.innerText="Must be a vaild year";
    t3.style.color="FF5757";
    t3.style.display="block";
    document.getElementById("year").style.borderColor = "red";
  }
  if (d<32 && d>=0) {
    t1.style.display="none";
  }
  if (m<13 &&m>=0) {
    t2.style.display="none";
  }
  if (y>=0) {
    t3.style.display="none";
  }
  return;
} 
else {
  if(d==0 && m==0 && y==0){
    return;
  }
  t1.style.display="none";
  t2.style.display="none";
  t3.style.display="none";
  document.getElementById("day").style.borderColor = "#141414";
  document.getElementById("month").style.borderColor = "#141414";
  document.getElementById("year").style.borderColor = "#141414";
var today= new Date();
let newyear = today.getFullYear();
let newmonth = today.getMonth() ;
let newday = today.getDate();
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (Number(d) > newday) {
  console.log("yes1");
  newday = newday + month[(newmonth- 1)];
  newmonth = newmonth ;
}
if (Number(m) > newmonth) {
  console.log("yes2");
  newyear = newyear - Number(1);
  newmonth = newmonth + 12;
}
newmonth = newmonth - m ;
newyear = newyear - y;
newday = newday - d ;
  document.getElementById("ye").innerHTML =newyear;
  document.getElementById("ye").style.fontStyle="italic";
  document.getElementById("mo").innerHTML =newmonth;
  document.getElementById("mo").style.fontStyle="italic";
  document.getElementById("da").innerHTML =newday;
  document.getElementById("da").style.fontStyle="italic";
  }
}

  findage();
 document.getElementById("arr").addEventListener('click', findage);
