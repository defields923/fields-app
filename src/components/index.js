import { connect } from 'react-redux';
import App from './App';
import { addNumber } from 'State/actions/example';

const mapStateToProps = ({ count }) => ({
  count
});

export default connect(mapStateToProps, { addNumber })(App);
