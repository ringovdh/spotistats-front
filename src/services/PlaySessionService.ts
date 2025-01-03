import axios from "axios";

class PlaySessionService {

    async getTracksTop5() {
        return await axios.get('http://localhost:8080/playSessions/tracks/top5')
    }

    async getArtistsTop5() {
        return await axios.get('http://localhost:8080/playSessions/artists/top5')
    }

    async getTracksTop5_2023() {
        return await axios.get('http://localhost:8080/playSessions/tracks/top5?year=2023')
    }

    async getArtistsTop5_2023() {
        return await axios.get('http://localhost:8080/playSessions/artists/top5?year=2023')
    }
}

const service = new PlaySessionService();
export default service;