const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherError = document.querySelector('.weather-error');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const myURL = '34f4903aa414d87425ca66afa2dc3f77';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myURL}`)
        .then(response => response.json()).then(json =>
            {
                console.log(json);
                const img = document.querySelector('.weather-box img');
                const wind = document.querySelector('.weather-details .wind span');
                const temprature = document.querySelector('.weather-box .temprature');
                const description = document.querySelector('.weather-box .description');
                const humidity = document.querySelector('.weather-details .humidity span');
                const country = document.querySelector('.country-space .country');
                const temp_min = document.querySelector('.t-min');
                const temp_max = document.querySelector('.t-max');

                img.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@4x.png`

                humidity.innerHTML = `${json.main.humidity}%`;
                wind.innerHTML = `${json.wind.speed}Km/h`;
                description.innerHTML = `${json.weather[0].description}`;
                temprature.innerHTML = `${parseInt(json.main.temp)}<span>C°</span>`;
                country.innerHTML = `<span><b>Country :</b></span>${json.sys.country}`
                temp_min.innerHTML = `<span><b>min :</b> </span>${json.main.temp_min}°`;
                temp_max.innerHTML = `<span><b>max : </b></span>${json.main.temp_max}°`;

            }

        )

})

