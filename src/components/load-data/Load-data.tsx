import {ChangeEvent, useState} from "react";
import uploadDataService from "../../services/UploadDataService";

const LoadData = () => {

    const [spotifyDataFile, setSpotifyDataFile] = useState<File>();

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        console.log("file", event.target.files)
        setSpotifyDataFile(event.target.files?.[0]);
    }

    function upload() {
        console.log("fiel", spotifyDataFile)
        uploadDataService.loadSpotifyData(spotifyDataFile!);
    }

    return(
        <div id="load-data-container"
             className="page-container">
            <p> Load your Spotify data! </p>
            <div className="mb-3 input-file">
                <label htmlFor="uploadFile" className="form-label">Select a spotify data file (json)</label>
                <input id="uploadFile"
                       className="form-control"
                       type="file"
                       onChange={handleFile}
                       accept="application/json"/>
            </div>
            <div className="col-4">
                <button
                    className="btn btn-success btn-sm"
                    disabled={!spotifyDataFile}
                    onClick={upload}
                >
                    Upload
                </button>
            </div>
        </div>
    );

}

export default LoadData;