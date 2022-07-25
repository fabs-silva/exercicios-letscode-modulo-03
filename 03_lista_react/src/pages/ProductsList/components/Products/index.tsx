import {
  IListaProdutos,
  listaProdutos,
} from '../../../../assets/list-products-obj';

import { useState } from 'react';
import styled from 'styled-components';
import { variables } from '../../../../Theme/Theme';
import { ProductItem } from '../ProductItem';

const { colors } = variables;

const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 70%;
  background-color: ${colors.lightGray};
  padding: 1.5rem 0;
`;

export function Products() {
  const [updatedList, setUpdatedList] =
    useState<IListaProdutos[]>(listaProdutos);

  const passListAsProps = (updateProduct: IListaProdutos) => {
    const filteredList = updatedList.filter(
      (prod) => prod.id !== updateProduct.id
    );
    console.log(updateProduct);
    setUpdatedList([...filteredList, updateProduct]);
  };

  return (
    <ProductsContainer>
      {listaProdutos.map((prod: IListaProdutos) => {
        return (
          <ProductItem
            product={prod}
            passListAsProps={passListAsProps}
            key={prod.id}
          />
        );
      })}
    </ProductsContainer>
  );
}
