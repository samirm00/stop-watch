// IMPORT 
import data from "../data.js";
import getTimeComponent from "../components/time.js";

// DOM ELEMENTS
const timeElement = document.getElementById("time");

function resetHandler() 
{
    if (data.watchInterval) 
    {
        clearInterval(data.watchInterval);
        data.watchInterval = null;
    }
    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;
    const time = getTimeComponent(data);
    timeElement.innerHTML = "";
    timeElement.append(time);
}

export default resetHandler;