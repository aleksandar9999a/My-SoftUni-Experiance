function attachEventsListeners() {
    let div = document.getElementsByTagName('div');
    
    for (let i = 0; i < div.length; i++) {
        let inputType = div[i].getElementsByTagName('input')[1];
        inputType.addEventListener('click', getConverter);
    }

    function getConverter() {
        if (this.id === 'daysBtn') {
            hoursConvert(document.getElementById('days').value);
        }
        else if (this.id === 'hoursBtn') {
            minutesConvert(document.getElementById('hours').value);
        }
        else if (this.id === 'minutesBtn') {
            secondsConvert(document.getElementById('minutes').value);
        }
        else if (this.id === 'secondsBtn') {
            dayConvert(document.getElementById('seconds').value);
        }
    }
    
    let stopper = 0;

    const dayConvert = (seconds) => {
        let day = seconds / (60*60*24);
        document.getElementById('days').value = day;
        
        if (stopper < 2) {
            hoursConvert(day);
        }
        stopper++;
    }
    const hoursConvert = (day) => {
        let hours = day * 24;
        document.getElementById('hours').value = hours;
        minutesConvert(hours)
    }
    const minutesConvert = (hours) => {
        let min = hours * 60;
        document.getElementById('minutes').value = min;
        secondsConvert(min)
    }
    const secondsConvert = (minutes) => {
        let seconds = minutes * 60;
        document.getElementById('seconds').value = seconds;
        dayConvert(seconds)
    }
}