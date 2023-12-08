import React from 'react';

function Item(props){
    return <li key={props.itemName} onClick={props.handleDelete}>{props.itemName}</li>;
};

export default Item;