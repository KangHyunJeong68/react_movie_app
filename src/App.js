import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "https://assets.www.warnerbros.com/sites/default/files/movies/media/browser/Matrix_2000x3000.JPEG"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg"
    },
    {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
    },
    {
        title: "Star Wars",
        poster: "https://images-na.ssl-images-amazon.com/images/I/812Ww9ReZHL.jpg"
    }
];

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
        setTimeout(() => {
            this.setState({
                // ...this.state.movies,
                movies : [
                    {
                        title: "Matrix",
                        poster: "https://assets.www.warnerbros.com/sites/default/files/movies/media/browser/Matrix_2000x3000.JPEG"
                    },
                    {
                        title: "Full Metal Jacket",
                        poster: "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg"
                    },
                    {
                        title: "Oldboy",
                        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
                    },
                    {
                        title: "Star Wars",
                        poster: "https://images-na.ssl-images-amazon.com/images/I/812Ww9ReZHL.jpg"
                    },
                    {
                        title: "트랜스아메리카",
                        poster: "http://t1.daumcdn.net/cfile/144BED054BF94FC90D"
                    },
                ]
            })
        }, 2000)
    }

    _renderMovies = () => {
         const movies = this.state.movies.map((movie, index) => {
            return (<Movie title={movie.title} poster={movie.poster} key={index}/>)
        })
        return movies
    }
    render() {
        console.log("render")
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies(): "Loading...."}

            </div>
        )
    }
}

export default App;