import React from "react";

export default class GifSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            searchText: ''
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.searchText} onChange={this.handleChange}></input>
                    <input type='submit' value='Find Gifs'></input>
                </form>
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({searchText: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.apiQuery(this.state.searchText)
    }
}