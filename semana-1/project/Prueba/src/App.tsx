import { RouterProvider } from "react-router";
import { movieRouter } from "./AppRouter";




function App() {
  return (
    <RouterProvider router={movieRouter}/>
  )
}

export default App;