import { FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import {
  IListaProdutos,
  listaProdutos,
} from '../../../../assets/list-products-obj';
import { AddQuoteButton } from '../../../../components/Button';
import { CartItem } from '../CartItem';
import {
  CartBody,
  CartContainer,
  CartFooter,
  CartHeader,
  CartTotalPrice,
} from './style';

export function Cart() {
  return (
    <CartContainer>
      <CartHeader>
        <FaShoppingCart style={{ marginRight: '10px' }} />
        Meu Carrinho
      </CartHeader>
      <CartBody>
        {listaProdutos.map((prod: IListaProdutos, index: number) => {
          if (index >= 3) {
            return null;
          }
          return <CartItem product={prod} key={prod.id} />;
        })}
      </CartBody>
      <CartFooter>
        <CartTotalPrice>Total: </CartTotalPrice>
        <AddQuoteButton>
          <FaCreditCard style={{ marginRight: '10px' }} />
          Finalizar Compra
        </AddQuoteButton>
      </CartFooter>
    </CartContainer>
  );
}
