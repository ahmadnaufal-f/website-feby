import Header from "../../components/header/header";
import Hero from "../hero/hero";
import Intro from "../intro/intro";
import Brands from "../brands/brands";

function Main() {
    return (
        <>
            <Header />
            <Hero />
            <Intro />
            <Brands />
            <div style={{ height: "1000px" }}></div>
        </>
    );
}

export default Main;
