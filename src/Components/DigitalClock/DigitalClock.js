import { useEffect, useState } from "react";
// HH:MM:SS
const DigitalClock = () => {

    const [time, setTime] = useState("");
    const [timeFormat, setTFormat] = useState(false);
    const [clock, setClock] = useState(true);
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


    const updateClock = () => {
        let t = (new Date());
        const hh = t.getHours();
        const mm = t.getMinutes().toString().padStart(2, '0');
        const ss = t.getSeconds().toString().padStart(2, '0');
        const formattedHH = hh.toString().padStart(2, '0');
        const currentDay = days[t.getDay()].toString().toUpperCase();
        if (timeFormat) {
            const dHour = hh === 0 ? 12 : (hh > 12 ? hh - 12 : hh);
            const formattedDHour = dHour.toString().padStart(2, '0');
            let formattedTime = `${formattedDHour}:${mm}:${ss}`;
            const format = formattedTime + " " + (Number(hh) >= 12 ? "PM" : "AM");
            setTime(`${format} - ${currentDay}`);
        }
        else {
            let formattedTime = `${formattedHH}:${mm}:${ss}`;
            setTime(`${formattedTime} - ${currentDay}`);

        }

    }
    useEffect(() => {
        updateClock();
        if (clock) {
            const interval = setInterval(updateClock, 1000)
            return () => clearInterval(interval);
        }
    }, [timeFormat, clock])


  return (
  <section style={{ padding: "20px", fontFamily: "Arial, sans-serif",
        border: "6px solid #ababe2",
        width: "500px",
        borderRadius: "20px",
        margin: "auto",
        background: "antiquewhite"
   }}>
    <header>
      <h2 style={{ marginBottom: "20px" }}>Change Format</h2>
    </header>

    <main>
      <div style={{marginBottom: "20px" }}>
        <button
          onClick={() => setTFormat(!timeFormat)}
          style={{
            padding: "10px 15px",
            border: "2px solid orange",
            borderRadius: "6px",
            backgroundColor: "#fff",
            cursor: "pointer",    
            marginRight: "10px"
          }}
        >
          {timeFormat ? "24 Hour" : "12 Hour"}
        </button>

        <button
          onClick={() => setClock(!clock)}
          style={{
            padding: "10px 15px",
            border: "2px solid orange",
            borderRadius: "6px",
            backgroundColor: "#fff",
            cursor: "pointer"
          }}
        >
          {clock ? "Pause" : "Resume"}
        </button>
      </div>

      {time && (
        <article aria-label="Current time">
          <h5 style={{ margin: 0 }}>Time - {time}</h5>
        </article>
      )}
    </main>
  </section>
);

}

export default DigitalClock;
