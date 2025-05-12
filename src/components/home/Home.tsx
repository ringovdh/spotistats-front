import "./Home.css";
import AllTimeTop5 from "../all-time/All-time-top-5";
import ByYear from "../by-year/By-year";

const Home = () => {

    return(
        <div id="home-page-container"
             className="page-container">
            <p> Welcome to Spotistats! </p>
            <p> Curious about your listening habits on Spotify?
                Want to know which artists and songs you listen to the most? <br/>
                Spotistats gives you insight into your music experience.
                This tool analyses your Spotify data and presents it in a simple overview. <br/>
                Have fun!
            </p>
            <AllTimeTop5 />
            <ByYear />
        </div>
    );
}

export default Home;
