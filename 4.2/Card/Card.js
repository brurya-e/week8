import './Card.css';
import React from "react";


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { url, title, description } = this.props;
        // const url = this.props.url;
        // const title = this.props.title;
        // const description = this.props.description;
        return (
            <div className="container-card">
                <div className="img">
                    <img src={url}/>
                </div>
                <h1>{title}</h1>
                <h2>{description}</h2>
                {/* <button>explore</button>
                <button>share</button> */}
            </div>
        );
    }
}
export default Card;