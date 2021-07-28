import React from 'react'


import '../stylesheets/HowItWorks.css'

const HowItWorks = () => {
    return (
        <div className="how-container">
            <h2>How it works</h2>
            <div className="steps">
            <div class="htw-row">
                        <div class="htw-col">
                            <h4 className="HTW-title">Step 1</h4>
                       <p>Tell us about your property - <span className="span">Quick, Easy and Free!</span></p> 

                        </div>
                        <div class="htw-col">
                        <h4 className="HTW-title">Step 2</h4>
                     <p>If it meets our buying criteria we'll contact you to setup
                       up a quick appointment.</p>  
                        </div>
                        <div class="htw-col">
                        <h4 className="HTW-title">Step 3</h4>
                       <p>We'll present you w/ a fair written, <span className="span">no-obligation offer</span></p> 
                        </div>
                        <div class="htw-col">
                        <h4 className="HTW-title">Step 4</h4>
                        <p>We close at a local reputable title company, cash in your hands in as little as 7 days</p>
                        </div>
                    </div>
            </div>

            <div className="testimonials">
                <h4>Testimonials</h4>
                
            </div>

        </div>
    )
}

export default HowItWorks;
