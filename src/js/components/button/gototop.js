import React from "react";
import "./gototop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export default function GoToTop() {
    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    // When the user scrolls down 20px from the top of the document, show the button
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topButton").style.visibility = "visible";
        } else {
            document.getElementById("topButton").style.visibility = "hidden";
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };
    window.onload = function () {
        scrollFunction();
    }; //To make sure that this button is not visible at starting.
    // When the user clicks on the button, scroll to the top of the document
    return (
        <button onClick={TopEvent} id="topButton" title="Go to top">
            <FontAwesomeIcon icon={faAnglesUp} /> <span> Go to Top</span>
        </button>
    );
}
