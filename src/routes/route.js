import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import AllServices from "../pages/Services/AllServices";
import Services from "../pages/Services/Services";
import UpdateReview from "../pages/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/allservices/${params.id}`),
                element: <Services></Services>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/AddService',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/updateUpser/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params})=> fetch(`https://b6a11-service-review-server-side-mdismail645221.vercel.app/allReviews/${params.id}`)
            }
        ]
    }
])