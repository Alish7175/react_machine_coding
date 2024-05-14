import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}> 
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    )
}