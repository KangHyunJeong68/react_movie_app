import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

// const movies = [
//     // {
//     //     title: "Matrix",
//     //     poster: "https://assets.www.warnerbros.com/sites/default/files/movies/media/browser/Matrix_2000x3000.JPEG"
//     // },
//     // {
//     //     title: "Full Metal Jacket",
//     //     poster: "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg"
//     // },
//     // {
//     //     title: "Oldboy",
//     //     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
//     // },
//     // {
//     //     title: "Star Wars",
//     //     poster: "https://images-na.ssl-images-amazon.com/images/I/812Ww9ReZHL.jpg"
//     // }
// ];

class App extends Component {

    // componentWillMount() {
    //     console.log("component will mount")
    // }
    //
    // componentDidMount() {
    //     console.log("component did mount")
    // }

    state = {};

    componentDidMount() {
      this._getMovies();
    }

    _getMovies = async () => {
        const movies = await this._callApi();
       this.setState( {movies})
    }

    _callApi = () => {
        return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=year&order_by=desc')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie) => {
            return <Movie
                title={movie.title_english}
                poster={movie.medium_cover_image}
                key={movie.id}
                genres={movie.genres}
                synopsis={movie.synopsis}
            />
        })
        return movies
    }

    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : "Loading...."}
            </div>
        )
    }
}

export default App;