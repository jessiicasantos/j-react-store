 import { promotions } from "../data.json";
 import { useEffect, useState } from "react";
 import TimeBox from "./TimeBox";

 const Countdown = () => {
     const deadline: any = new Date('March 24 2025');  // prazo final, target date
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
        const currentDate = new Date();
        const timeLeft = deadline.getTime() - currentDate.getTime();

        const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
        const hours = 23 - currentDate.getHours();
        const minutes = 59 - currentDate.getMinutes();
        const seconds = 59 - currentDate.getSeconds();

        setDays(days);
        setTimer({ hours, minutes, seconds });
    };

     useEffect(() => {
         calculateTimeLeft();
         const intervalId = setInterval(calculateTimeLeft, 1000);

         return () => clearInterval(intervalId);
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