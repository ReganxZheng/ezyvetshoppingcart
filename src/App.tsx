import * as R from 'ramda';
import React, { useEffect } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { Grid, AppBar, Toolbar, IconButton, Badge } from '@material-ui/core';
import { connect } from 'react-redux';

import * as cartSelectors from './redux/cart/cart.selector';
import * as selectors from './redux/product/product.selector';
import Cart from './components/cart';
import Product from './components/product';
import image from './images/ezyvet.jpg';
import { Product as ProductType, getAllProducts } from './redux/product/product.duck';
import { useDrawerProps } from './hooks/useDrawerProps';

const GridContainer = styled(Grid).attrs({
  container: true,
  spacing: 2,
})`
  padding: 0 20px;
  margin: 0 !important;
`;

const EzyVetImage = styled.img.attrs({
  src: image,
})`
  width: 100px;
`;

const Header = styled(Toolbar).attrs({
  position: 'static',
})`
  justify-content: space-between;
  padding: 0 42px;
`;

type Actions = {
  getAllProducts: Function;
};

interface Props {
  actions: Actions;
  productList: ProductType[];
  productCount: number;
}

const App = ({ actions, productList, productCount }: Props) => {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDrawerProps();

  useEffect(() => {
    actions.getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App" data-testid="App">
      <AppBar position="static">
        <Header>
          <IconButton disabled edge="start" color="inherit">
            <EzyVetImage />
          </IconButton>
          <IconButton color="inherit" onClick={() => openDrawer()}>
            <Badge badgeContent={productCount} color="secondary" data-testid="Cart">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Header>
      </AppBar>
      <GridContainer container>
        {productList.map((item: ProductType, index) => (
          <Product key={index} product={item} />
        ))}
      </GridContainer>
      <Cart isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </div>
  );
};

const mapStateToProps = R.applySpec({
  productList: selectors.productListSelector,
  productCount: cartSelectors.productCountSelector,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(
    {
      getAllProducts,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
