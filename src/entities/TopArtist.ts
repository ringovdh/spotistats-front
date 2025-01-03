class TopTrack {
    id: number;
    artistName: string;
    timesPlayed: number;

    constructor(id: number, artistName: string, timesPlayed: number) {
        this.id = id;
        this.artistName = artistName;
        this.timesPlayed = timesPlayed;
    }
}

export default TopTrack;