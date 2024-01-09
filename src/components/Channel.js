import React, { useEffect, useState } from "react";
import { api } from "../Helper";
import axios from 'axios';
import $ from 'jquery';
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
export default function Channel() {
    const { type , value } = useParams();

    const [channels, setChannels] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    var apiUrl = api("?" + type + "=" + value);
    useEffect(() => {
        $('#gen-loading').show();
        getData(apiUrl);

        
    }, [value]);
    const getData = async (apiUrl) => {
        if (!type || !value) {
            const response = await axios.get('https://ipapi.co/json/');
            const dataJson = await response.data;
            apiUrl = api("?country=" + dataJson.country_code);
            console.log("country", apiUrl, dataJson);

        }

        const response = await axios.get(apiUrl);
        const dataJson = await response.data;
        $('#gen-loading').hide();
        setChannels(dataJson?.data);
        setPageData({
            current_page: dataJson?.current_page,
            total: dataJson?.last_page,
        })
    };
    function handlePageClick({ selected: selectedPage }) {
        setChannels([]);
        setCurrentPage(selectedPage);
        getData(apiUrl + "&page=" + (selectedPage+1));
    }
    const openPlayer = (url) => {
        $('#player-url').val(url);
    }
  return (
    <>
    {/* <Breadcrumb title='Channels' /> */}
    <section className="gen-section-padding-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4 className="gen-heading-title">Channels</h4>
                </div>
            </div>
            <div className="row mt-3">
                {
                    channels ? channels.map((e, index) => (
                        <div key={"channels-"+e.id + index} className="col-lg-3 col-md-6 col-6">
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
            <div className="row mt-3">
                <div className="col-lg-12 col-md-12">
                          <div className="gen-pagination">
                              <nav aria-label="Page navigation">
                                  <ReactPaginate
                                      previousLabel={"←"}
                                      nextLabel={"→"}
                                      pageCount={pageData.total ? pageData.total : 0}
                                      onPageChange={handlePageClick}
                                      containerClassName={"page-numbers"}
                                      previousLinkClassName={""}
                                      nextLinkClassName={" next"}
                                      disabledClassName={"disabled"}
                                      activeClassName={"current"}
                                  />
                              </nav>
                          </div>
                        
                </div>
            </div>
                  
            
        </div>
    </section>
    </>
  )
}
