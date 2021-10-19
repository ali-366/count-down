// get elements froom html
var year = document.getElementById('year'); 

var days = document.getElementById('days'); 
var hours = document.getElementById('hours'); 
var minutes = document.getElementById('minutes'); 
var seconds = document.getElementById('seconds'); 

var currentYear = new Date().getFullYear();

var nextYear = new Date(`may 08 ${currentYear + 1} 00:00:00`);


function countdown()
{
    var currentTime = new Date();
    var diff = nextYear - currentTime;
    var s = Math.floor(diff/1000) % 60;
    var m = Math.floor(diff/1000/60) % 60; 
    var h = Math.floor(diff/1000/60/60) % 24;
    var d = Math.floor(diff/1000/60/60/24);
    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
    days.innerHTML = d;
    months.innerHTML = m;

    

}
setInterval(countdown,1000);

year.innerHTML = nextYear.getFullYear();