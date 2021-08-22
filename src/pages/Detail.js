import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonBackToHome} from '../components/ButtonBackToHome'


const API_KEY ='bffd72fb4792f0899b8e30ae119a5382'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} , credits: [] }

    _fetchMovie ({ id }) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es`
        )
        .then(res => res.json())
        .then(movie => {
           console.log({ movie })
           this.setState({ movie })
        })
    }

    _fetchActors ({ id }) {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=es`
        )
        .then(res => res.json())
        .then(credits => {
           console.log({ credits })
           this.setState({ credits })
        })
    }
   

    _goBack () {
        window.history.back()
    }

    componentDidMount () {
        console.log('=>'+ this.props)
        const { id } = this.props.match.params
        this._fetchMovie({ id })
        this._fetchActors({ id })
    }

    render () {

        //Obtenemos los campos del _fetchMovie
        const {title, popularity, overview, poster_path } =
        this.state.movie
        
        const { name } = this.state.credits

    
        return (
            <div className='row'>
                <h4 className='tt-detail'>{title}</h4>
                    <div className='col-6 img'>
                        <img className='img-movie' src={"https://image.tmdb.org/t/p/w500" + poster_path} alt={title}/>
                    </div>
                    <div className='col-6 detail'>
                        <p className='desc-movie'>Sinopsis: 
                        <p><br/>{overview}</p></p>
                        <p>Actores: {name}</p>
                        <p>Productores: </p>
                        <p className='popularity'><span className='txt-popularity'>Popularity: </span>{popularity}</p>
                    </div>
                <div className='btn-back'>
                    <ButtonBackToHome/>
                </div>
            </div>
        )
    }
}