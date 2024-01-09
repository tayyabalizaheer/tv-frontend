import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery'
export default function Header(props) {
    const navigate = useNavigate();
    const { category, country, language } = props;
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const handleMenuToggle = (e) => {
        $('.sub-menu').hide();
        console.log($(e.currentTarget).find('.sub-menu').show());
    };
    const handleSearchToggle = (e) => {
        console.log($('.gen-search-form').toggle());
    };

    const handleSearch = (e) => {
        var q = $('#search-input').val();
        navigate('/channel/q/' + q, { replace: true });
        $('.gen-search-form').hide()
    };

    
    
    $(document).on('click','.gen-breadcrumb',function(){
        $('.sub-menu').hide();
    });
    $(document).on('click', '#main', function () {
        $('.sub-menu').hide();
    });
    $(document).on('click', '.sub-menu li', function () {
        $('.sub-menu').hide();
    });
    
  return (
    <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
        <div className="gen-bottom-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light better-bootstrap-nav-left" >
                            <a className="navbar-brand text-white h3" href="/">
                                {/* <img className="img-fluid logo" src="/images/logo-1.png" alt="streamlab-image" /> */}
                                Free TV
                            </a>
                              <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}id="navbarSupportedContent">
                                <div id="gen-menu-contain" className="gen-menu-contain">
                                    <ul id="gen-main-menu" className="navbar-nav ml-auto">
                                        <li className="menu-item active">
                                            <a href="/" aria-current="page">Home</a>
                                        </li>
                                        <li className="menu-item" onClick={handleMenuToggle}>
                                            <a className="" href="#">Category</a>
                                            <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                            <ul className="sub-menu">
                                                  {category ? category.slice(0, category.length > 10 ? 10 : category.length ).map((e, index) => (
                                                    <li key={e.id+'-'+index} className="menu-item">
                                                          <Link to={`/channel/category/${e.id.toLowerCase() }`} >{e.name}</Link>
                                                    </li>
                                                  ))
                                                      :
                                                      <li className="menu-item">
                                                          <a href="#">Loading...</a>
                                                      </li>
                                                  }
                                                  <li className="menu-item">
                                                    <Link to='category' >View All</Link>
                                                  </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item" onClick={handleMenuToggle}>
                                            <a href="#">Country</a>
                                            <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                            <ul className="sub-menu">
                                                {country ? country.slice(0, country.length > 10 ? 10 : country.length).map((e, index) => (
                                                    <li key={e.id + '-' + index} className="menu-item">
                                                        <Link to={`/channel/country/${e.code.toLowerCase() }`} >{e.name}</Link>
                                                    </li>
                                                ))
                                                    :
                                                    <li className="menu-item">
                                                        <a href="#">Loading...</a>
                                                    </li>
                                                }
                                                <li className="menu-item">
                                                      <Link to='country' >View All</Link>
                                                </li>
                                            </ul>
                                        </li>   
                                        <li className="menu-item" onClick={handleMenuToggle}>
                                            <a  href="#">Language</a>
                                            <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                            <ul className="sub-menu">
                                                {language ? language.slice(0, language.length > 10 ? 10 : language.length).map((e, index) => (
                                                    <li key={e.id + '-' + index} className="menu-item">
                                                        <Link to={`/channel/language/${e.code.toLowerCase() }`} >{e.name}</Link>
                                                    </li>
                                                ))
                                                    :
                                                    <li className="menu-item">
                                                        <a href="#">Loading...</a>
                                                    </li>
                                                }
                                                <li className="menu-item">
                                                      <Link to='language' >View All</Link>
                                                </li>
                                            </ul>
                                        </li>        
                                    </ul>
                                </div>
                            </div>
                            <div className="gen-header-info-box">
                                <div className="gen-menu-search-block">
                                    <a href="#" id="gen-seacrh-btn" onClick={handleSearchToggle}><i className="fa fa-search"></i></a>
                                    <div className="gen-search-form ">
                                          <div className="text-right">
                                            <button  className="close-search btn btn-sm mb-3 btn-light" id="gen-seacrh-btn" onClick={handleSearchToggle}>
                                                <i class="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                          </div>
                                          <form role="search" method="get" className="search-form" onSubmit={handleSearch} >
                                            <label>
                                                <span className="screen-reader-text"></span>
                                                <input id="search-input" type="search" className="search-field" placeholder="Search …"  />
                                            </label>
                                              <button type="button" className="search-submit" onClick={handleSearch}><span
                                                className="screen-reader-text"></span></button>
                                        </form>
                                    </div>
                                </div>
                             
                                <div className="gen-btn-container">
                                    <a href="register.html" className="gen-button">
                                        <div className="gen-button-block">
                                            <span className="gen-button-line-left"></span>
                                            <span className="gen-button-text">Contact Us</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                                <i className="fas fa-bars"></i>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
