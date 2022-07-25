import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IListaProdutos } from '../../../../assets/list-products-obj';
import { AddQuoteButton } from '../../../../components/Button';
import { getProductImage, productPriceReais } from '../../utils';
import {
  ProductBuyAndQuantity,
  ProductImage,
  ProductInfo,
  ProductItemContainer,
  ProductName,
  ProductPrice,
  ProductQuantity,
} from './style';

export function ProductItem(props: {
  product: IListaProdutos;
  passListAsProps: (product: IListaProdutos) => void;
}) {
  const [inputValue, setInputValue] = useState<number>(0);
  const [updateProduct, setUpdateProduct] = useState<IListaProdutos>(
    props.product
  );

  useEffect(() => {
    setUpdateProduct({
      ...props.product,
      amount: inputValue,
    });
  }, [inputValue]);

  return (
    <ProductItemContainer>
      <ProductImage src={getProductImage(props.product)} />
      <ProductName>
        <Link to="#">{props.product.name}</Link>
        <ProductInfo>
          <ProductPrice>{productPriceReais(props.product.price)}</ProductPrice>
        </ProductInfo>
      </ProductName>
      <ProductBuyAndQuantity>
        <ProductQuantity>
          <label>Qtde:</label>
          <input
            type="number"
            placeholder="ex: 2"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(parseInt(e.target.value));
            }}
          />
        </ProductQuantity>
        <AddQuoteButton onClick={() => props.passListAsProps(updateProduct)}>
          <FaCartPlus style={{ marginRight: '10px' }} />
          Comprar
        </AddQuoteButton>
      </ProductBuyAndQuantity>
    </ProductItemContainer>
  );
}
