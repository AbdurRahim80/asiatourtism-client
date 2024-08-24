import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const TouristsSpots = ({ touristSpotData }) => {
    // console.log(touristSpotData);
    const spots = touristSpotData;
    return (
        <div className="my-16">
            <h1 className="text-center text-2xl text-teal-700 uppercase font-bold my-8">
                <Typewriter
                    words={['Tourists','Spots']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                 
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
                {
                    spots.map(spot => (
                        <div key={spot._id}>
                            <div className="border-2 border-green-500 hover:opacity-80 rounded-md lg:hover:scale-105 duration-300 p-4">
                                <img className="rounded-md" src={spot.photoUrl} alt="photoUrl" />
                                <div className="my-2">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl text-green-700 font-semibold">{spot.spot}</h2>
                                        <p className="text-black/90">{spot.location}</p>
                                        <hr />

                                    </div>

                                    <div className="my-2">
                                        <p className="text-black/80">{spot.description}</p>
                                    </div>
                                </div>
                                <Link to={`/details/${spot._id}`}>
                                    <button className="btn bg-teal-400 text-black hover:bg-black/45">View Details</button>
                                </Link>

                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default TouristsSpots;