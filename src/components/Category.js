import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
export default function Category(props) {
  const { category } = props;

  return (
    <>
          <Breadcrumb title='Category' />

            <div className="container custom-list">
                <div className="row">
                    
                    <div className="col-12">
                        <div className="widget">
                            <div className="menu-explore-container">
                                <ul className="menu row">
                                  {category ? category.map((e, index) => (
                                      <li key={e.id + '-' + index} className="menu-item col-lg-3 col-6">
                                          <Link to={`/channel/category/${e.id.toLowerCase() }`} >{e.name}</Link>
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
