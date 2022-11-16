
let btn = document.getElementById('btn');
btn.addEventListener("click", ageCalculation);


function ageCalculation(){
let inputDate = document.getElementById('date').value;
let inputMonth = document.getElementById('month').value;
let inputYear = document.getElementById('year').value;
let inputName = document.getElementById('userName').value;

let currentDate = new Date().getDate();
let currentMonth = 1+ new Date().getMonth();
let currentYear = new Date().getFullYear();
let months =[31,28,31,30,31,30,31,31,30,31,30,31];

if(currentDate < inputDate){
    currentDate = currentDate + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
}
if(currentMonth < inputMonth){
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
}
 
let calculatedDate = currentDate - inputDate;
let calculatedMonth = currentMonth - inputMonth;
let calculatedYear = currentYear - inputYear;

let calculatedAge = document.getElementById('down');
calculatedAge.innerHTML = "Hi " + inputName + "<br> " +"Your are " + calculatedYear + " Years " + calculatedMonth + " Months " + calculatedDate + " Days older as of today"
}