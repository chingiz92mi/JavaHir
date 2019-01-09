import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <div key={this.props.movie.id} className="card">
              <div>
                <div className="card_img">
                  <img alt="poster" width="120" src={this.props.movie.poster_src}/>
                </div>
                <div className="card_info">
                  <h3>{this.props.movie.title}</h3>
                  <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                  {/* <p>{this.props.movie.overview}</p> */}
                </div>
              </div>
            </div>
            }
          }

export default MovieRow