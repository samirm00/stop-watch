// IMPORT 
import data from "../data.js";
import getWatchTime from "../logic/time.js";
import getTimeComponent from "../components/time.js";

// DOM ELEMENTS
const timeElement = document.getElementById("time");

function startHandler() 
{
    if( data.watchInterval !== null)
    {
        data.watchInterval = clearInterval(data.watchInterval);
    }
    
    data.watchInterval = setInterval(function()
    {
        var time = getWatchTime();
        var timeComponent = getTimeComponent(time);

        timeElement.innerHTML = "";
        timeElement.append(timeComponent);
    }, 10);
      
}

export default startHandler;