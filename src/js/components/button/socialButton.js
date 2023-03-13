import "./socialButton.css";
import { Fade } from "react-awesome-reveal";

export default function socialButton({ items }) {
  const newTab = true;
  return (
    <>
      {items.map((value, index) => {
        return (
          <Fade delay={600} triggerOnce={true}>
            <a
              href={value.href}
              className={value.className}
              target={newTab && "_blank"}
              rel="noopener noreferrer"
            >
              <i className={value.icon}></i>
              <span></span>
            </a>
          </Fade>
        );
      })}
    </>
  );
}
