var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=d78785a6d83ea106897727876d2b3645').then(response => response.json()).then(data => console.log(data)) 

.catch(err => alert("Wrong Name!"))
})