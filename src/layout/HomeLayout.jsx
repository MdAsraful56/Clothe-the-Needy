import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from "../components/About";



const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <About />
            <Outlet />
        </div>
    );
};

export default HomeLayout;