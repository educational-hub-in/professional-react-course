import { useState, useEffect } from "react";

function App() {
  const [minute, setMinute] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);

  // Format time with leading zeros
  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  // Start the timer
  const startTimer = () => {
    if (minute > 0) {
      setTimeLeft(minute * 60);
    }
  };

  // Timer logic
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      new Audio("/alarm.wav").play();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleMinuteChange = (value) => {
    setMinute((prevMinute) => {
      const newMinute = prevMinute + value;
      if (newMinute < 0) {
        return 0;
      } else if (newMinute >= 60) {
        return 59;
      } else {
        return newMinute;
      }
    });
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    const value = parseInt(event.target.value, 10) || 0;
    console.log(value);
    if (value < 0) {
      setMinute(0);
    } else if (value >= 60) {
      console.log("MORE THAN 60");
      setMinute(59);
    } else {
      setMinute(value);
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <section>
        <h1>Stay Focused</h1>
        <div className="clock" style={{ fontSize: "2rem" }}>
          {formatTime(Math.floor(timeLeft / 60))}:{formatTime(timeLeft % 60)}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            margin: "15px",
          }}
        >
          <button onClick={() => handleMinuteChange(-1)}>-</button>
          <input
            type="number"
            value={minute}
            onChange={handleInputChange}
            style={{ width: "60px", textAlign: "center" }}
          />
          <button onClick={() => handleMinuteChange(1)}>+</button>
        </div>

        <button onClick={startTimer} style={{ marginTop: "20px" }}>
          Start Timer
        </button>
      </section>
    </main>
  );
}

export default App;
