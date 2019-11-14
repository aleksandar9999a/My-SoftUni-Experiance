import { getRequester } from './requester.js';
const BASE_URL = 'https://judgetests.firebaseio.com/';

function handleEvent(e) {
    if (typeof action[e.target.id] === 'function') {
        action[e.target.id]()
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

function displayTodayWeather(data) {
    console.log(data);
    
}

function displayUpcomingWeather(data) {
    console.log(data);
}

const action = {
    submit: async function () {
        let currData = searchCode(await getLocation());
        let todayWeather = await getTodayWeather.bind(undefined, currData.code)()();
        let upcomingWeather = await getUpcomingWeather.bind(undefined, currData.code)()();
        displayTodayWeather(todayWeather);
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