import axios from "axios";

class PlaySessionService {

    async getTop5() {
        return await axios.get('http://localhost:8080/playSessions/top5')
    }
}

const service = new PlaySessionService();
export default service;