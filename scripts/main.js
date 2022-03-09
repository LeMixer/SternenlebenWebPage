"use-strict";

function disableScroll () {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // eslint-disable-next-line func-name-matching
    window.onscroll = function onScrollOverride () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}


function enableScroll () {
    // eslint-disable-next-line no-empty-function
    window.onscroll = () => { };
}

const [ gas ] = document.getElementsByClassName("gasanimtrigger");

gas.addEventListener("click", gasClickHandler);


function gasClickHandler () {
    disableScroll();
    const [ backround ] = document.getElementsByClassName("infoBackround");

    backround.classList.add("infoScreen");

    const gasInfo = document.getElementById("gasInfo");

    gasInfo.classList.add("infoScreen");

    backround.addEventListener("click", handleBackroundClick);

    function handleBackroundClick () {
        backround.classList.remove("infoScreen");
        gasInfo.classList.remove("infoScreen");
        enableScroll();
    }

    console.log("Clicked");
}


const [ proto ] = document.getElementsByClassName("protostar");

proto.addEventListener("click", protoClickHandler);


function protoClickHandler () {
    disableScroll();
    const [ backround ] = document.getElementsByClassName("infoBackround");

    backround.classList.add("infoScreen");

    const protoInfo = document.getElementById("protoInfo");

    protoInfo.classList.add("infoScreen");

    backround.addEventListener("click", handleBackroundClick);

    function handleBackroundClick () {
        backround.classList.remove("infoScreen");
        protoInfo.classList.remove("infoScreen");
        enableScroll();
    }
}


const [ sun ] = document.getElementsByClassName("sun");

sun.addEventListener("click", sunClickHandler);


function sunClickHandler () {
    disableScroll();
    const [ backround ] = document.getElementsByClassName("infoBackround");

    backround.classList.add("infoScreen");

    const sunInfo = document.getElementById("sunInfo");

    sunInfo.classList.add("infoScreen");

    backround.addEventListener("click", handleBackroundClick);

    function handleBackroundClick () {
        backround.classList.remove("infoScreen");
        sunInfo.classList.remove("infoScreen");
        enableScroll();
    }
}

const [ giant ] = document.getElementsByClassName("giant");

giant.addEventListener("click", giantClickHandler);


function giantClickHandler () {
    disableScroll();
    const [ backround ] = document.getElementsByClassName("infoBackround");

    backround.classList.add("infoScreen");

    const giantInfo = document.getElementById("giantInfo");

    giantInfo.classList.add("infoScreen");

    backround.addEventListener("click", handleBackroundClick);

    function handleBackroundClick () {
        backround.classList.remove("infoScreen");
        giantInfo.classList.remove("infoScreen");
        enableScroll();
    }
}


const [ nebula ] = document.getElementsByClassName("nebula");

nebula.addEventListener("click", nebulaClickHandler);


function nebulaClickHandler () {
    disableScroll();
    const [ backround ] = document.getElementsByClassName("infoBackround");

    backround.classList.add("infoScreen");

    const nebulaInfo = document.getElementById("nebulaInfo");

    nebulaInfo.classList.add("infoScreen");

    backround.addEventListener("click", handleBackroundClick);

    function handleBackroundClick () {
        backround.classList.remove("infoScreen");
        nebulaInfo.classList.remove("infoScreen");
        enableScroll();
    }
}


const [ dwarf ] = document.getElementsByClassName("dwarf");

dwarf.addEventListener("click", dwarfClickHandler);


function dwarfClickHandler () {
    disableScroll();
    const [ backround ] = document.getElementsByClassName("infoBackround");

    backround.classList.add("infoScreen");

    const dwarfInfo = document.getElementById("dwarfInfo");

    dwarfInfo.classList.add("infoScreen");

    backround.addEventListener("click", handleBackroundClick);

    function handleBackroundClick () {
        backround.classList.remove("infoScreen");
        dwarfInfo.classList.remove("infoScreen");
        enableScroll();
    }
}
