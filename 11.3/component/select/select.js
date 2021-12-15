import "./select.css"
import React from "react";

const Select = ({ value ,value1 ='0-15',value2= '16-25',value3 ='25-40',value4='40-99', text='age', callBack }) => {
    return (
        <label>
            {text}:
            <select 
            value={value}
            onChange={(e) => callBack(e.target.value)}
            >
                <option value={value1}> {value1} </option>
                <option value={value2}> {value2} </option>
                <option value={value3}> {value3} </option>
                <option value={value4}> {value4} </option>
            </select>
        </label>

    );
};

export default Select;
