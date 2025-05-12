import {useEffect, useState} from "react";
import TopTrack from "../../entities/TopTrack";
import TopArtist from "../../entities/TopArtist";
import playSessionService from "../../services/PlaySessionService";
import "./All-time.css";

const AllTimeTop5 = () => {
    const logoNote = require("../../assets/music-note.png");
    const logoMic = require("../../assets/microphone.png");
    const [topTracks, setTopTracks] = useState([] as TopTrack[]);
    const [topArtists, setTopArtists] = useState([] as TopArtist[]);

    useEffect(() => {
        async function loadTracksTop5() {
            playSessionService.getTracksTop5()
                .then((response) => {
                    setTopTracks(response.data.topTracks);
                });
        }

        async function loadArtistsTop5() {
            playSessionService.getArtistsTop5()
                .then((response) => {
                    setTopArtists(response.data.topArtists);
                });
        }
        loadTracksTop5();
        loadArtistsTop5()

    }, []);

    return (
        <div className="section services all-time" id="all_time">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-heading">
                            <h6>All-time Favourites</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="service-item">
                            <div className="icon">
                                <img src={logoNote} alt="all time top 5"/>
                            </div>
                            <div className="main-content">
                                <h4>Top 5 Songs All Times</h4>
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
                                <img src={logoMic} alt="all time top 5"/>
                            </div>
                            <div className="main-content">
                                <h4>Top 5 Artists All Times</h4>
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

export default AllTimeTop5;
