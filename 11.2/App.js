import React from "react";
import Checkbox from "./checkboxes/checkbox";

const text = [
    { text: "i want this", id: 0 , checkedFlage : true },
    { text: "I want that too", id: 1, checkedFlage : true },
    { text: "I do not want it", id: 2, checkedFlage : false },
    { text: "I do not want that too", id: 3, checkedFlage : false }
];

class App extends React.Component {

    render() {
        return (
            <div>
                {text.map((checkbox) => {
                    return (
                        <Checkbox
                            key={checkbox.id}
                            text={checkbox.text}
                            checkedFlage={checkbox.checkedFlage}
                        />
                    );
                })}
            </div>
        );
    }

}

export default App;