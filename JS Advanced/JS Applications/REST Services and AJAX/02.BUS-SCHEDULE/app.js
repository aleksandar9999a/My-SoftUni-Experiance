function solve() {
    let state = {
        name: '',
        next: 'depot'
    }

    function depart() {
        const BASE_URL = `https://judgetests.firebaseio.com/schedule/${state.next}.json`;
        const resultDiv = document.getElementsByClassName('info')[0];
        const departBtn = document.getElementById('depart');
        const arriveBtn = document.getElementById('arrive');

        fetch(BASE_URL)
            .then(parseResult)
            .then(({ name, next }) => {
                setState(name, next);
                showResult(resultDiv, `Next stop ${state.name}`);
                buttonActivation(departBtn, true);
                buttonActivation(arriveBtn, false);
            })
            .catch(res => showResult(resultDiv, 'Error'));
    }

    function buttonActivation(btn, status) {
        btn.disabled = status;
    }

    function showResult(resultDiv, result) {
        resultDiv.innerHTML = result;
    }

    function setState(name, next) {
        state = {
            name,
            next
        }
    }

    function arrive() {
        const resultDiv = document.getElementsByClassName('info')[0];
        const departBtn = document.getElementById('depart');
        const arriveBtn = document.getElementById('arrive');

        showResult(resultDiv, `Arriving at ${state.name}`);
        buttonActivation(departBtn, false);
        buttonActivation(arriveBtn, true);
    }

    function parseResult(result) {
        return result.json()
    }

    return {
        depart,
        arrive
    };
}

let result = solve();