import "./Spiner.css"
import React from "react";


class Spiner extends React.Component {

    state = {
        color: '',
        count: 0,
        shape: 'box'
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prev) => ({ color: getColor(), count: prev.count + 1 }));

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
            <div className={`${this.state.shape} ${this.state.color}`} >
            </div>
        );
    }

}
export default Spiner