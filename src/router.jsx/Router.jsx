import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import Register from "../pages/Register";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList ";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import PrivateRouter from "../componenst/privateRoute/PrivateRouter";
import Details from "../pages/Details";
import Update from "../pages/Update";
import OtherSpot from "../componenst/OtherSpot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/spot')
            },
            {
                path: "/alltouris",
                element: <PrivateRouter><AllTouristsSpot /></PrivateRouter>
            },
            {
                path: "/addtouries",
                element: <PrivateRouter><AddTouristsSpot /></PrivateRouter>
            },
            {
                path: "/mylist",
                element: <PrivateRouter><MyList /></PrivateRouter>
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/details/:id",
                element: <PrivateRouter><Details /></PrivateRouter>,
                loader: () => fetch(`http://localhost:5000/spot`)
                
            },
            {
                path: "update",
                element: <Update/>
            },
            {
                path: "/",
                element: <OtherSpot/>
                
            }
        ]
    }

])
export default router;