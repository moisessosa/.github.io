function getWeather(){
    const requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-21.2547&lon=48.3222&appid=4b8335036073eddbe43ccf6d59157d39&units=imperial&exclude=hourly';
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        const weather = jsonObject;
       
        document.getElementById('temp').innerHTML = weather.current.temp;
        document.getElementById('humedity').innerHTML = weather.current.humidity;
        document.getElementById('current').innerHTML =weather.current.weather[0].description;
        console.log(weather);//

        const iconsrc1 = 'https://openweathermap.org/img/w/' + weather.daily[0].weather[0].icon + '.png'; 
        
        document.getElementById('icon1').setAttribute('src', iconsrc1);
        document.getElementById('day1').innerHTML = weather.daily[0].temp.day;

        const iconsrc2 = 'https://openweathermap.org/img/w/' + weather.daily[1].weather[0].icon + '.png'; 
        
        document.getElementById('icon2').setAttribute('src', iconsrc2);
        document.getElementById('day2').innerHTML = weather.daily[1].temp.day;

        const iconsrc3 = 'https://openweathermap.org/img/w/' + weather.daily[2].weather[0].icon + '.png'; 
        
        document.getElementById('icon3').setAttribute('src', iconsrc3);
        document.getElementById('day3').innerHTML = weather.daily[2].temp.day;
        const dia = new Date().getDay();//dia actual en numero
        
      
            document.getElementById('01').innerHTML= dayName(dia + 1);
            document.getElementById('02').innerHTML= dayName(dia + 2);
            document.getElementById('03').innerHTML= dayName(dia + 3);
       
    });
};

function dayName(dia){

    const days = [
    'Sun.',
    'Mon.',
    'Tue.',
    'Wen.',//3
    'Thu.',//4
    'Fri.',
    'Sat.',//añadi mas dias para cuando la fecha sea
    'Sun.',//superior a jueves
    'Mon.',
    'Tue.',
    'Wen.',//3
    
    
    ];
  
    const nameDay = days[dia];         

    return nameDay;
}