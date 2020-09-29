import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { Product } from 'src/redux/product/product.duck';
import * as Styled from './product.styled';

type Actions = {
  addToCart: Function;
};

interface Props {
  product: Product;
  actions: Actions;
}

export default ({ product, actions }: Props) => {
  const { name, price } = product;

  return (
    <Styled.GridItem data-testid="Product">
      <Styled.ProductCard>
        <Styled.ProductEmptyImg>Image</Styled.ProductEmptyImg>
        <Styled.ProductCardContent>
          <Styled.ProductName>{name}</Styled.ProductName>
          <Styled.ProductPrice>${price}</Styled.ProductPrice>
        </Styled.ProductCardContent>
        <Styled.ActionWrapper>
          <Styled.AddToCardButton startIcon={<AddShoppingCartIcon />} onClick={() => actions.addToCart(product)}>
            Add to Cart
          </Styled.AddToCardButton>
        </Styled.ActionWrapper>
      </Styled.ProductCard>
    </Styled.GridItem>
  );
};
