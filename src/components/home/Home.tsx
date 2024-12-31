import {useEffect, useState} from "react";
import PlaySession from "../../entities/PlaySession";
import playSessionService from "../../services/PlaySessionService";
import "./home.css";

const Home = () => {
    const logoNote =  require("../../assets/music-note.png");
    const logoMic =  require("../../assets/microphone.png");
    const [playSessions, setPlaySessions] = useState([] as PlaySession[]);

    useEffect(() => {
        async function loadTop5() {
            playSessionService.getTop5()
                .then((response) => {
                    setPlaySessions(response.data.playSessions);
                });
        }

        loadTop5();

    }, []);

    return(
        <div id="home-page-container"
             className="home-page-container">
            <p>Welcome!</p>
            <div className="services" id="services">
                <div className="container">
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
                                            playSessions.map(ps =>
                                                <li key={ps.id}>
                                                    {ps.songTitle} ... <b>{ps.artistName}</b> ... {ps.timesPlayed} times
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
                                </div>
                            </div>
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>
                    );
                    }

                    export default Home;
