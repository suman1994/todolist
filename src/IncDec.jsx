import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const IncDec = () => {
    const [num, setNum] = useState(0);
    const incNum = () => {
        setNum(num+1);
    }
    const decNum = () => {
        if(num > 0){
            setNum(num-1);
        }else{
            alert('you can\'t dec no from 0');setNum(0);
        }
    }
    return(
        <>
            <h1>{num}</h1>
            <div className="btn_div">
                <Tooltip title="Add">
                    <Button onClick={incNum}> <AddIcon /> </Button>
                </Tooltip>
                <Tooltip title="Remove">
                    <Button color="secondary" onClick={decNum}> <RemoveIcon /> </Button>
                </Tooltip>
            </div>
        </>
    )
}

export default IncDec;