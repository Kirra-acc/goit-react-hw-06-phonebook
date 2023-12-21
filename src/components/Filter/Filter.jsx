import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { setFilter } from '../../store/phonebookSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      className={s.input}
      onChange={handleFilter}
      type="text"
      placeholder="Search by contact name"
    />
  );
};
