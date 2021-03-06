import React from "react";
import InputText from "./component/inputText/inputText";
import Select from './component/select/select'
import TextErea from './component/textErea/textErea'

const fName = {
    name: "fName",
    text: "enter your first name"
};
const lName = {
    name: "lName",
    text: "enter your last name"
};
const fText = {
    row: 5,
    col: 40,
    name: "fText",
    text: "Free Text"
}

class App extends React.Component {

    state = {
        fName: '',
        lName: '',
        age: '',
        fText: '',
        formVisable: true,
        reviewVisable: false,
        endMsg : false
    }

    update = (name, input) => {
        console.log(name, input)
        this.setState({ ...this.state, [name]: input })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ formVisable: false })
        this.setState({reviewVisable: true })
    }
    handleBack =() => {
        this.setState({ formVisable: true })
        this.setState({reviewVisable: false })

    }
    handleSend =() => {
        this.setState({reviewVisable: false })
        this.setState({endMsg : true})
    }

    render() {
        if (this.state.formVisable)
        return (
            <form
                onSubmit={(e) => this.handleSubmit(e)}
            >
                <InputText
                    name={fName.name}
                    text={fName.text}
                    input={this.state.fName}
                    callBack={this.update}

                />
                <InputText
                    name={lName.name}
                    text={lName.text}
                    input={this.state.lName}
                    callBack={this.update}

                />
                <Select
                    value={this.state.age}
                    callBack={this.update}
                />

                <TextErea
                    name={fText.name}
                    text={fText.text}
                    input={this.state.fText}
                    callBack={this.update}
                // row={fText.row}
                // col={fText.col}   
                />

                <input type="submit" value="Continue" />
            </form>
            );
        else if (this.state.reviewVisable)
         return(
            // this.state.reviewVisable &&(
                <div>
                    <p> {this.state.fName}</p>
                    <p> {this.state.lName}</p>
                    <p> {this.state.age}</p>
                    <p> {this.state.fText}</p>
                    <button  onClick={this.handleBack}> Back </button>
                    <button  onClick={(e) => this.handleSend(e)}> Send </button>

               </div>

            );
            else
            return (
                <div>
                    <p> the form send</p>
                
               </div>
            )

    }

}

export default App;