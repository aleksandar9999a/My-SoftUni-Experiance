function songs(songsDataArr) {
    let numberOfSongs = Number(songsDataArr.shift());
    let songType = songsDataArr.pop();

    class Songs{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        listen(){
            if (this.typeList == songType ) {
                console.log(this.name);
            }
            else if (songType == `all`) {
                console.log(this.name);
            }
        }
    }

    songsDataArr
                .map(line => line.split(`_`))
                .map(([type, name, time]) => new Songs(type, name, time))
                .forEach(songs => songs.listen());
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )