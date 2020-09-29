import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import ProductComponent from './Product.component';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators({}, dispatch),
});
export default connect(null, mapDispatchToProps)(ProductComponent);
