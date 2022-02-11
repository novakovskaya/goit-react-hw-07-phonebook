import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contacts/contacts-actions";
import styles from "./ContactList.module.scss";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const normalizedFilter = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = normalizedFilter(contacts, filter);

  return (
    <ul className={styles.List}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.Item}>
          <p className={styles.Contact}>{name}:</p>
          <p className={styles.Number}>{number}</p>

          <button
            type="button"
            className={styles.Button}
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
