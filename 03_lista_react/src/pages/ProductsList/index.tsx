import { useState } from "react";
import styled from "styled-components";
import { IListaProdutos, listaProdutos } from "../../assets/list-products-obj";
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";

const ProductsListContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  padding-bottom: 2rem;
`;

export function ProductsList() {
  const [updatedList, setUpdatedList] = useState<IListaProdutos[]>(
    [] as IListaProdutos[]
  );

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const passListAsProps = (updateProduct: IListaProdutos) => {
    setUpdatedList([...updatedList, updateProduct]);
    setTotalPrice(totalPrice + updateProduct.amount * updateProduct.price);
  };

  return (
    <ProductsListContainer>
      <Products
        productsList={listaProdutos}
        passListAsProps={passListAsProps}
      />
      <Cart cartItems={updatedList} totalPrice={totalPrice} />
    </ProductsListContainer>
  );
}
