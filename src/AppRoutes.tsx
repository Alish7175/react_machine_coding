import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { StarRatingPage } from "./pages/StartRatingPage/StarRatingPage";
import { AccordianDemoPage } from "./pages/AccordianDemoPage/AccordianDemoPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}> 
                <Route index path="/" element={<StarRatingPage/>} />
                <Route path="/star_rating" element={<StarRatingPage/>} />
                <Route path="/accordian" element={<AccordianDemoPage/>} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    )
}