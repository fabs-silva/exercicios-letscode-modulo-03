import { IListaProdutos } from '../../assets/list-products-obj';

const productPriceReais = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

const getProductImage = (product: IListaProdutos): string => {
  return product.image === ''
    ? 'https://www.cer-cavalos.com/images/not_found.png'
    : `${product.image}`;
};

export { productPriceReais, getProductImage };
