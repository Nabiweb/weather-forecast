const apiKey = '50389ad871e14f6e3b3b51b37416689d'; // Replace with your OpenWeatherMap API key

    function getWeather() {
      const cityInput = document.getElementById('city');
      const city = cityInput.value.trim();

      if (city === '') {
        showError('Please enter a city name');
        return;
      }

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('City not found');
          }
          return response.json();
        })
        .then(data => {
          displayWeather(data);
        })
        .catch(error => {
          showError(error.message);
        });
    }

    function displayWeather(data) {
      const weatherDiv = document.getElementById('weather');
      const errorDiv = document.getElementById('error');

      // Clear previous data
      weatherDiv.innerHTML = '';
      errorDiv.textContent = '';

      const cityName = document.createElement('h1');
      cityName.textContent = data.name;

      const temperature = document.createElement('p');
      temperature.textContent = `Temperature: ${data.main.temp}°C`;

      const description = document.createElement('p');
      description.textContent = `Description: ${data.weather[0].description}`;

      weatherDiv.appendChild(cityName);
      weatherDiv.appendChild(temperature);
      weatherDiv.appendChild(description);
    }

    function showError(message) {
      const errorDiv = document.getElementById('error');
      const weatherDiv = document.getElementById('weather');
     
    }

    //For voice manupulation
    function speaker() {
        let recog = new webkitSpeechRecognition(); // Change to SpeechRecognition
        recog.lang = "en-GB";
        
        recog.onresult = function (event) {
            console.log(event);
            document.getElementById("city").value = event.results[0][0].transcript;
        };
        
        recog.start();
    }
    //For Windows onload Notice

    window.onload = function () {
        showPopup();
    };
  
      function showPopup() {
        const overlay = document.getElementById('overlay');
        const popup = document.getElementById('popup');
  
        overlay.style.display = 'block';
        popup.style.display = 'block';
    }
  
      function closePopup() {
        const overlay = document.getElementById('overlay');
        const popup = document.getElementById('popup');
  
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }