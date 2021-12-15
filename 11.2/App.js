import React from "react";
import Checkbox from "./checkboxes/checkbox";

const text = [
    { text: "blue", id: 0 , checkedFlage : true },
    { text: "red", id: 1, checkedFlage : true },
    { text: "yellow", id: 2, checkedFlage : false },
    { text: "green", id: 3, checkedFlage : false }
];

class App extends React.Component {

    // state = { 
    //     selectedColor: ''
      
    // }

    // updateColor = (e)=> {
    //     this.setState({ selectedColor: e.target.innerHTML })
    //     console.log(e.target.innerHTML)
    // }

    render() {
        return (
            <div>
                {text.map((checkbox) => {
                    return (
                        <Checkbox
                            // callBack={this.updateColor}
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