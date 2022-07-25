import styled from 'styled-components';
import { variables } from '../../../../Theme/Theme';

const { colors, fontSizes, fontWeight } = variables;

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  background-color: ${colors.mainWhite};
  width: 80%;
  box-shadow: 2px 3px 5px ${colors.blackAlpha};
`;

const ProductName = styled.div`
  font-weight: ${fontWeight.lg};
  width: 50%;
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-top: 0.5rem;
`;

const ProductPrice = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: ${fontWeight.md};
  font-size: ${fontSizes.md};
`;

const ProductImage = styled.img`
  max-width: 80px;
  border: 1px solid #dadada;
  padding: 0.3rem;
`;

const ProductBuyAndQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const ProductQuantity = styled.fieldset`
  display: flex;
  border: none;
  gap: 0.3rem;
  align-items: center;

  & label {
    font-size: calc(${fontSizes.sm} * 0.95);
  }

  & input {
    padding: 0.3rem;
    width: 60px;
    -moz-appearance: textfield;
  }
`;

export {
  ProductItemContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductBuyAndQuantity,
  ProductQuantity,
};
