import { FaCreditCard, FaShoppingCart } from "react-icons/fa";
import { IListaProdutos } from "../../../../assets/list-products-obj";
import { AddQuoteButton } from "../../../../components/Button";
import { productPriceReais } from "../../utils";
import { CartItem } from "../CartItem";
import {
  CartBody,
  CartContainer,
  CartFooter,
  CartHeader,
  CartTotalPrice,
} from "./style";

export function Cart(props: {
  cartItems: IListaProdutos[];
  totalPrice: number;
}) {
  return (
    <CartContainer>
      <CartHeader>
        <FaShoppingCart style={{ marginRight: "10px" }} />
        Meu Carrinho
      </CartHeader>
      <CartBody>
        {props.cartItems.map((prod: IListaProdutos) => {
          return <CartItem product={prod} key={prod.id} />;
        })}
      </CartBody>
      <CartFooter>
        <CartTotalPrice>
          Total: {productPriceReais(props.totalPrice)}
        </CartTotalPrice>
        <AddQuoteButton>
          <FaCreditCard style={{ marginRight: "10px" }} />
          Finalizar Compra
        </AddQuoteButton>
      </CartFooter>
    </CartContainer>
  );
}
