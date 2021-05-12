import capitalize from '../../../utils/capitalize';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  name = 'input',
  pattern,
  title = 'input',
  onChange,
}) => {
  const text = capitalize(name);
  return (
    <label>
      <span className={styles.text}>{text}</span>
      <input
        className={styles.input}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
        onChange={onChange}
      />
    </label>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
