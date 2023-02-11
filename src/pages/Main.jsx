import Navbar from "../components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portofolio";
import Clients from "./Clients";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "../components/Footer";
import ToTop from "../components/button/ToTop";


const Main = () =>{
    return(
        <> 
        <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Clients/>
        <Blog/>
        <Contact/>
        <Footer/>
        <ToTop/>
        </>
    );
}

export default Main

