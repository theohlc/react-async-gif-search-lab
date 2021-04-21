import React from "react";

export default class GifList extends React.Component {
    render() {

        if (this.props.imageUrls[0]) {
            return(
                <ul>
                    <li>
                        <img src={this.props.imageUrls[0]}/>
                        <img src={this.props.imageUrls[1]}/>
                        <img src={this.props.imageUrls[2]}/>
                        <img src={this.props.imageUrls[3]}/>
                        <img src={this.props.imageUrls[4]}/>
                    </li>
                </ul>
            )
        } else {
            return(<div/>)
        }
        
    }   
}

GifList.defaultProps = {
    imageUrls: [
        '', '', '', '', ''
    ]
}