import { Children } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";
export default function Body() {
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/",
        element:<Home />,
        children:[
            {
                path:"/home",
                element:<Feed/>
            },
            {
                path:"/profile",
                element:<Profile/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login />
    }
])
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}