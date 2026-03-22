import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNotification, hideNotification } from "../../redux/notificationSlice";
import styles from "./Notification.module.scss";

const Notification = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector(selectNotification);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  const activeClass = message ? styles.active : "";
  const typeClass = styles[type] || styles.info;

  return (
    <div className={`${styles.notification} ${activeClass} ${typeClass}`}>
      {message}
    </div>
  );
};

export default Notification;