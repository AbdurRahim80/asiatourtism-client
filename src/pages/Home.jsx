import { useContext } from "react";
import Banner from "../componenst/Banner";
import { AuthContext } from "../componenst/providers/AuthProviders";


const Home = () => {
    const name = useContext(AuthContext);
    console.log(name);
    return (
        <div>
            <Banner/>
            <p>{name.name}</p>
           <h1 className="text-red-800"> Home</h1>
        </div>
    );
};

export default Home;