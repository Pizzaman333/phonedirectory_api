import styles from "./Contact.module.scss";

const Contact = ({ name, tel, id, onDelete }) => (
  <li className={styles.contact}>
    <p>
      {name}: {tel}
    </p>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

export default Contact;