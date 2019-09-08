function attachEvents() {
    const baseUrl = 'https://messenger-bc5a6.firebaseio.com/messages.json';
    $('#submit').on('click', submitMessage);
    $('#refresh').on('click', refreshTextBox);

    function submitMessage() {
        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();

        let message = {
            author,
            content,
            timestamp
        }

        $.ajax({
            url: baseUrl,
            method: 'POST',
            data: JSON.stringify(message),
        });
    }

    function refreshTextBox() {
        $.ajax({
            url: baseUrl,
            method: 'GET',
            success: loadMessages
        })
    }

    function loadMessages(data) {
        let allMess = ''
        Object.values(data).forEach(e => {
            allMess += `${e.author}: ${e.content}\n`;
        });

        $('#messages').text(allMess);
    }
}