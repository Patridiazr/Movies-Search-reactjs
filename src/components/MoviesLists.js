import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render () {
        const { movies } = this.props

        return (
            <div className='MoviesList'>
                {
                movies.map( movie => {
                    return (
                        <div key={movie.id} className='MoviesList-item'>
                            <Movie 
                                id={movie.id}
                                title={movie.title}
                                year={movie.release_date}
                                poster={movie.backdrop_path}
                            />
                        </div>
                        )
                    })
                }

            </div>
        )
        
        
    }
}