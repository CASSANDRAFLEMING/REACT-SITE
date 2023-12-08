import React from 'react';
import Item from './Item';

function List(props){
    // const listLength = Math.random() * 15;
    // const listArray = [];
    // for (let x = 0; x < listLength; x++){
    //     listArray.push(<Item key={x} itemName='randomItem' />);
    // }
    return (
        <div id="list">
            <ul>
                {props.list.map(item => {return item})}
            </ul>
        </div>
    )
};

export default List;