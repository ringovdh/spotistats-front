import {ChangeEvent, useState} from "react";
import uploadDataService from "../../services/UploadDataService";
import AllTimeTop10 from "../all-time/All-time-top-10";

const LoadData = () => {

    const [spotifyDataFile, setSpotifyDataFile] = useState<File>();
    const [showUpload, setShowUpload] = useState<boolean>(true);
    const [showTop, setShowTop] = useState<boolean>(false);

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        setSpotifyDataFile(event.target.files?.[0]);
    }

    function upload() {
        uploadDataService.loadSpotifyData(spotifyDataFile!).then((response) => {
            console.log('klaar...')
            setShowUpload(true);
            setShowTop(false)
        });
        setShowUpload(false);
        setShowTop(true)
    }

    return(
        <div id="load-data-container"
             className="page-container">
            <p> Load your Spotify data! </p>
            { showUpload && <div>
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
                        onClick={upload}>
                        Upload
                    </button>
                </div>
            </div> }
            { showTop && <div>
                < AllTimeTop10 reload={showTop}/>
            </div> }
        </div>
    );

}

export default LoadData;