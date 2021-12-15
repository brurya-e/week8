import "./checkbox.css"
import React from "react";

const Checkbox = ({ text,checkedFlage}) => {
    return (
        <div>
            <input
                type={"checkbox"}
                name={text}
                checked ={checkedFlage}
            />
            <label for={text}>{text}</label>
        </div >
    );
};

export default Checkbox;
