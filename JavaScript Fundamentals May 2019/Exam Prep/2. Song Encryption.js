function songEncryption(songsArr) {
    processingInput(songsArr);
}

function processingInput(input) {
    for (let line of input) {
        if (line === 'end') {
            break;
        }

        let [artist, song] = line.split(':');
        if (artistValidation(artist) && songValidation(song)) {
            let encryptedArtist = encryptionArtist(artist);
            let encryptedSong = encryptionSong(song, artist);
            console.log(`Successful encryption: ${encryptedArtist}@${encryptedSong}`);
        }
        else{
            console.log(`Invalid input!`);
        }
    }
}

function artistValidation(artist) {
    let artistPattern = /[A-Z][a-z ']+/g;
    let validArtist = null;

    while ((validArtist = artistPattern.exec(artist)) !== null) {
        if (validArtist.toString() === artist) {
            return true;
        }
        else{
            return false;
        }
    }
}

function songValidation(song) {
    let songPattern = /[A-Z ]+/g;
    let validSong = null;

    while ((validSong = songPattern.exec(song)) !== null) {
        if (validSong.toString() === song) {
            return true;
        }
        else{
            return false;
        }
    }
}

function encryptionArtist(artist) {
    let encrypt = '';

    for (let i = 0; i < artist.length; i++) {
        if (artist[i] === ' ') {
            encrypt += ' ';
        }
        else if (artist[i] === `'`) {
            encrypt += `'`;
        }
        else{
            let asciiIndex = artist.charCodeAt(i) + artist.length;

            if (artist[i] === artist[i].toUpperCase() && asciiIndex > 90) {
                asciiIndex -= 26;
                encrypt += String.fromCharCode(asciiIndex);
            }
            else if (artist[i] === artist[i].toUpperCase() && asciiIndex <= 90) {
                encrypt += String.fromCharCode(asciiIndex);
            }
            else{
                if (asciiIndex > 122) {
                    asciiIndex -= 26;
                    encrypt += String.fromCharCode(asciiIndex);
                }
                else{
                    encrypt += String.fromCharCode(asciiIndex);
                }
            }
        }
    }

    return encrypt;
}

function encryptionSong(song, artist) {
    let encrypt = '';

    for (let i = 0; i < song.length; i++) {
        if (song[i] === ' ') {
            encrypt += ' ';
        }
        else{
            let asciiIndex = song.charCodeAt(i) + artist.length;

            if (asciiIndex > 90) {
                asciiIndex -= 26;
                encrypt += String.fromCharCode(asciiIndex);
            }
            else if (asciiIndex <= 90) {
                encrypt += String.fromCharCode(asciiIndex);
            }
        }
    }

    return encrypt;
}

songEncryption([ 'Eminem:VENOM', 'Linkin park:NUMB', 'Drake:NONSTOP', 'Adele:HELLO', 'end' ])

songEncryption([ 'Michael Jackson:ANOTHER PART OF ME', 'Adele:ONE AND ONLY', 'Guns n\'roses:NOVEMBER RAIN', 'Christina Aguilera: HuRt', 'end' ])