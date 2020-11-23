import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
import IncDec from './IncDec';
import Clock from 'react-digital-clock';

const App = () =>{

    // uisng hooks
    const [inputList, setInputList] = useState('');
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList];
        });
        setInputList('');
    };
    
    // const deleteItems = (id) => {
    //     setItems((oldItems) => {
    //         // filter is use for delete elements
    //         return oldItems.filter((arrElem,index) => {
    //             return index !== id;
    //         });
    //     });
    // }
    return(
    <>
        <div className="main_div">
            <div className="center_div">
                <Clock />
                <br />
                <h1> ToDo List </h1>
                <br />
                <input type="text" value={inputList} placeholder="Add New Items" onChange={itemEvent} />
                <button onClick={listOfItems}> + </button>

                <ol>
                    {
                        Items.map((itemval,index) => {
                            return <ToDoLists key={index} id={index} 
                            // onSelect={deleteItems} 
                            text={itemval} />;
                        })
                    }
                </ol>
                <IncDec />
            </div><br />
        </div>
    </>);
}

export default App;