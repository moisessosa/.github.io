
function getEvents(town){
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        const towns = jsonObject['towns'];
        
        for (let i = 0; i < towns.length; i++ ) {
            if (towns[i].name == town){

                let events = '<br>';
                for(let j = 0; j < towns[i].events.length; j++){
                   events += towns[i].events[j] + '<br>'+ '<br>';
                }
                
                document.getElementById('events').innerHTML = events;
                    
               
        }
        }
    });
};