// IMPORT HANDLER
import resetHandler from "../handlers/resetHandler.js";

// DOM ELEMENTS
const  resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function(e)
{
    e.preventDefault();
    resetHandler();
});