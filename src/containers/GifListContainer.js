import React from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifArray: []
    }

    render() {
        return(
            <div>
                <GifSearch apiQuery={this.apiQuery}/>
                <GifList imageUrls={this.state.gifArray}/>
            </div>
        )
    }

    apiQuery = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            let gifDataArray = json.data.slice(0,5)
            let gifArray = gifDataArray.map(gif => gif.images.original.url)
            this.setState({gifArray: gifArray})
        })
    }
}