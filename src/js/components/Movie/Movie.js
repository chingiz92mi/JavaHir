import React, { Component } from 'react';
import MovieRow from './MovieRow.js'

export default class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.performSearch("i")
    }

    performSearch(searchTerm) {
        console.log("Perform search using moviedb")
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            const results = searchResults.results
            var movieRows = []
            results.forEach((movie) => {
              movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
              const movieRow = <MovieRow key={movie.id} movie={movie}/>
              movieRows.push(movieRow)
            })
    
            this.setState({rows: movieRows})
          },
          error: (xhr, status, err) => {
            console.error("Failed to fetch data")
          }
        })
      }
    
      searchChangeHandler(event) {
        const searchTerm = event.target.value
        this.performSearch(searchTerm)
      }

    render() {
        return (
            <div className="mainDiv">
                <table className="titleBar">
                <tbody>
                    <tr>
                    <td width="8"/>
                    <td>
                        <h1>MediaHub</h1>
                    </td>
                    </tr>
                </tbody>
                </table>

                <input className="input-search" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
            <div className="wrap_film">
                {this.state.rows}
            </div>
            </div>
        )
    }
}
