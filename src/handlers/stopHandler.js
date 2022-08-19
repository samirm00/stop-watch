// IMPORT 
import data from '../data.js';

function stopHandler() 
{
    if(data.watchInterval)
    {
        clearInterval(data.watchInterval);
        data.watchInterval = null;
    }
}

export default stopHandler;
