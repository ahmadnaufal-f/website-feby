import "./points.css";
import { Slide } from "react-awesome-reveal";
import ListItem from "../../components/listItem/listitem";

function Points() {
    const items = [
        {
            id: 0,
            title: "Eye-catching Post ",
            subtitle: "using unique art doodles",
        },
        {
            id: 1,
            title: "On Point Review ",
            subtitle: "by highlighting key ingredients",
        },
        {
            id: 2,
            title: "High Engagement ",
            subtitle: "from thousand of followers",
        },
    ];
    return (
        <Slide triggerOnce={true}>
            <div id="portfolio" className="section-wrapper d-flex">
                <div className="points-card">
                    <div className="points-top">Find out why brands choose me</div>
                    <ListItem items={items} />
                </div>
            </div>
        </Slide>
    );
}

export default Points;
