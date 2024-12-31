class PlaySession {
    id: number;
    songTitle: string;
    artistName: string;
    timesPlayed: number;

    constructor(id: number, songTitle: string, artistName: string, timesPlayed: number) {
        this.id = id;
        this.songTitle = songTitle;
        this.artistName = artistName;
        this.timesPlayed = timesPlayed;
    }
}

export default PlaySession;