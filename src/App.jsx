import AddContactForm from "./Components/AddContactForm/AddContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Notification from "./Components/Notification/Notification";
import styles from "./App.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, selectContactsStatus } from "./redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectContactsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContacts());
    }
  }, [status, dispatch]);

  return (
    <div className={styles.appContainer}>
      <Notification />
      <h1>Phonebook</h1>
      <AddContactForm /> 
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

// //----------------V3-------------------------
// import AddContactForm from "./Components/AddContactForm/AddContactForm";
// import ContactList from "./Components/ContactList/ContactList";
// import Filter from "./Components/Filter/Filter";
// import styles from "./App.module.scss";

// const App = () => (
//   <div className={styles.appContainer}>
//     <h1>Phonebook</h1>
//     <AddContactForm />
//     <Filter />
//     <ContactList />
//   </div>
// );

// export default App;








//----------------V2-------------------------

// import { useState, useEffect, useRef, useMemo } from "react"; 
// import { nanoid } from "nanoid";
// import AddContactForm from "./Components/AddContactForm/AddContactForm";
// import ContactList from "./Components/ContactList/ContactList";
// import Filter from "./Components/Filter/Filter";
// import styles from "./App.module.scss";

// const defaultContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem("contacts");
//     return savedContacts ? JSON.parse(savedContacts) : defaultContacts;
//   });

//   const [filter, setFilter] = useState("");

//   const isFirstRender = useRef(true);

//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       return;
//     }
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]); 

//   const addContact = (name, number) => {
//     const isDuplicate = contacts.some(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (isDuplicate) {
//       alert(`${name} is already in contacts!`);
//       return;
//     }
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

//   const handleDelete = (id) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== id)
//     );
//   };

//   const handleFilterChange = (filterValue) => {
//     setFilter(filterValue);
//   };

//   const filteredContacts = useMemo(() => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }, [contacts, filter]); 

//   return (
//     <div className={styles.appContainer}>
//       <h1>Phonebook</h1>
//       <AddContactForm addContact={addContact} />
//       <Filter filter={filter} onFilterChange={handleFilterChange} />
//       <ContactList contacts={filteredContacts} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default App;






//----------------V1-------------------------


// import { Component } from "react";
// import { nanoid } from "nanoid";
// import AddContactForm from "./Components/AddContactForm/AddContactForm";
// import ContactList from "./Components/ContactList/ContactList";
// import Filter from "./Components/Filter/Filter";
// import styles from "./App.module.scss";

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem("contacts");
//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     } else {
//       this.setState({
//         contacts: [
//           { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//           { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//           { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//           { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//         ],
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = (name, number) => {
//     const isDuplicate = this.state.contacts.some(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (isDuplicate) {
//       alert(`${name} is already in contacts!`);
//       return;
//     }
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   handleDelete = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id),
//     }));
//   };

//   handleFilterChange = (filterValue) => {
//     this.setState({ filter: filterValue });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div className={styles.appContainer}>
//         <h1>Phonebook</h1>
//         <AddContactForm addContact={this.addContact} />
//         <Filter
//           filter={this.state.filter}
//           onFilterChange={this.handleFilterChange}
//         />
//         <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
//       </div>
//     );
//   }
// }

// export default App;
