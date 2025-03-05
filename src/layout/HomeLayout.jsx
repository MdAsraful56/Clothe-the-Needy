import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from "../components/About";
import AboutCard from "../components/AboutCard";



const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <About />
            <AboutCard />
            <Outlet />
        </div>
    );
};

export default HomeLayout;