class Storage{
    constructor(){
        this.city;
        this.state;
        this.defaultCity = 'Ajah';
        this.defaultState = 'Lagos';
    }
    getLocation(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;            
        }
        else{
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('state') === null){
            this.state = this.defaultState;            
        }
        else{
            this.state = localStorage.getItem('state');
        }   
        return this.city, this.state;
    }

    setLocationData(city, state){
        localStorage.setItem('city',city);
        localStorage.setItem('state',state);
    }
}