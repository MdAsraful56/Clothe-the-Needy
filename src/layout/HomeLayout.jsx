import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import About from "../components/About";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
// import Accordion from "../components/Accordion";



const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <About />
            <AboutCard />
            {/* <Accordion /> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;