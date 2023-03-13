import "./button.css";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Button({ text, className, href, newTab }) {
  return (
    <Fade delay={600} className={className} triggerOnce={true}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </Fade>
  );
}
