import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoLists = (props) => {
    const [line, setLine] = useState(false);
    const cutit = () => {
        setLine(true);
    }
    return (
        <>
            <div className="todo_cancel">
                <p className="todo_style" 
                //   onClick={() => {
                //     props.onSelect(props.id);
                //   }}
                  ><span onClick={cutit}><DeleteIcon /></span></p>
                <li style={{ textDecoration: line ? 'line-through' : 'none' }}> {props.text} </li>
            </div>
        </>
    );
}


export default ToDoLists;