import React from 'react';
import Item from './Item';

function Button(props){
    // function addItem(e){
    //     e.preventDefault();
    //     const list = document.getElementById("list");
    //     const newItem = document.getElementById("newItem").value;
    //     console.log(newItem);
    //     // list.appendChild(<Item id={newItem} key={newItem} itemName={newItem} />)
    // }
    return <button id="submitItem" value="submit" onClick={props.handleItem}>Add item</button>;
};

export default Button;