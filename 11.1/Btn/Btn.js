import "./Btn.css"
import React from "react";

const Btn = ({ color, callBack, id}) => {
    return (
        <div>
            <button
                onClick={(e) => callBack(e)}
                className={`${color} btn`}
                id={id}
            >
                {color}
            </button>
        </div >
    );
};

export default Btn;
