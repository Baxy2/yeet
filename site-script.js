console.log('Yah Yeet!');

var firstBox = document.getElementById('first-box');
console.log(firstBox);

firstBox.innerHTML = 'Yeah'
firstBox.style.borderColor = 'green'
firstBox.style.backgroundColor = 'green'

var secondBox = document.getElementById('second-box');
console.log(secondBox);

secondBox.innerHTML = 'The'
secondBox.style.borderColor = 'green'
secondBox.style.backgroundColor = 'green'

var thirdBox = document.getElementById('third-box');
console.log(thirdBox);

thirdBox.innerHTML = 'Lewis'
thirdBox.style.borderColor = 'green'
thirdBox.style.backgroundColor = 'green'

function testFunction(){
console.log('testFunction did work');
firstBox.style.backgroundColor = 'lightblue'
}

firstBox.addEventListener('click', testFunction);

function onMouseOver(){
secondBox.style.backgroundColor = 'lightblue'
}

secondBox.addEventListener('mouseover', onMouseOver);

function onMouseOut(){
secondBox.style.backgroundColor = 'green'
}

secondBox.addEventListener('mouseout', onMouseOut);

var listOfItems = document.getElementsByClassName('item');
console.log(listOfItems);

function crossOutItem(event) {
    var item = event.target;

if(item.style.textDecoration == 'line-through') {
    item.style.textDecoration = 'none';
} else {
    item.style.textDecoration = 'line-through';
}
}

for(var count = 0; count < listOfItems.length; count++){
    console.log('loop ran', count);
    var item = listOfItems[count];
    console.log(item);
    item.addEventListener('click', crossOutItem);
}

var timeBetweenUpdates = 1000;

var hoursBox = document.getElementById('hours');
var minutesBox = document.getElementById('minutes');
var secondsBox = document.getElementById('seconds');

function displayTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

hoursBox.innerHTML = hours;
minutesBox.innerHTML = minutes;
secondsBox.innerHTML = seconds;

    console.log('the time is...', date);
    console.log(hours, minutes, seconds);
}

var clockTimer = setInterval(displayTime, timeBetweenUpdates);
