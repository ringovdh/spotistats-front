import {useEffect, useState} from "react";
import TopTrack from "../../entities/TopTrack";
import TopArtist from "../../entities/TopArtist";
import playSessionService from "../../services/PlaySessionService";
import "./By-year.css";

const ByYear = () => {
    const logoNote = require("../../assets/music-note.png");
    const logoMic = require("../../assets/microphone.png");
    const [topTracks, setTopTracks] = useState([] as TopTrack[]);
    const [topArtists, setTopArtists] = useState([] as TopArtist[]);

    useEffect(() => {
        async function loadTracksTop5() {
            playSessionService.getTracksTop5_2023()
                .then((response) => {
                    setTopTracks(response.data.topTracks);
                });
        }

        async function loadArtistsTop5() {
            playSessionService.getArtistsTop5_2023()
                .then((response) => {
                    setTopArtists(response.data.topArtists);
                });
        }

        loadTracksTop5();
        loadArtistsTop5()

    }, []);

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
                                <img src={logoNote} alt="2023 top 5"/>
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
                                <img src={logoMic} alt="2023 top 5"/>
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
