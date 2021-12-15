import "./checkbox.css"
import React from "react";

const Checkbox = ({ text,checkedFlage/*, callBack*/ }) => {
    console.log (text)
    console.log(checkedFlage)
    return (
        <div>
            <input
                type={"checkbox"}
                name={text}
                // onChange={()=>callBack(checked)}
                checked ={checkedFlage}
            />
            <label for={text}>{text}</label>
        </div >
    );
};

export default Checkbox;
