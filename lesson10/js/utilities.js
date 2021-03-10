function sizeLabel() {
    let medium = window.matchMedia("(min-width: 32.5em)");
    let large = window.matchMedia("(min-width: 64em)");
    if (large.matches) { // If media query matches
      
      document.getElementById('label').innerHTML="Large";
    } 
  
    else if (medium.matches){
      document.getElementById('label').innerHTML="Medium";
      
    }else{
        document.getElementById('label').innerHTML="Small";

    }
  }

  function getTempAndWind(){
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4b8335036073eddbe43ccf6d59157d39&units=imperial";
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        //console.log(jsObject);
        const preston = jsObject;
        let temp = preston.main.temp;
        let wind = preston.wind.speed;
        document.getElementById('temp').textContent = temp;
        document.getElementById('speed').textContent = wind;
        document.getElementById('windchill').textContent = windChill(temp, wind);
                 

      });
    }
  