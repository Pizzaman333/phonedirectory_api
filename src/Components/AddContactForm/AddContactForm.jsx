import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";  
import { addContact, selectContacts } from "../../redux/contactsSlice"; 
import { showNotification } from "../../redux/notificationSlice"; 
import { nanoid } from "nanoid";
import styles from "./AddContactForm.module.scss";

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  const [nameInputId] = useState(() => nanoid());
  const [telInputId] = useState(() => nanoid());

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      dispatch(showNotification({ 
        message: `${name} is already in contacts!`, 
        type: "error" 
      }));
      return;
    }

   dispatch(addContact({ name, number }));

    dispatch(showNotification({ 
        message: "Contact added successfully!", 
        type: "success" 
    }));

    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "name") setName(value);
    if(name === "number") setNumber(value);
  };

  return (
    <form className={styles.addContactForm} onSubmit={handleSubmit}>
       <label htmlFor={nameInputId}>Name</label>
       <input 
         id={nameInputId} 
         type="text" 
         name="name" 
         value={name} 
         onChange={handleChange} 
         required 
       />
       
       <label htmlFor={telInputId}>Number</label>
       <input 
         id={telInputId} 
         type="tel" 
         name="number" 
         value={number} 
         onChange={handleChange} 
         required 
       />
       
       <button type="submit">Add contact</button>
    </form>
  );
};

export default AddContactForm;
