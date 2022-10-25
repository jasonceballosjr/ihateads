import React from 'react';
import './Home.css';
import ares from '../pics/ares2.png';

function Home() {
    return (
          <div id="wrapper">
            <div class="main">
              <p><strong>Chaos will begin soon.</strong></p>
            </div>

            <div>
              <img src={ares}/>
            </div>
          </div>       
    )
} 

export default Home;