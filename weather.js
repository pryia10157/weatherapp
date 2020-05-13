let input = document.getElementById('search');
let script = document.getElementById('weather');
let city1 = document.getElementById('city');
let temp1 = document.getElementById('temperature');
let humid = document.getElementById('hum');
let d = document.getElementById('date');
var x=localStorage.getItem('k'); // gets key from key.js and stores it in variable x
input.addEventListener('keydown',function(){
  if (event.key == "Enter"){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+x)
    .then(Response => Response.json())
    .then(data => {
        let n = data['name'];                             // gets city name and loads it into n
        let da = data['weather'][0]['description'];       // gets weather description
        let T = data['main']['temp'];                     // gets weather temp
        let h = data['main']['humidity'];                 // gets humidity
        let dat = data['dt'];                             // gets date
        temp1.innerHTML = Math.round(T - 273.15)+"°c";    
        city1.innerHTML = n;                             // returns the html content 
        script.innerHTML = da;                            
        hum.innerHTML = h+"% humidity";                   
        d.innerHTML = Date(dat);                          
        input.value ="";
      })
    .catch(err =>("Error!!!!!"));
  }
 });

