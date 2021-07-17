import React from 'react'
import emailjs from 'emailjs-com';

import '../stylesheets/homepage.css'

const Homepage = () => {
    return (
        <div className="homePage">
            <div className="bg"></div>
             <main classname="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Homelight</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">sell property</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Buy property</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Joint Venture</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <div className="content-wrap">
          <h2>Sell your home faster and for more money</h2>
          <h6>We analyze millions of home sales to find the best performing real estate agents.</h6>

          <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter your address" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                <button class="btn btn-primary" type="button" id="button-addon2">Get Cash Offer</button>
                    </div>

                    </div>

      </main>
        </div>
    )
}

export default Homepage
