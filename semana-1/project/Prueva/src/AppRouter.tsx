import { createBrowserRouter } from "react-router";
import Home from "./Pages/HomePage";
import { MovieDetails } from "./Pages/MovieDetails";
// import { createBrotliCompress } from "zlib";

export const appRouter = createBrowserRouter([{
    path: "/",
    element: <Home />
},
{
    path: "movies/:id",
    element: <MovieDetails />
}])