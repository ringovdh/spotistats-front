const LoadData = () => {

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    return(
        <div id="load-data-container"
             className="page-container">
            <p> Load your Spotify data! </p>

                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" onChange={onFileChange}/>
                </div>
        </div>
    );

}

export default LoadData;