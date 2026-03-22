import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filterSlice";
import { showNotification } from "../../redux/notificationSlice"; 
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.scss";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));

      dispatch(showNotification({ 
        message: "Contact deleted successfully!", 
        type: "info" 
    }));
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          name={contact.name}
          tel={contact.number}
          key={contact.id}
          id={contact.id}
          onDelete={handleDelete}  
        />
      ))}
    </ul>
  );
};

export default ContactList;
