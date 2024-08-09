import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links =
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " border-b-2 border-green-600"
                                : ""
                    }
                >
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/alltouris"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " border-b-2 border-green-600"
                                : ""
                    }
                >
                    <span>All Tourists Spot</span>
                </NavLink>
            </li>

            {user &&
                <li>
                    <NavLink
                        to="/addtouries"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                    ? " border-b-2 border-green-600"
                                    : ""
                        }
                    >
                        <span>Add Tourists Spot</span>
                    </NavLink>
                </li>
            }

            <li>
                <NavLink
                    to="/mylist"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " border-b-2 border-green-600"
                                : ""
                    }
                >
                    <span>My List</span>
                </NavLink>
            </li>

        </>

    // handle logOut
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
    }

    return (
        <div className=" flex justify-between items-center gap-4 border-b h-20 sticky z-50 top-0  bg-blue-100 shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className=" text-[15px] lg:text-3xl font-bold text-purple-400 ml-2"><span className="text-green-600">Asia</span>Tourtism</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex text-lg text-purple-600 px-2 gap-6 ">
                    {links}
                </ul>
            </div>

            <div className="flex justify-center items-center gap-3">
                <div>
                    <button className="px-4 py-1  text-lg border-2 rounded-md border-green-400 text-green-600"><Link to="/register">Register</Link></button>
                </div>
                {/* log out btn */}
                {
                    user ?
                        <div className='flex items-center gap-2'>
                            <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>
                                <div className="w-12 h-12"><img src={user.photoURL
                                } className='w-12 h-12 rounded-full' alt="" /></div>
                            </div>

                            <button onClick={handleLogOut} className="px-4 py-1 text-lg border-2 mr-2 rounded-md border-purple-800">SignOut</button>
                        </div>
                        :

                        <button className="px-4 py-1 text-lg border-2 mr-2 rounded-md border-purple-800"><Link to="/login">Login</Link></button>

                }
            </div>


        </div>
    );
};

export default Navbar;