import Button from '../Utils/Button';
import styles from './ListItem.module.css';
import PropTypes from 'prop-types';

const ListItem = ({ contact: { name, number, id } }) => {
  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {name} : {number}
      </span>
      <Button text="Delete" id={id} />
    </li>
  );
};
ListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
export default ListItem;
