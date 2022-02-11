import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contacts/contacts-actions";
import styles from "./Filter.module.scss";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const onFindContact = (event) =>
    dispatch(actions.filterContact(event.target.value));

  return (
    <label className={styles.Label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        className={styles.Input}
        onChange={onFindContact}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
