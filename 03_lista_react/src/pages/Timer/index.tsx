import { Component } from "react";
import { RegularButton } from "../../components/Button";
import {
  TimerContainer,
  TimerPoints,
  TimerReset,
  TimerSpan,
  TimerSquare,
} from "./styles";

type TimerProps = {};

type TimerStates = {
  minutes: number;
  seconds: number;
  resetTimer: boolean;
};

export class Timer extends Component<TimerProps, TimerStates> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0,
      resetTimer: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.resetTimerFunction = this.resetTimerFunction.bind(this);
  }

  startTimer = () => {
    this.setState({ seconds: this.state.seconds + 1 });
    if (this.state.seconds > 58) {
      this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
    }
  };

  onReset = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      minutes: 0,
      seconds: 0,
      resetTimer: !this.state.resetTimer,
    });
  };

  resetTimerFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      minutes: 0,
      seconds: 0,
      resetTimer: !this.state.resetTimer,
    });
    clearInterval(this.intervalHandle);
  };

  componentDidMount() {
    this.intervalHandle = setInterval(() => this.startTimer(), 1000);
  }

  componentDidUpdate() {
    clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(() => this.startTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  render() {
    return (
      <TimerContainer>
        <TimerSquare>
          {this.state.minutes < 10
            ? `0${this.state.minutes}`
            : this.state.minutes}
          <TimerSpan>minutos</TimerSpan>
        </TimerSquare>
        <TimerPoints>:</TimerPoints>
        <TimerSquare>
          {this.state.seconds < 10
            ? `0${this.state.seconds}`
            : this.state.seconds}
          <TimerSpan>segundos</TimerSpan>
        </TimerSquare>
        <TimerReset>
          <RegularButton
            style={{ minWidth: "100px", fontSize: "1rem" }}
            onClick={this.resetTimerFunction}
          >
            Reset
          </RegularButton>
        </TimerReset>
      </TimerContainer>
    );
  }
}
