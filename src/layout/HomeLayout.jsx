import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from "../components/About";
import AboutCard from "../components/AboutCard";
import Accordion from "../components/Accordion";



const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <About />
            <AboutCard />
            <Accordion />
            <Outlet />
        </div>
    );
};

export default HomeLayout;