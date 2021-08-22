import React, {Component} from 'react'

import {Title} from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesLists'

export class Home extends Component {
    state = { usedSearchs: false, search: [] }

    _handleResults = (search) => {
        this.setState({ search, usedSearchs: true })
    }

    _renderResults () {
        return this.state.search.length === 0
        ? <p>Ouh ! no hemos encontrado resultados ':(' </p>
        : <MoviesList movies={this.state.search} />
    }
    render () {
        return ( 
            <div>
                <Title>Search Movies</Title>
                    <div className='SearchForm-wrapper'>
                        <SearchForm onResults={this._handleResults}/>
                    </div>
                    {this.state.usedSearchs
                        ?this._renderResults()
                        :<small> Utilice el form para realizar una busqueda</small>
                    }
                
            </div>
        )
    }
}