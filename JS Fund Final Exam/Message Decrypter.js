function messageDecrypter(input) {
    let cycleCount = input.shift();
    processInput(cycleCount, input);


    function processInput(cycleCount, input) {
        for (let i = 0; i < cycleCount; i++) {
            let currMessage = input[i];
            if (!isValidMessage(currMessage)) {
                console.log('Valid message not found!');
            }
        }
    }

    function isValidMessage(message) {
        let pattern = /([$%])(?<tag>[A-Z][a-z]{3,})\1: (?<myMessage>(\[\d+]\|)+)/g;
        let validMessage = null;

        while ((validMessage = pattern.exec(message)) != null) {
            validMessage.shift();
            let tag = validMessage.groups['tag'];
            let myMessage = validMessage.groups['myMessage'];

            myMessage = myMessage.split('|');
            myMessage.pop();

            if (myMessage.length == 3) {
                let newMessage = decryptMessage(myMessage);
                console.log(`${tag}: ${newMessage}`);
                return true;
            }
        }

        return false;
    }

    function decryptMessage(myMessage) {
        let pattern = /\d+/g;
        let newMessage = '';

        for (let line of myMessage) {
            let validLine = null;
            while ((validLine = pattern.exec(line)) != null) {
                newMessage += String.fromCharCode(validLine);
            }
        }

        return newMessage;
    }
}


messageDecrypter([ '4',
'$Request$: [73]|[115]|[105]|',
'%Taggy$: [73]|[73]|[73]|',
'%Taggy%: [118]|[97]|[108]|',
'$Request$: [73]|[115]|[105]|[32]|[75]|' ])