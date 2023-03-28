import React from "react";
import "./loading.css";
import Lottie from "@amelix/react-lottie";
import loadingCat from "../../../res/loading-cat.json";

function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingCat,
    };

    return (
        <div class="loading-wrapper">
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </div>
    );
}

export default Loading;
