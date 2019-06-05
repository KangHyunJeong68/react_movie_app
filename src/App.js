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
    render() {
        return (
            <div className="App">
                {movies.map((movie, index) => {
                    return (<Movie title={movie.title} poster={movie.poster} key={index}/>)
                })}

            </div>
        )
    }
}

export default App;