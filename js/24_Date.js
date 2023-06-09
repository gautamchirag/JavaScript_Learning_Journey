var date,time, hh, mm, ss, alarm;
var activeState = false;
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var secondes = document.getElementById("seconds");
var session = document.getElementById("ampm");
sound = new Audio("Binte Dil Neeti Mohan.mp3")
//loop alarm
sound.loop  = true;

// display current time
function displayCurrentTime(){
    var dateTime = new Date();
    date = dateTime.toLocaleDateString();
    time = dateTime.toLocaleTimeString();
    document.getElementById("date").textContent =`Date: ${date}` ;
    document.getElementById("clock").textContent = `Time: ${time}`;
    if(time===alarm){
        document.getElementById("snooze").style.display = "inline";
        sound.play();
    }
    // snooze button
    setTimeout(displayCurrentTime,1000);
     
}
displayCurrentTime();

// add option

function addMinSec(id){
    var select = document.getElementById(id);
    var range = 59;

    for(let i = 0; i<=range;i++){
        select.options[select.options.length] = new Option(i<10?"0"+i:i);
    }
}
function addHours(id){
    var select = document.getElementById(id);
    var range = 12;

    for(let i = 0; i<=range;i++){
        select.options[select.options.length] = new Option(i<10?"0"+i:i);
    }
}
addMinSec("minutes");
addMinSec("seconds")
addHours("hours")


//set and clear alarm
function createAlarm(){
    console.log("Seting Alarm is called");
        hours.disabled = true;
        minutes.disabled = true;
        secondes.disabled = true;
        session.disabled = true;
        alarm =`${hours.value}:${minutes.value}:${secondes.value} ${session.value}`;
    console.log("Alarm set to "+ alarm); 
    document.getElementById("resetAlarm").style.display = "inline";
    activeState = true;
    
}

function resetAlarm(){
    
        console.log("Reset Alarm is called")
        hours.disabled = false
        minutes.disabled = false;
        secondes.disabled = false;
        session.disabled = false;

        sound.pause();
        alarm = "00:00:00 AM";
        document.getElementById("snooze").style.display = "none";
        document.getElementById("resetAlarm").style.display = "none";
        activeState = 0;


}

function snooze(){
    console.log("Snooze Alram is called");
        hh = time.slice(0,2);
        mm = time.slice(3,5);
        if(mm>=55){
            minutes.value = "0"+(5-(60-parseInt(mm)));
            hours.value  = "0" +(parseInt(hh) + 1);
        }
        else{
            if(parseInt(mm)+5<9){
                minutes.value = "0"+(parseInt(mm)+5);
            }
            else{
                minutes.value= ""+(parseInt(mm)+5);
            }
        }
        console.log(hours.value,minutes.value)

        resetAlarm();
        createAlarm();      

}
