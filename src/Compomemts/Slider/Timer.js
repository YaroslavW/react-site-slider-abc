import React, {useState, useEffect} from "react";
import Slide from "react-reveal/Slide";

const Timer = () => {
  let deadline = dni();
  function dni() {
    var D = new Date();
    D.setDate(D.getDate() + 50);
    
    var month = D.getMonth();
    
    function LitMonth(month) {
      switch (month) {
        case 0:
          month = "Jan";
          break;
        case 1:
          month = "Feb";
          break;
        case 2:
          month = "Mar";
          break;
        case 3:
          month = "Apr";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "Jun";
          break;
        case 6:
          month = "Jul";
          break;
        case 7:
          month = "Aug";
          break;
        case 8:
          month = "Sep";
          break;
        case 9:
          month = "Oct";
          break;
        case 10:
          month = "Nov";
          break;
        case 11:
          month = "Dec";
          break;

        default:
          
      }
      return month;
    }
    month = LitMonth(month);
    var day = D.getDate();
    var year = D.getFullYear();
    D = month + " " + day + " " + year;
    return D;
  }
   
  const [days, setDays] = useState('0');
  const [hours , setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');

     const getTimeUntil = (deadline) =>{
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            console.log('Date passed')
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }    
    }
    useEffect(()=>{
      setInterval(()=> getTimeUntil(deadline),1000)
    },[seconds])
  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{days}</div>
            <div className="countdown_tag">Days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{hours}</div>
            <div className="countdown_tag">Hs</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{minutes}</div>
            <div className="countdown_tag">Min</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{seconds}</div>
            <div className="countdown_tag">Sec</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Timer;
