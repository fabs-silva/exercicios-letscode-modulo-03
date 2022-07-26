import styled from "styled-components";
import { IListaProdutos } from "../../../../assets/list-products-obj";
import { variables } from "../../../../Theme/Theme";
import { ProductItem } from "../ProductItem";

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

export function Products(props: {
  productsList: IListaProdutos[];
  passListAsProps: (product: IListaProdutos) => void;
}) {
  return (
    <ProductsContainer>
      {props.productsList.map((prod: IListaProdutos) => {
        return (
          <ProductItem
            product={prod}
            passListAsProps={props.passListAsProps}
            key={prod.id}
          />
        );
      })}
    </ProductsContainer>
  );
}
