// import { useContext } from "react";
// import { AuthContext } from "../componenst/providers/AuthProviders";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../componenst/providers/AuthProviders";
// import { Link } from "react-router-dom";

const AllTouristsSpot = () => {

    // const { spots } = useContext(AuthContext);
    // const allSpots = spots;
    // console.log("Allspot", allSpots);
    // console.log(allSpots.map(i=> console.log(i)));

    const [spots, setSpots] = useState();

    useEffect(() => {
        fetch('https://asiatourtism-server.vercel.app/spot')
            .then(res => res.json())
            .then(data => {
                setSpots(data);
                console.log(data);

            })
    }, [])

    return (
        <div>
             
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 ">
            {
                spots?.map(spot => (
                    <div key={spot._id}>
                        <div className="">
                            <div className="border-2 border-green-500 hover:opacity-80 rounded-md lg:hover:scale-105 duration-300 p-4">
                                <img className="rounded-md" src={spot.photoUrl} alt="photoUrl" />
                                <div className="my-2">
                                    <div className="flex justify-between items-center gap-4">
                                        <h2 className="text-xl text-green-700 font-semibold">{spot.spot}</h2>
                                        <p>{spot.seasonality
                                        }</p>
                                        <hr />

                                    </div>

                                    <div className="border border-black/20 p-2 rounded-md my-2">
                                        <div className="flex justify-between items-center my-2">
                                            <p className="text-black/70">Travel time: {spot.travel_time}</p>
                                            <p className="text-black/70">Visitors: {spot.totalVisitorsPerYear}</p>
                                        </div>
                                        <p className=" text-black/70 my-2">Cost: {spot.AvgConst}</p>
                                    </div>
                                </div>

                                <Link to="/details">
                                    <button className="btn bg-teal-400 text-black hover:bg-black/45">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
    );
};

export default AllTouristsSpot;