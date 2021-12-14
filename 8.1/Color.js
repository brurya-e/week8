import React from "react";

class Color extends React.Component {

    state = { favoritColor: "purple" };
    // constructor (){
    //     super();
    //     this.state ={favoritColor : "purple"};
    // }

    componentDidMount = () => {

        setTimeout(() => {
            this.setState({favoritColor : "green" })}
                ,
                10000)
        }

    render(){
            return(
        <>
        <h1>my fevorite color is  {this.state.favoritColor}</h1>
        </>
    )
    }
}
export default Color