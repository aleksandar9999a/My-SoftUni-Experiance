function solve() {
    let baseUrl = 'https://judgetests.firebaseio.com/schedule/';
    let id = 'depot';

    function depart() {
        $.ajax({
            url: baseUrl + id + '.json',
            method: 'GET',
            success: logStation
        })

        document.querySelector('#depart').disabled = true;
        document.querySelector('#arrive').disabled = false;
    }

    function arrive() {
        $.ajax({
            url: baseUrl + id + '.json',
            method: 'GET',
            success: nextStop
        })

    }

    function logStation(data) {
        console.log(data);
        document.querySelectorAll('.info')[0].textContent = `Next stop ${data.name}`;
    }

    function nextStop(data) {
        console.log(data);
        id = data.next;
        document.querySelectorAll('.info')[0].textContent = `Arriving at ${data.name}`;
        document.querySelector('#depart').disabled = false;
        document.querySelector('#arrive').disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();