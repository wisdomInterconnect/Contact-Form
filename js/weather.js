class Weather{
    constructor(city, state){        
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather(){  
        const weatherList = [];                 
        const response = await fetch('js/api.json');        
        const responseData = await response.json();         
        responseData.forEach(function(data){
            weatherList.push(data);
        });
        for(var i = 0; i < weatherList.length; i++){
            if(weatherList[i].city === "Makurdi" && weatherList[i].state === "Benue"){
                return weatherList[i];
            }
            else if(weatherList[i].city === this.city && weatherList[i].state === this.state){
                return weatherList[i]; 
            }
            else{
                return alert('State or city not found !');
            }
        }
    }

    // change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}