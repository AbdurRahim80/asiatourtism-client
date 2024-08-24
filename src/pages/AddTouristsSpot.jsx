import { useContext } from "react";
import { AuthContext } from "../componenst/providers/AuthProviders";
import Swal from "sweetalert2";


const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    // add handler 
    const addHandler = e => {
        e.preventDefault();
        const form = e.target;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const AvgConst = form.AvgConst.value;
        const seasonality = form.seasonality.value;
        const photoUrl = form.photoUrl.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const description = form.description.value;
        const name = user.displayName;
        const email = user.email;
        const newSpotList = { spot, country, location, AvgConst, seasonality, photoUrl, travel_time, totalVisitorsPerYear, description, name, email }
        form.reset();
        console.log(newSpotList);
        fetch('http://localhost:5000/spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpotList)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="  flex justify-center items-center min-h-[calc(100vh-353.077px)]">
            <div className=" max-w-screen-lg bg-teal-800 border border-green-400 my-4 rounded-md  p-4">
                <form onSubmit={addHandler} className="w-[340px] lg:w-[800px] md:w-[650px]" >
                    {/* form spot and country row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourists spot name</span>
                            </label>
                             <label className="input-group">
                                <input type="text" name="spot" placeholder="Tourists spot name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Country name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" placeholder="Country name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form location and average cost row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Average cost </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="AvgConst" placeholder="Average cost" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Seasonality and photoURL row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <select name="seasonality" placeholder="Seasonality" className="input input-bordered w-full">
                                    <option value="summer">Summer</option>
                                    <option value="winter">Winter</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photoUrl" placeholder="PhotoURL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form totaVisitorsPerYear and travel time row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Travel time</span>
                            </label>
                            <label className="input-group">
                                <select name="travel_time" placeholder="Travel time" className="input input-bordered w-full">
                                    <option value="saturday">Saturday</option>
                                    <option value="sunday">Sunday</option>
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                    <option value="friday">Friday</option>
                                </select>
                                {/* <input type="week" name="travel_time" placeholder="Travel time" className="input input-bordered w-full" /> */}
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Total visitors per year</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="totalVisitorsPerYear" placeholder="TotalVisitorsPerYear" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <textarea name="description" placeholder="Description" id="" className="w-full rounded-md pl-3"></textarea>
                                {/* <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" /> */}
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add tourtism spot" className="btn  btn-block bg-teal-700 text-teal-10 hover:bg-teal-600 hover:text-teal-900" />

                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;

