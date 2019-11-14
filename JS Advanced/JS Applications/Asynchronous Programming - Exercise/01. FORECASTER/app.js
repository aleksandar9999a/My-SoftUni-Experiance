import { getRequester } from './requester.js';
const BASE_URL = 'https://judgetests.firebaseio.com/';

function handleEvent(e) {
    if (typeof action[e.target.id] === 'function') {
        action[e.target.id]();
    }
}

function searchCode(locationData) {
    const input = document.getElementById('location');
    let currData = locationData.find(x => x.name = input.value);

    if (!currData) {
        throw new Error('Location does not exist');
    }

    return currData;
}

function createElement(type, classValue, content) {
    let e = document.createElement(type);
    e.className = classValue;
    
    if (typeof content === "string") {
        e.innerHTML = content;
     }
     if (typeof content === "object") {
        e.appendChild(content);
     }

    return e;
}

const symbols = {
    'Sunny': '&#x2600;',
    'Partly sunny': '&#x26C5;',
    'Overcast': '&#x2601;',
    'Rain': '&#x2614;',
    'Degrees': '&#176;'
}

function getById(id) {
    return document.getElementById(id);
}

function appendElements(parent, e) {
    if (Array.isArray(e)) {
        e.forEach(x => parent.appendChild(x));
    }else{
        parent.appendChild(e)
    }
}

function displayTodayWeather(data, appendDiv) {
    let forecastDiv = createElement('div', 'forecast');
    let condSymbolSpan = createElement('span', 'condition symbol', symbols[data.forecast.condition]);
    let condSpan = createElement('span', 'condition');
    let span1 = createElement('span', 'forecast-data', data.name);
    let span2 = createElement('span', 'forecast-data', `${data.forecast.high}/${data.forecast.low}`);
    let span3 = createElement('span', 'forecast-data', data.forecast.condition);

    appendElements(condSpan, [span1, span2, span3]);
    appendElements(forecastDiv, [condSymbolSpan, condSpan]);
    appendDiv.appendChild(forecastDiv);

    console.log(data);
}

function displayUpcomingWeather(data) {
    console.log(data);
}

function showForecast() {
    getById('forecast').style.display = 'block';
}
const action = {
    submit: async function () {
        let currData = searchCode(await getLocation());
        let todayWeather = await getTodayWeather.bind(undefined, currData.code)()();
        let upcomingWeather = await getUpcomingWeather.bind(undefined, currData.code)()();

        showForecast()
        displayTodayWeather(todayWeather, getById('current'));
        displayUpcomingWeather(upcomingWeather);
    }
}

function makeURL(extension) {
    return BASE_URL + extension;
}

const getLocation = getRequester.bind(undefined, undefined, undefined, makeURL('locations.json'));
const getTodayWeather = code => getRequester.bind(undefined, undefined, undefined, makeURL(`forecast/today/${code}.json`));
const getUpcomingWeather = code => getRequester.bind(undefined, undefined, undefined, makeURL(`forecast/upcoming/${code}.json`));

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', handleEvent)
})