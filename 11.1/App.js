import React from "react";
import Btn from "./Btn/Btn";

const colors = [
    { color: "blue", id: 0 },
    { color: "red", id: 1 },
    { color: "yellow", id: 2 },
    { color: "green", id: 3 }
];

class App extends React.Component {

    state = { 
        selectedColor: ''
      
    }

    updateColor = (e)=> {
        this.setState({ selectedColor: e.target.innerHTML })
        console.log(e.target.innerHTML)
    }

    render() {
        return (
            <div>
                <h1>The color selected is : {this.state.selectedColor}</h1>
                {colors.map((btn) => {
                    return (
                        <Btn
                            callBack={this.updateColor}
                            id={btn.id}
                            key={btn.id}
                            color={btn.color}
                        />
                    );
                })}
            </div>
        );
    }

}

export default App;