import React from 'react';
import  img  from './images/img.png';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="container banner-txt">
          <div className="row">
              <div className="col-lg-6 my-auto">
                    <h4>Lorem Ipsum</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio sit amet diam vestibulum sollicitudin at vitae nisl. Aliquam eu rhoncus augue, ornare maximus risus. Morbi a sollicitudin ex. Ut dignissim viverra est quis tristique. Maecenas eu dictum ante. Vivamus sit amet tempor purus, vel egestas urna. Pellentesque feugiat nibh eu nulla consequat, id venenatis metus euismod.
                    </p>
                    <div className="two-btns">
                      <Link to="/about-us" className="purple-btn">
              Explore
                      </Link>
                      <Link to="/mission" className="purple-btn">
    Learn More
                      </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                  <img src={img} alt={img} className="img-fluid" />
                </div>
                </div>
                </div>
  );
}

export default Home;
