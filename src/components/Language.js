import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
export default function Language(props) {
    const { language } = props;

    return (
        <>
            <Breadcrumb title='Language' />

            <div className="container custom-list">
                <div className="row">

                    <div className="col-12">
                        <div className="widget">
                            <div className="menu-explore-container">
                                <ul className="menu row">
                                    {(language && language.length > 0) ? language.map((e, index) => (
                                        <li key={e.id + '-' + index} className="menu-item col-lg-3 col-6">
                                            <Link to={`/channel/language/${e.code.toLowerCase() }`} >{e.name}</Link>
                                        </li>
                                    ))
                                        :
                                        <li className="menu-item">
                                            <a href="#">No result found...</a>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <ul className="sub-menu">

            </ul>
        </>

    )
}
