import React from 'react'

export default function Footer() {
  return (
    <footer id="gen-footer" className="sticky-bottom">
        <div className="gen-footer-style-1">
            <div className="gen-copyright-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center">
                            <span className="gen-copyright">
                                <a target="_blank" href="#">Copyright 2023 Engr. Tayyab Ali, All Rights Reserved.</a>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div id="back-to-top">
            <a className="top" id="top" href="#top"> <i className="ion-ios-arrow-up"></i> </a>
        </div>
    </footer> 
  )
}
