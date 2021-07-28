import React from 'react'
import Map from '../images/map.png'
import '../stylesheets/listpage.css';

import {FaTruckMoving} from 'react-icons/fa';

import {FaHome} from 'react-icons/fa';

const listPage = () => {
    return (
        <div className="listPage">
            
            <div className="content-container">
            <h2 className="sub-title">Selling Your Property Simplified</h2>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <FaHome className="icon"/>
                            
                                    </div>
                                    <p className="icon-text">Unwanted Inheritance?</p>
                                </div>
                                <div class="col">
                                <div class="card">
                                    <FaTruckMoving className="icon"/>
                            
                                    </div>
                                    <p className="icon-text">Money?</p>
                                </div>
                                <div class="col">
                                <div class="card">
                                    <FaHome className="icon"/>
                            
                                    </div>
                                    <p className="icon-text">Facing Foreclosure</p>
                                </div>
                                <div class="col">
                                <div class="card">
                                    <FaHome className="icon"/>
                            
                                    </div>
                                    <p className="icon-text">Behind on Mortgages</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="text-content">
                            <h3>These are issues that we help solve on a daily basis.</h3>

                            <ul>
                                <li>You don't need to clean up and repair.</li>
                                <li>No sense of uncertainty.</li>
                                <li>Just a hasssle free sale process.</li>
                            </ul>
                        </div>

            
          
          

                
            </div>
         </div>
       
    )
}

export default listPage
