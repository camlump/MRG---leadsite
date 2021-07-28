import React from 'react';


import '../stylesheets/propertyBar.css';
const propertyBar = () => {
    return (
        <div className="bar">
            <div className="content-wrap">
            <h3 className="bar-sub-title">See what cash Buyers or investors will pay for my property</h3>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter property address..." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                <button className="btn btn-secondary" type="button" id="button-addon2">Get Cash Offer</button>
                
                </div>
                </div>

            
        </div>
    )
}

export default propertyBar
