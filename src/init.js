

// IMPORT LISTENERS
import "./listeners/startListener.js";
import "./listeners/stopListener.js";
import "./listeners/resetListener.js";

// IMPORT 
import data from "./data.js";
import getTimeComponent from "./components/time.js";

// SHOW 00:00:000 BY DEFAULT
const timeElement = document.getElementById("time");
const timeComponent = getTimeComponent(data);
timeElement.append(timeComponent);