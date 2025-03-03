import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Main from "../components/Main";



const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Outlet />
        </div>
    );
};

export default HomeLayout;