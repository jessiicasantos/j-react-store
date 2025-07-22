 import { useEffect, useRef, useState } from "react";
 import TimeBox from "./TimeBox";
 import "./Countdown.css";

 const Countdown = () => {
     const deadlineRef = useRef(new Date('August 15 2025'));  // Armazena a data final sem recriar
     const intervalRef = useRef<number | null>(null);

     const [ days, setDays ] = useState(0);
     const [ timer, setTimer ] = useState({
         hours: 0,
         minutes: 0,
         seconds: 0
     });

     /* 
     Calcula o tempo restante até o prazo final;
     Calcula a diferença entre a hora atual e o prazo final, e em seguida, converte essa diferença em dias, horas, minutos e segundos
     */
    const calculateTimeLeft = () => {
        const now = new Date();
        const timeLeft = deadlineRef.current.getTime() - now.getTime();


        const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
        const hours = 23 - now.getHours();
        const minutes = 59 - now.getMinutes();
        const seconds = 59 - now.getSeconds();


        setDays(days);
        setTimer({ hours, minutes, seconds });
    };

     useEffect(() => {
        calculateTimeLeft();
        intervalRef.current = window.setInterval(calculateTimeLeft, 1000);

       return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
     }, []);
    
     return (
        <div className="countdown">
            <p>Offer expires in:</p>
            <div>
                <TimeBox label="Days" value={days} />
                <TimeBox label="Hours" value={timer.hours} />
                <TimeBox label="Minutes" value={timer.minutes} />
                <TimeBox label="Seconds" value={timer.seconds} />
            </div>
        </div>                
     );
 };

 export default Countdown;