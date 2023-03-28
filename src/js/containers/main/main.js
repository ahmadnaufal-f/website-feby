import Header from "../../components/header/header";
import Hero from "../hero/hero";
import Intro from "../intro/intro";
import Brands from "../brands/brands";
import Roles from "../roles/roles";
import Points from "../points/points";
import Gallery from "../gallery/gallery";
import Footer from "../footer/footer";
import GoToTop from "../../components/button/gototop";
import Closing from "../closing/closing";

function Main() {
    return (
        <>
            <Header />
            <Hero />
            <Intro />
            <Brands />
            <Roles />
            <Points />
            <Gallery />
            <Closing />
            <Footer />
            <GoToTop />
        </>
    );
}

export default Main;
