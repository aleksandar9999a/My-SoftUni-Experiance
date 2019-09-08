function getInfo() {
    const baseUrl = "https://judgetests.firebaseio.com/businfo/";
    let stopId = $('#stopId').val();

    $.ajax({
        url: baseUrl + stopId + '.json',
        method: 'GET',
        success: logData,
        error: handleError
    })

    function logData(data) {
        $('#stopName').text(data.name);
        for (let [key, value] of Object.entries(data.buses)) {
            $('#buses').append(`<li>Bus ${key} arrives in ${value} minutes</li>`);
        }
    }

    function handleError(err) {
        $('#stopName').text('Error');
    }
}