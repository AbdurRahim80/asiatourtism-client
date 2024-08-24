
import About from "../componenst/About";
import Banner from "../componenst/Banner";
import OtherSpot from "../componenst/OtherSpot";

import TouristsSpots from "../componenst/TouristsSpots";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const touristSpotData = useLoaderData();

    return (
        <div>
            <Banner />

            <div>
                <TouristsSpots touristSpotData={touristSpotData} />
            </div>
            <div>
                <OtherSpot />
            </div>
            <div>
                <About/>
            </div>

        </div>
    );
};

export default Home;