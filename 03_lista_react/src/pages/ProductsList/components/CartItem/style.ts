import styled from 'styled-components';
import { variables } from '../../../../Theme/Theme';

const { colors, fontSizes, fontWeight } = variables;

const CartItemContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  border: 1px dashed ${colors.mainGray};
  padding: 0.75rem;
`;

const CartProductDetails = styled.div`
  width: calc(100% - 76px);
`;

const CartProductName = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeight.lg};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CartProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CartProductPriceAmount = styled.div`
  display: flex;
  width: 70%;
  margin-top: 0.4rem;
  justify-content: space-between;
  align-items: center;
  font-size: calc(${fontSizes.sm} * 0.9);
  width: 100%;
`;

const CartProductPrice = styled.p`
  font-weight: ${fontWeight.sm};
`;

const CartProductAmount = styled.p``;

const CartProductImage = styled.img`
  max-width: 55px;
  border: 1px solid #dadada;
  padding: 0.3rem;
`;

const CartProductTotal = styled.p`
  font-size: calc(${fontSizes.sm} * 0.95);
  font-weight: ${fontWeight.md};
`;

export {
  CartItemContainer,
  CartProductImage,
  CartProductInfo,
  CartProductName,
  CartProductPrice,
  CartProductPriceAmount,
  CartProductAmount,
  CartProductTotal,
  CartProductDetails,
};
