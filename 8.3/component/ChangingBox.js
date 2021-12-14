import "./ChangingBox.css"
import React from "react";

const colorArray = ['red', 'green', 'blue', 'orange']

const getColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];

}
// const changeShape = () => {
//     if (this.state.shape == 'circle')
//         this.setState({ shape: 'box' });
//     else
//         this.setState({ shape: 'circle' });
// }

class ChangingBox extends React.Component {

    state = {
        class: '',
        count: 0,
        shape: 'box'
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prev) => ({ class: getColor(), count: prev.count + 1 }));

            if (this.state.count === 5) {
                // changeShape();
                if (this.state.shape === 'circle')
                    this.setState({ shape: 'box' });
                else
                    this.setState({ shape: 'circle' });
                this.setState({ count: 0 });
            }
        }

            , 500)
    }

    render() {
        return (
            <div className={`${this.state.shape} ${this.state.class}`} >
            </div>
        );
    }

}
export default ChangingBox