import React from 'react';
import Item from './Item';

function List(props){

    if (props.list.length !== 0){
        const list = props.list.map((item, index) => <li id={index} onClick={props.handleDelete}>{item}</li>);
        return (
            <div id="listBox">
                <ul id={"list"}>
                    {list}
                </ul>
            </div>
        )
    }else{
        return <p>You have no todo items!</p>;
    }

    List.defaultProps = {
        list: []
    }


};

export default List;