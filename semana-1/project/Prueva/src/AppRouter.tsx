import { createBrowserRouter } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { MovieDetailsPage } from "./Pages/MovieDetailsPage";
import { AuthLayout } from "./layouts/AuthLayout";

export const movieRouter = createBrowserRouter([
//    {
//        path: "/",
//        element: <HomePage/>
//    },{
//        path: "movies/:id",
//        element: <MovieDetailsPage />
//    }
    {
        path: "/",
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <HomePage />
            },{
                path: "movies",
                element: <h1 className="text-4xl">Aqui hay peliculas</h1> 
            }
        ]
    },{
        path: "/auth",
        element: <h1>Aqui se renderizan las rutas de autentication</h1>,
        children: [
            {
                
            }
        ]
    }
])