import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actionsContact from '../../../redux/contacts/contacts-actions';
import styles from './Button.module.css';
const Button = ({ type = 'button', text = 'Button', onDeletedById, id }) => {
  const handleClick = () => {
    if (!id) return;
    onDeletedById(id);
  };

  return (
    <button type={type} onClick={handleClick} className={styles.button}>
      {text}
    </button>
  );
};
const mapDispatchToProps = dispatch => ({
  onDeletedById: id => dispatch(actionsContact.deleteContact(id)),
});

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};
export default connect(null, mapDispatchToProps)(Button);
