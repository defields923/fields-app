import { connect } from 'react-redux';
import { addNumber } from 'State/actions/countActions';
import { API_CALL_REQUEST } from 'State/actions/dogsActions';
import App from './App';

const mapStateToProps = ({ count, dogs }) => ({
  count,
  fetching: dogs.fetching,
  dog: dogs.dog,
  error: dogs.error,
});

const mapDispatchToProps = dispatch => ({
  addNumber,
  onRequestDog: () => dispatch({ type: API_CALL_REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
