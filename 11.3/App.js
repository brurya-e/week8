import React from "react";
import InputText from "./component/inputText/inputText";
import Select from './component/select/select'

class App extends React.Component {

    state = {
        fName: {
            name : "fName",
            input : '',
            text : "enter your first name"
        },
        lName: {
            name : "lName",
            input : '',
            text : "enter your last name"
        },
        age:{
            value : ''
        }
    }

    updateFname = (_input) => {
        this.setState({ fName: { ...this.state.fName, input: _input } })
    }

    updateLname = (_input) => {
        this.setState({ lName: { ...this.state.lName, input: _input } })
    }
    updateAge = (_input) => {
        this.setState({ age: { ...this.state.age, value: _input } })
    }

    render() {
        return (
            <form /* onSubmit={handleSubmit}*/>
                <InputText
                    name={this.state.fName.name}
                    input={this.state.fName.input}
                    text={this.state.fName.text}
                    callBack={this.updateFname}

                />
                 <InputText
                    name={this.state.lName.name}
                    input={this.state.lName.input}
                    text={this.state.lName.text}
                    callBack={this.updateLname}

                />
                <Select
                value = {this.state.age.value}
                 callBack={this.updateAge}
                />
          
            </form>
        );
    }

}

export default App;