function solve() {
    let baseUrl = 'https://judgetests.firebaseio.com/schedule/';
    let id = 'depot';
    let currentReq = '';

    function depart() {
        $.ajax({
            url: baseUrl + id + '.json',
            method: 'GET',
            success: logStation
        })

        function logStation(data) {
            currentReq = data;
            id = currentReq.next;
            document.querySelectorAll('.info')[0].textContent = `Next stop ${data.name}`;
        }

        switchBtn('#arrive', '#depart');
    }

    function arrive() {
        document.querySelectorAll('.info')[0].textContent = `Arriving at ${currentReq.name}`;
        switchBtn('#depart', '#arrive');
    }

    function switchBtn(disable, enable) {
        document.querySelector(enable).disabled = true;
        document.querySelector(disable).disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();