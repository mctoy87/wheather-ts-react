import { useState } from 'react';
import style from './Search.module.scss';
import {ReactComponent as SearchIcon} from './search.svg';

type Props = {};

export const Search = (props: Props) => {
  const [search, setSearch] = useState('');

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  // чтобы компонент стал управляемым
  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
  }

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input type='search' 
        className={style.search} 
        onChange={handleChange}
        value={search}
      />
      <button className={style.btn} type='submit'>
        <SearchIcon/>
      </button>
    </form>
  )
};