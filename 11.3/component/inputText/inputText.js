import "./inputText.css"
import React from "react";

const InputText = ({ name, input, text, callBack }) => {
    return (
        <div>
            <label for={name}>{text}</label>
            <input
                type={"text"}
                name={name}
                value={input || ""}
                onChange={(e) => callBack(name, e.target.value)}
            />

        </div >
    );
};

export default InputText;
