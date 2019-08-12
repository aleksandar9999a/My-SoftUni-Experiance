function encodeAndDecodeMessages() {
    const encodeBtn = document.getElementsByTagName('button')[0];
    const decodeBtn = document.getElementsByTagName('button')[1];
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let message = document.getElementsByTagName('textarea')[0].value;
        let encodeMess = '';

        for (let i = 0; i < message.length; i++) {
            let charIndex = message[i].charCodeAt(0) + 1;
            encodeMess += String.fromCharCode(charIndex);
        }

        document.getElementsByTagName('textarea')[1].value = encodeMess;
        document.getElementsByTagName('textarea')[0].value = '';
    }
    
    function decode() {
        let message = document.getElementsByTagName('textarea')[1].value;
        let decodeMess = '';

        for (let i = 0; i < message.length; i++) {
            let charIndex = message[i].charCodeAt(0) - 1;
            decodeMess += String.fromCharCode(charIndex);
        }

        document.getElementsByTagName('textarea')[1].value = decodeMess;
    }
}