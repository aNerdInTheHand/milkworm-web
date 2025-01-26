import { useState, useEffect } from "react";
import "./Countdown.css";

interface CountdownProps {
  releaseDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ releaseDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(releaseDate).getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, [releaseDate]);

  return (
    <div className="countdown">
      <h3>RELEASING IN</h3>
      <div className="countdown-timer">
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.days}</span>
          <span className="countdown-label">DAYS</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.hours}</span>
          <span className="countdown-label">HOURS</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.minutes}</span>
          <span className="countdown-label">MINUTES</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.seconds}</span>
          <span className="countdown-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
}
