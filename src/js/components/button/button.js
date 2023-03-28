import "./button.css";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Button({ text, className, buttonClass, href, newTab }) {
    const newButtonClass = buttonClass ? `main-button ${buttonClass}` : "main-button";
    return (
        <Fade delay={600} className={className} triggerOnce={true}>
            <a className={newButtonClass} href={href} target={newTab && "_blank"}>
                {text}
            </a>
        </Fade>
    );
}
