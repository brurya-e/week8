import React from "react";

class Box extends React.Component {

    state = { class: 'hide' }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ class: "box" })
        }

            , 1000)
    }

    render() {
        return (
            <div className={`${this.state.class} ${this.props.color}`}
                style={{
                    width: this.props.size,
                    height: this.props.size,
                    // backgroundColor: this.props.color--גורם לזה להראות בהתחלה גם כששינתי לקלאס הפתרון להוסיף בהתחלה class hide
                }} >
            </div>
        );
    }

}
export default Box