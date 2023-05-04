// CREATE TIMER STEPS

//1. countdown timer from 30
//2. timer stops at 0 - Game over
//3.update timer
//4.add time +5 sec when answer is correct (useEffect)
//5.timer continues when answer is false
//6.start game button - in useEffect


//ATTEMPT 1
/*import {useState, useEffect} from "react";

const countdownTarget = new Date(0) // should be set from 30s and go down to 0
// const Timer or Countdown = define here

const getTimeLeft = () => {
    const totalTimeLeft = ""; //fill in a math calculation for calulating totalTimeLeft (should be set to 30s)
        const seconds = Math.floor((totalTimeLeft / 1000) % 60);
        return {seconds};
};

const Timer = () => {
const [timeLeft, setTimeleft] = useState(() => getTimeLeft());

useEffect(() => {
    setInterval(() => {
        setTimeleft(getTimeLeft())

    }, 1000);
    return () => {
        clearInterval(Timer);
    };

}, []);


    return (

    )
} */


//ATTEMPT 2 - works

import {useState, useEffect} from "react";
import "../timer.css";

const targetTime = 30;
    


const CountdownTimer = () => { // create props here! ({props}) => { ...used when countdown is over
    const [remainingTime, setRemainingTime] = useState(30);

    useEffect (() => {
        const setSeconds = setInterval (() => setRemainingTime((oldTime) => oldTime - 1), 1000)
         
        return () => {
            if (setSeconds) {
                clearInterval(setSeconds);
            }
        };
    }, []);


        //return () => {
            //clearInterval(setSeconds)

        //}
       // return () => {
          //  return () => {
             //   clearInterval(setSeconds())
    
           // }
        //}
        
    //}, [])
    
        // add props in the array - lägg till state här updateTime, if /else

        // updateTime (); // add props here()
        //const intervalSec = setInterval (() => { // save the variable 
          
        // }, 1000); // callback will create a interval executed every second
        // return () => clearInterval(intervalSec); // use clearInterval function to clear interval, clears when interval stops (seconds)
        // function so that timer is cleared when its at 0
        // timer needs to countdown (not increase)


    function updateTime() {
        const setSeconds = setInterval (() => setRemainingTime((oldTime) => oldTime - 1), 1000)

        return () => {
            clearInterval(setSeconds())

        }
    }
    return(
        <div className="countdown-timer">
            <span>{remainingTime}</span>
            <span>seconds</span>


        </div>
    )
    }

export default CountdownTimer;

 //setRemainingTime(remainingTime - 1)
       // console.log(remainingTime); */

