import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'


export default function layout({ children, category, country, language }) {
  return (
    <div id='top' className="App">
        <div id="gen-loading" style={{display:'none'}}>
            <div id="gen-loading-center">
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
        </div>
      <input type="hidden" id="player-url" value={false} />
      <Header category={category} country={country} language={language} />
        <div id="main">
            {children}
        </div>
      <Footer />


    </div>
  )
}
