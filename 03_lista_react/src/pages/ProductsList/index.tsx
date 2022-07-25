import { Cart } from './components/Cart';
import { Products } from './components/Products';

import styled from 'styled-components';

const ProductsListContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  padding-bottom: 2rem;
`;

export function ProductsList() {
  return (
    <ProductsListContainer>
      <Products />
      <Cart />
    </ProductsListContainer>
  );
}
