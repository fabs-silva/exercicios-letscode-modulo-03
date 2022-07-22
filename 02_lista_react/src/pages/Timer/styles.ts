import styled from 'styled-components';
import { variables } from '../../Theme/Theme';

const { colors, fontSizes } = variables;

const TimerContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
  width: 70%;
`;

const TimerSquare = styled.div`
  background-color: ${colors.lightGray};
  color: ${colors.mainBlack};
  padding: 1rem;
  justify-self: center;
  border-radius: 0.5rem;
  font-size: calc(${fontSizes.xl} * 4);
  text-align: center;
`;

const TimerSpan = styled.span`
  font-size: ${fontSizes.lg};
  display: block;
  text-align: center;
`;

const TimerPoints = styled.p`
  color: ${colors.mainGreen};
  justify-self: center;
  font-size: calc(${fontSizes.xl} * 4);
`;

const TimerReset = styled.div`
  grid-column: span 3;
  justify-self: center;
`;

export { TimerContainer, TimerSquare, TimerSpan, TimerPoints, TimerReset };
