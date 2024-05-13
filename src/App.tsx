import React from 'react';
import style from './App.module.scss';
import { Container } from './module/Container/Container';
import { Search } from './module/Search/Search';
import { Result } from './module/Result/Result';

function App() {
  return (
    <div className={style.app}>
      <Container>
        <Search />
        <Result />
      </Container>
    </div>
  );
}

export default App;
