import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import List from './List';



function App() {
    const [list, setList] = useState([]);

    const updateItem = (e) => {
        e.preventDefault();
        const currentItem = document.getElementById('newItem');
        const value = currentItem.value;
        setList((prev) => {
                return [...prev, value]
            })
        currentItem.value = '';
    }

    const deleteMe = (e) => {
        // const id = (e.currentTarget.id);
        // setList((prev) => {
        //     prev.filter((item) => { return item.id !== id});
        // })
        // console.log(list);
        // const currentItem = document.getElementById('newItem');
        // const value = currentItem.value;
        // currentItem.value = '';
        const targetID = e.currentTarget.id;
        const node = document.getElementById(targetID);
        if (node.parentNode) {
            node.parentNode.removeChild(node)
        }
    }

    const clearList = (e) => {
        e.preventDefault();
        setList([]);
    }




  return (
    <div>
        {<Header />}
        <main>
          {<List list={list} handleDelete={deleteMe}/>}
            <br />

            <br />
            <div id="userInput">
                <form id="newItemForm">
                    <label htmlFor="newItem">new todo</label>
                    <input type="text" name="newItem" id="newItem"/>
                    <button id="updateItem" onClick={updateItem}>Add item</button>
                </form>
                <br/>
                <br/>
                <button id="clearItems" onClick={clearList}>Clear List</button>
                <br/>
                <br/>
                <p>To remove an item, simply click on it!</p>

            </div>
        </main>
    </div>
  );
}

export default App;
