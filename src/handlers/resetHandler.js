import { data } from '../data.js';
import updateTimeComponent from '../components/updateTimeUnits.js';

/**
 * Resets the timer and updates the time components in the DOM.
 */
const resetHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }
    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;
    updateTimeComponent(data);
};

export default resetHandler;
