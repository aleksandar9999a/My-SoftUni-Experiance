const { expect } = require('chai');
const SoftUniFy = require('./SoftUniFy');

describe('SoftUniFy Tests', () => {
    describe('Properties test', () => {
        it('Should contain allSongs property that is initialized as an empty object', () => {
            let actual = new SoftUniFy();
            expect(actual.allSongs).to.be.a('object');
        })
    })

    describe('downloadSong', () => {
        it('Adds the given information to the allSongs', () => {
            let actual = new SoftUniFy();
            actual.downloadSong('Eminem', 'Venom', 'Knock, Knock...');
            expect(actual.allSongs['Eminem']).to.eql({rate: 0, votes: 0, songs: ['Venom - Knock, Knock...']});
        })
    })

    describe('playSong', () => {
        it('Searches all already downloaded songs and returns them', () => {
            let actual = new SoftUniFy();
            actual.downloadSong('Eminem', 'Venom', 'Knock, Knock...');
            expect(actual.playSong('Venom')).to.be.equal("Eminem:\nVenom - Knock, Knock...\n")
        })
        it('Return string if song is not found', () => {
            let actual = new SoftUniFy();
            expect(actual.playSong('Venom')).to.be.equal("You have not downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!")
        })
    })

    describe('songsList', () => {
        it('If allSong is empty return string', () => {
            let actual = new SoftUniFy();
            expect(actual.songsList).to.be.equal('Your song list is empty');
        })
        it('Gets all already downloaded songs', () => {
            let actual = new SoftUniFy();
            actual.downloadSong('Eminem', 'Venom', 'Knock, Knock...')
            expect(actual.songsList).to.be.equal('Venom - Knock, Knock...');
        })
    })

    describe('rateArtist', () => {
        it('Return message if song not exist', () => {
            let actual = new SoftUniFy();
            expect(actual.rateArtist('Eminem')).to.be.equal('The Eminem is not on your artist list.')
        })
        it('If input is valid', () => {
            let actual = new SoftUniFy();
            actual.downloadSong('Eminem', 'Venom', 'Knock, Knock...');
            console.log();
            expect(actual.rateArtist('Eminem', 50)).to.be.equal(50)
        })
    })
})