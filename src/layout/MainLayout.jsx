import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";
const MainLayout = ()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>

        </>
    );
}

export default MainLayout;