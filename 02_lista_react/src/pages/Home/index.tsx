import styled from 'styled-components';
import { variables } from '../../Theme/Theme';

const { fontSizes } = variables;

const HomeContainer = styled.section`
  font-size: ${fontSizes.sm};
`;

export function Home() {
  return (
    <HomeContainer>Clique em algum link do menu para continuar</HomeContainer>
  );
}
