window.addEventListener("load", () => {
    let long;
    let lat;

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
          long = position.coords.longitude;
          lat = position.coords.latitude;

          const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bdfdd3fa055faf246d32497edec1a12f`
 
        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            
        })
      }
        );

    }

    else{
        h1.textContent = "Cannot work if location is not accessed";
    }
});