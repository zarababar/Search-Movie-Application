import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/details" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;