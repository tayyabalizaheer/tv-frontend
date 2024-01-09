import React from 'react'
import { Link } from 'react-router-dom';
export default function List({ channels, setStreamUrl }) {
    const openPlayer = (url) =>{
        setStreamUrl(url);
    }
  return (
        
      <div className="row mt-3">
          {
              channels ? channels.map((e, index) => (
                  <div key={"channels-" + e.id + index} className="col-3">
                      <div className="gen-style-2">
                          <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                              <div className="gen-carousel-movies-style-2 movie-grid style-2">
                                  <div className="gen-movie-contain">
                                      <div className="gen-movie-img">
                                          <img src={e.logo} alt="owl-carousel-video-images" />
                                          <div className="gen-movie-action">
                                              <Link to='/player' onClick={() => openPlayer(e.url)} className="gen-button">
                                                  <i className="fa fa-play"></i>
                                              </Link>
                                          </div>
                                      </div>
                                      <div className="gen-info-contain">
                                          <div className="gen-movie-info">
                                              <h3>
                                                  <Link to='/player' onClick={() => openPlayer(e.url)} className="gen-button">
                                                      {e.name}
                                                  </Link>
                                              </h3>
                                          </div>
                                          <div className="gen-movie-meta-holder">
                                              <ul>
                                                  <li>
                                                      <span>Action</span>

                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              ))
                  :
                  <div> No result found...</div>
          }
      </div>
  )
}
