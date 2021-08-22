import React, { Component } from 'react'

const API_KEY ='bffd72fb4792f0899b8e30ae119a5382'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputMovie}&language=es`)
        .then(res => res.json())
        .then(search => {
           const {results = [] , total_results = '0' } = search
           console.log({results, total_results})
           this.props.onResults(results)
           //console.log(search)
        })
    }


    render () {
        return (
        <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
            <div className="control">
                <input 
                className="input" 
                onChange={this._handleChange}
                type="text" 
                placeholder="Movie to Search..." />
            </div>
            <div className="control">
                <button className="button is-info">
                Search
                </button>
            </div>
        </div>
        </form>
        )
        
    }
}
