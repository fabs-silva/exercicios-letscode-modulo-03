import styled from 'styled-components';
import { variables } from '../../../../Theme/Theme';

const { colors, fontSizes, fontWeight } = variables;

const CartContainer = styled.section`
  width: 30%;
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -3px 0px 5px ${colors.blackAlpha};
  border: 1px solid ${colors.lightGray};
  padding: 1.5rem 2rem;
`;

const CartHeader = styled.div`
  font-size: ${fontSizes.lg};
  font-weight: ${fontWeight.xl};
  display: flex;
  align-items: center;
`;

const CartBody = styled.div`
  height: 80vh;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.6rem;
  overflow-y: auto;
`;

const EmptyCart = styled.p`
  font-size: ${fontSizes.sm};

  & i {
    font-size: ${fontSizes.md};
  }
`;

const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
`;

const CartTotalPrice = styled.div`
  font-size: ${fontSizes.md};
  font-weight: ${fontWeight.lg};
  text-align: right;
  align-self: flex-end;
`;

export {
  CartBody,
  CartHeader,
  CartContainer,
  CartTotalPrice,
  EmptyCart,
  CartFooter,
};
