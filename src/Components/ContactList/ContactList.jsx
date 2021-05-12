import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import { filteredData } from '../../utils/filter';

const ContactList = ({ contacts, filter }) => {
  const filteredContacts = filteredData(contacts, filter);
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};
export default connect(mapStateToProps)(ContactList);
