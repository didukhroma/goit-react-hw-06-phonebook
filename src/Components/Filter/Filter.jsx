import { connect } from 'react-redux';
import filterActions from '../../redux/filter/filter-actions';
import Input from '../Utils/Input';
import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter }) => {
  return (
    <Input type="text" name="find contacts by name" onChange={onChangeFilter} />
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: ({ target: { value } }) =>
    dispatch(filterActions.changeFilter(value)),
});
export default connect(null, mapDispatchToProps)(Filter);
