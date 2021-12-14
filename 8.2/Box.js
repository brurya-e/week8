import './Box.css'
import React from "react";

class Box extends React.Component {

    state = {class : ' '}

    componentDidMount() {
        setTimeout(() => {
            this.setState({class : "box" })}
         
        , 1000)} 
 
    render() {
        return (
            <div className = {this.state.class} >
            </div>
        );
    }

}
export default Box