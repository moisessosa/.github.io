/*Input requirements: "Wind Chill Temperature is officially defined for 
temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."*/
function windChill(temp, speed){
    let chill;
    if(temp <= 50 && speed >= 3){

        chill = 35.74 + (0.6215 * temp)-(35.75 * Math.pow(speed,0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        return (chill.toFixed(2));
    }else{ 
       
        return 'N/A';
    }
}
