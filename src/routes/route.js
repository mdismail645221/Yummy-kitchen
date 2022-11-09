import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import AllServices from "../pages/Services/AllServices";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>Not found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, 
            {
                path: '/allServicesItems',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/allservices/${params.id}`),
                element: <Services></Services>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            }
        ]
    }
])