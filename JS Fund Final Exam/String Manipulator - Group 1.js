function stringManipulator(input) {
    let str = input.shift();

    for (let line of input) {
        let currentCommand = line.split(' ');
        
        if (line === 'End') {
            break;
        }
        else if(currentCommand[0] === 'Translate'){
            let manipulater = str.split('');

            for (let i = 0; i < manipulater.length; i++) {
                if (manipulater[i] === currentCommand[1]) {
                    manipulater[i] = currentCommand[2];
                }
            }

            str = manipulater.join('')
            console.log(str);
        }
        else if(currentCommand[0] === 'Includes'){
            if (str.includes(currentCommand[1])) {
                console.log('True')
            }
            else{
                console.log('False')
            }
        }
        else if(currentCommand[0] === 'Start'){
            let output = str.split(' ');

            if (output[0] === currentCommand[1]) {
                console.log('True')
            }
            else{
                console.log('False')
            }
        }
        else if(currentCommand[0] === 'Lowercase'){
            str = str.toLowerCase();
            console.log(str);
        }
        else if(currentCommand[0] === 'FindIndex'){
            if (str.includes(currentCommand[1])) {
                console.log(str.lastIndexOf(currentCommand[1]));
            }
        }
        else if(currentCommand[0] === 'Remove'){
            if (currentCommand[2] > currentCommand[1]) {
                let manipulater = str.split('');
                let elementsCountForRemove = currentCommand[2] - currentCommand[1];
                manipulater.splice(currentCommand[1], elementsCountForRemove);
                str = manipulater.join('')
                console.log(str);
            }
        }
    }
}
stringManipulator([ 'worRGWEGDk  wf W fFSf',
  'Remove 5 0'])
