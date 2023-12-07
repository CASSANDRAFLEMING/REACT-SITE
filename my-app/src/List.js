import React from 'react';
import Item from './Item';

function List(){
    const listLength = Math.random() * 15;
    const listArray = [];
    for (let x = 0; x < listLength; x++){
        listArray.push(<Item />);
    }
    return listArray;
};

export default List;