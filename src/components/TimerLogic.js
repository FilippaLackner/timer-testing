// ATTEMPT 3

/*import {useState, useEffect} from "react";
import "../timer.css";

const targetTime = new Date(Date.parse(new Date()) + 30 * 1000);

const CountdownTimer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
    const interval = setInterval(() => {
        if (targetTime > new Date()) {
            setCurrentTime(Date.now());
        } else {
            clearInterval(interval);
        }
    }, 1000);

    return () => {
        if (interval) {
            clearInterval(interval);
        }
    };
    }, []);

    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);

    return(
     <>
        <div className="gameover">
          
        <p>
          <span>{`${seconds < 30 ? "" : ""}${seconds}`}</span>
             
        </p>

        </div>
      
    </>
  );



    }
    
    


export default CountdownTimer;

