import axios from "axios";

class PlaySessionService {

    async getTracksTop5() {
        return await axios.get('http://localhost:8080/playSessions/tracks/top?items=5')
    }

    async getArtistsTop5() {
        return await axios.get('http://localhost:8080/playSessions/artists/top?items=5')
    }

    async getTracksTop5_2023() {
        return await axios.get('http://localhost:8080/playSessions/tracks/top?items=5&year=2023')
    }

    async getArtistsTop5_2023() {
        return await axios.get('http://localhost:8080/playSessions/artists/top?items=5&year=2023')
    }

    async getTracksTop10() {
        return await axios.get('http://localhost:8080/playSessions/tracks/top?items=10')
    }

    async getArtistsTop10() {
        return await axios.get('http://localhost:8080/playSessions/artists/top?items=10')
    }
}

const service = new PlaySessionService();
export default service;