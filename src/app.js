import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "typeface-roboto";
import twemoji from "twemoji";
import "./style.scss";
import timer from "./modules/timer";

timer("Dec-24-2020 18:00");

twemoji.parse(document.querySelector(".emojis"), {
    folder: "svg",
    ext: ".svg"
});