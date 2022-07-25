import { Link } from 'react-router-dom';
import { IListaProdutos } from '../../../../assets/list-products-obj';
import { getProductImage, productPriceReais } from '../../utils';
import {
  CartItemContainer,
  CartProductAmount,
  CartProductDetails,
  CartProductImage,
  CartProductInfo,
  CartProductName,
  CartProductPrice,
  CartProductPriceAmount,
  CartProductTotal,
} from './style';

export function CartItem(props: { product: IListaProdutos }) {
  const totalPrice = props.product.price * props.product.amount;
  return (
    <CartItemContainer>
      <CartProductImage src={getProductImage(props.product)} />

      <CartProductDetails>
        <CartProductName>
          <Link to="#">{props.product.name}</Link>
        </CartProductName>

        <CartProductInfo>
          <CartProductPriceAmount>
            <CartProductPrice>
              {productPriceReais(props.product.price)}
            </CartProductPrice>
            <CartProductAmount>{props.product.amount} un.</CartProductAmount>
          </CartProductPriceAmount>

          <CartProductTotal>
            Total: {productPriceReais(totalPrice)}
          </CartProductTotal>
        </CartProductInfo>
      </CartProductDetails>
    </CartItemContainer>
  );
}
