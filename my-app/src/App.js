import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import List from './List';
import Button from './Button';
import Item from './Item';


function App() {
    const [list, setList] = useState([]);

    const updateItem = (e) => {
        e.preventDefault();
        const currentItem = document.getElementById('newItem')
        const newLI = <Item itemName={currentItem.value} />;
        setList((prev) => {
                return [...prev, newLI]
            })
        currentItem.value = '';
    }

  return (
    <div>
        {<Header />}
        <main>
          {<List list={list}/>}
            <br />

            <br />
          <div id="userInput">
              <form id="newItemForm">
                  <label for="newItem">new todo</label>
                  <input type="text" name="newItem" id="newItem"/>
                  <button onClick={updateItem}>Add item</button>
              </form>
              <br/>

          </div>
        </main>
    </div>
  );
}

export default App;
