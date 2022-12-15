// IMPORT HANDLER
import stopHandler from "../handlers/stopHandler.js";

// DOM ELEMENTS
const  stopButton = document.getElementById("stop");

stopButton.addEventListener("click", function(e)
{
    e.preventDefault();
    stopHandler();
});