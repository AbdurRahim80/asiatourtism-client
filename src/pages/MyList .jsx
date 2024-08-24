import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../componenst/providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
    const { user, spot } = useContext(AuthContext);
    const [mySpotList, setMySpotList] = useState(useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                setMySpotList(data)
            })
    }, [user]));
    
    const { _id } = spot;
    console.log(_id);

    console.log(user?.email);


    console.log("mySpotList", mySpotList);

    const deleteHandle = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/spot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("data", data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your spot has been deleted.',
                                'success'
                            )
                            const remaining = mySpotList.filter(spt => spt._id !== _id);
                            setMySpotList(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 my-12 ">
            {
                mySpotList?.map(spot => (
                    <div key={spot._id}>
                        <div className="">
                            <div className="border-2 border-green-500 hover:opacity-80 rounded-md lg:hover:scale-105 duration-300 p-4">
                                <img className="rounded-md" src={spot.photoUrl} alt="photoUrl" />
                                <div className="flex flex-col justify-between">
                                    <div className="my-2 h-[200px]">
                                        <div className="flex justify-between items-center gap-4">
                                            <h2 className="text-xl text-green-700 font-semibold">{spot.spot}</h2>
                                            <p className="text-slate-600">{spot.country
                                            }</p>
                                            <hr />

                                        </div>

                                        <div className=" p-2 rounded-md my-2">
                                            <div className="flex justify-between items-center my-2">
                                                <p className="text-black/60">Travel time: {spot.description}</p>

                                            </div>
                                            <p className="my-2 text-slate-600">Cost: {spot.AvgConst}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Link to="/update">
                                            <button className="btn bg-green-500 text-white hover:bg-green-500"> Upate</button>
                                        </Link>

                                        <button onClick={() => deleteHandle(spot._id)} className="btn bg-red-500 text-white hover:bg-red-600"> Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyList;