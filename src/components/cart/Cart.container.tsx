import * as R from 'ramda';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as selectors from 'src/redux/cart/cart.selector';
import CartComponent from './Cart.component';
import { AddQuantity, removeFromCart, removeQuantity } from 'src/redux/cart/cart.duck';

const mapStateToProps = R.applySpec({
  cartList: selectors.cartListSelector,
  isCartEmpty: selectors.isCartEmptySelector,
  totalItem: selectors.productCountSelector,
  totalCost: selectors.totalCostSelector,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(
    {
      AddQuantity,
      removeFromCart,
      removeQuantity,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
