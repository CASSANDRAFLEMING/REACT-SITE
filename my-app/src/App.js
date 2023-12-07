import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import List from './List';

function App() {
  return (
    <div>
        {<Header />}
        <main>
          {<List />}
        </main>
    </div>
  );
}

export default App;
