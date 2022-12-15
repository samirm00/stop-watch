// IMPORT HANDLER
import startHandler from "../handlers/startHandler.js";

// DOM ELEMENTS
const  startButton = document.getElementById("start");

startButton.addEventListener("click", function(e)
{
    e.preventDefault();
    startHandler();
});