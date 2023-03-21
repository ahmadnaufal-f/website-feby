import Header from "../../components/header/header";
import Hero from "../hero/hero";
import Intro from "../intro/intro";
import Brands from "../brands/brands";
import Roles from "../roles/roles";

function Main() {
    return (
        <>
            <Header />
            <Hero />
            <Intro />
            <Brands />
            <Roles />
            <div style={{ height: "1000px" }}></div>
        </>
    );
}

export default Main;
