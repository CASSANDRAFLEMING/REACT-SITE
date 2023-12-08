import React from 'react';

function Item(props){
    return <li key={props.id} id={props.id} onClick={props.handleDelete}>{props.itemName}</li>;
};

export default Item;