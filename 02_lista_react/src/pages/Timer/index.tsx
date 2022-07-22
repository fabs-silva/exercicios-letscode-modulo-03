import { useEffect, useState } from 'react';
import { RegularButton } from '../../components/Button';
import {
  TimerContainer,
  TimerPoints,
  TimerReset,
  TimerSpan,
  TimerSquare,
} from './styles';

export function Timer() {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [resetTimer, setResetTimer] = useState<boolean>(false);

  function resetTimerFunction(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setMinutes(0);
    setSeconds(0);
    setResetTimer(!resetTimer);
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds > 58) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <TimerContainer>
      <TimerSquare>
        {minutes < 10 ? `0${minutes}` : minutes}
        <TimerSpan>minutos</TimerSpan>
      </TimerSquare>
      <TimerPoints>:</TimerPoints>
      <TimerSquare>
        {seconds < 10 ? `0${seconds}` : seconds}
        <TimerSpan>segundos</TimerSpan>
      </TimerSquare>
      <TimerReset>
        <RegularButton
          style={{ minWidth: '100px', fontSize: '1rem' }}
          onClick={resetTimerFunction}
        >
          Reset
        </RegularButton>
      </TimerReset>
    </TimerContainer>
  );
}
