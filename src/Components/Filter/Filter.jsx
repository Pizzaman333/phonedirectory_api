import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../../redux/filterSlice";
import styles from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;

// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from '../../redux/filter/actions';
// import { getFilter } from '../../redux/filter/selectors';
// import styles from "./Filter.module.scss";

// const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(getFilter);

//   return (
//     <div className={styles.filterContainer}>
//       <p>Find contacts by name</p>
//       <input
//         type="text"
//         value={filter}
//         onChange={(e) => dispatch(setFilter(e.target.value))}
//         placeholder="Search by name"
//       />
//     </div>
//   );
// };

// export default Filter;

// import styles from "./Filter.module.scss";

// const Filter = ({ filter, onFilterChange }) => (
//   <div className={styles.filterContainer}>
//     <p>Find contacts by name</p>
//     <input
//       type="text"
//       value={filter}
//       onChange={(e) => onFilterChange(e.target.value)}
//       placeholder="Search by name"
//     />
//   </div>
// );

// export default Filter;
