import { useState } from 'react';
import React from "react";
const AdditionComponent = () =>{
    const [fruits, setFruites] = useState(["Banana", "Orange"]);
    const addFruits = () =>{
        setFruites([...fruits, "Mango"]);
    }
    console.log("Fruits:", fruits);
    
    return(
        <div>
            <button>Click = {() => addFruits()}</button>
        </div>
    )
}
export default AdditionComponent;