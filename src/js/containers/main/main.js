import Header from "../../components/header/header";
import Hero from "../hero/hero";
import Intro from "../intro/intro";

function Main() {
  return (
    <div className="web-root">
      <Header />
      <Hero />
      <Intro />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}

export default Main;
