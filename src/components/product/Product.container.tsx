import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import ProductComponent from './Product.component';
import { addToCart } from 'src/redux/cart/cart.duck';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(
    {
      addToCart,
    },
    dispatch
  ),
});
export default connect(null, mapDispatchToProps)(ProductComponent);
