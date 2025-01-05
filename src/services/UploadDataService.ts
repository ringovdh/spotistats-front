import axios from "axios";

class UploadDataService {

    async loadSpotifyData(file: File) {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return await axios.post('http://localhost:8080/spotifydata/add/file', formData, {
            headers: {"Content-Type": "multipart/form-data"}
        });
    }

}

const service = new UploadDataService();
export default service;