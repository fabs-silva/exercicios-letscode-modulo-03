import styled from 'styled-components';
import { variables } from '../../Theme/Theme';

const { colors, fontWeight } = variables;

const Button = styled.button`
  color: ${colors.mainWhite};
  font-weight: ${fontWeight.lg};
  padding: 0.75rem;
  max-width: 150px;
`;

export const AddQuoteButton = styled(Button)`
  background: ${colors.mainGreen};
`;

export const DeleteQuoteButton = styled(Button)`
  background: ${colors.mainRed};
`;
