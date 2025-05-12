import {useEffect, useState} from "react";
import TopTrack from "../../entities/TopTrack";
import TopArtist from "../../entities/TopArtist";
import playSessionService from "../../services/PlaySessionService";
import "./By-year.css";
import logoNote from './assets/music-note.png';
import logoMic from '../../assets/microphone.png';

const ByYear = () => {

    const [topTracks, setTopTracks] = useState<TopTrack[]>([]);
    const [topArtists, setTopArtists] = useState<TopArtist[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    let x :unknown = 4;
    (x as number).valueOf()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const [tracksResponse, artistsResponse] = await Promise.all([
                    playSessionService.getTracksTop5_2023(),
                    playSessionService.getArtistsTop5_2023()
                ]);
                if (tracksResponse?.data?.topTracks) {
                    setTopTracks(tracksResponse.data.topTracks);
                } else {
                    console.warn("Top tracks data not found in response:", tracksResponse);
                    setTopTracks([]);
                }
                if (artistsResponse?.data?.topArtists) {
                    setTopArtists(artistsResponse.data.topArtists);
                } else {
                    console.warn("Top artists data not found in response:", artistsResponse);
                    setTopArtists([]);
                }
            } catch (err) {
                console.error("Failed to fetch top data:", err);
                setError("Failed to load favourites. Please try again later.");
                setTopTracks([]);
                setTopArtists([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="section services by-year" id="by_year">
                <div className="container text-center">
                    <p>Loading favourites...</p>
                    {/* Optionally add a spinner component here */}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="section services by-year" id="by_year">
                <div className="container text-center text-danger">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="section services by-year" id="by_year">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-heading">
                            <h6>Favourites of 2023</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="service-item">
                            <div className="icon">
                                <img src={logoNote} alt="logo of a music note"/>
                            </div>
                            <div className="main-content">
                                <h4>Top 5 Songs 2023</h4>
                                <ol>
                                    {
                                        topTracks.map(t =>
                                            <li key={t.id}>
                                                {t.songTitle} ... <b>{t.artistName}</b> ... {t.timesPlayed} times
                                            </li>
                                        )
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="service-item">
                            <div className="icon">
                                <img src={logoMic} alt="logo of a mic"/>
                            </div>
                            <div className="main-content">
                                <h4>Top 5 Artists 2023</h4>
                                <ol>
                                    {
                                        topArtists.map(a =>
                                            <li key={a.id}>
                                                <b>{a.artistName}</b> ... {a.timesPlayed} times
                                            </li>
                                        )
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ByYear;
