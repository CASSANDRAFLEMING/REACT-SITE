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
          <div id="userInput">
              <p>"new item"</p>
              <form id="newItemForm">
                  <label for="item">new todo</label>
                  <input type="text" name="item" id="item" />
              </form>
              <button id="submitItem" value="submit"/>
          </div>
        </main>
    </div>
  );
}

export default App;
