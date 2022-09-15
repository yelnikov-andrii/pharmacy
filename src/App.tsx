import React from 'react';
import './App.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

const App: React.FC = () => {
  return (
    <>
    <Header />
    <Main />
    <footer>
      Footer
    </footer>
    </>
  );
}

export default App;
