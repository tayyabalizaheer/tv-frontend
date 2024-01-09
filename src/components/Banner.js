import React from 'react'

export default function Banner() {
  return (
    <section className="pt-0 pb-0">
        <div className="container-fluid px-0">
            <div className="row no-gutters">
                <div className="col-12">
                    <div className="gen-banner-movies banner-style-2">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="1"
                            data-lap_num="1" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                            data-loop="true" data-margin="0">
                            <div className="item" style={{ backgroundImage: `url('images/background/header.webp')` }}>
                                <div className="gen-movie-contain-style-2 h-100">
                                    <div className="container h-100">
                                        <div className="row flex-row-reverse align-items-center h-100">
                                            <div className="col-xl-6">
                                                <div className="gen-front-image">
                                                    <img src="images/background/header-small.webp" alt="owl-carousel-banner-image" />
                                                      {/* <a href="/" className="playBut popup-youtube popup-vimeo popup-gmaps">
                                                          <span>1000+ Channels</span>
                                                      </a> */}
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="gen-movie-info">
                                                      <h3>Online TV</h3>
                                                </div>
                                                <div className="gen-movie-meta-holder">
                                                    <p>
                                                        Scroll down to watch your favorite Tv Channel
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
