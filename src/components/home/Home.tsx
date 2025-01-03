import "./Home.css";
import AllTime from "../all-time/All-time";
import ByYear from "../by-year/By-year";

const Home = () => {

    return(
        <div id="home-page-container"
             className="home-page-container">
            <p> Welcome to Spotistats! </p>
            <p> Curious about your listening habits on Spotify?
                Want to know which artists and songs you listen to the most? <br/>
                Spotistats gives you insight into your music experience.
                This tool analyses your Spotify data and presents it in a simple overview. <br/>
                Have fun!
            </p>
            <AllTime />
            <ByYear />
        </div>
    );
}

export default Home;
