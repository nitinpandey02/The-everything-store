import React from "react";
import './homepage.css';


class home extends React.Component {
  render() {
    return (
      <div>
        <div class="row head">
          <marquee class="wrapper" width="104%" direction="left" height="100px">
            <h5 class="black-lives-matter">Welcome to The-Everything-Store</h5>
          </marquee>
          <div class="col-lg-3 col-md-2">
            <p class="jump">Buy Now!!</p>
          </div>
          <div class="col-lg-6 col-md-2">
            <h2 class="buy-head"><b>Buy more than 1500</b></h2>
            <h4 class="buy-h4">and get discount up to <b>15%.</b></h4>
          </div>
          <div class="col-lg-3 col-md-2">
            <p class="jump jump-two">Buy Now!!</p>
          </div>
        </div>


        <section id="testimonials" />

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="1500">

          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2 class="testimonial-text"><b>Great saving on mobiles.<br />Started from 9899.</b></h2>
              <img class="testimonials-img" src="imgs/mobile.png" alt="" />
            </div>

            <div class="carousel-item">
              <h2 class="testimonial-text"><b>Watches and SmartWatches<br />Discount up to 60%</b></h2>
              <img class="testimonials-img" src="imgs/watch.png" alt="" />
            </div>

            <div class="carousel-item">
              <h2 class="testimonial-text"><b>Up to 80% off<br />Bestselling handbags and duffle bags</b></h2>
              <img class="testimonials-img bag" src="imgs/bag.jpg" alt=" " />
            </div>
          </div>
          <a class=" nm carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class=" nm carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>


        <div>
          <h3 class="dealhead"><b>Today's Deals</b><button type="button" class=" show-more btn btn-primary">Show more</button></h3>
        </div>
        <div class="row">
          <div class="pricing-column col-lg-3 col-md-6">
            <div class="card">
              <img class="show-img" src="imgs/jeans.png" alt="" />
              <h2>Tailored Jeans</h2>
              <p class="price">Rs.499/-</p>
              <p>It is comfortable and branded</p>
              <p><button><b>Add to Cart</b></button></p>
            </div>
          </div>


          <div class="pricing-column col-lg-3 col-md-6">
            <div class="card">
              <img class="show-img" src="imgs/jeans.png" alt="" />
              <h2>Tailored Jeans</h2>
              <p class="price">Rs.499/-</p>
              <p>It is comfortable and branded</p>
              <p><button><b>Add to Cart</b></button></p>
            </div>
          </div>


          <div class="pricing-column col-lg-3 col-md-6">
            <div class="card">
              <img class="show-img" src="imgs/jeans.png" alt="" />
              <h2>Tailored Jeans</h2>
              <p class="price">Rs.499/-</p>
              <p>It is comfortable and branded</p>
              <p><button><b>Add to Cart</b></button></p>
            </div>
          </div>

          <div class="pricing-column col-lg-3 col-md-6">
            <div class="card">
              <img class="show-img" src="imgs/jeans.png" alt="" />
              <h2>Tailored Jeans</h2>
              <p class="price">Rs.499/-</p>
              <p>It is comfortable and branded</p>
              <p><button><b>Add to Cart</b></button></p>
            </div>
          </div>
        </div>

        /<hr />

        <div class="row">
          <div class="pricing-column col-lg-3 col-md-6">
            <div class="card">
              <img class="show-img" src="imgs/jeans.png" alt="" />
              <h2>Tailored Jeans</h2>
              <p class="price">Rs.499/-</p>
              <p>It is comfortable and branded</p>
              <p><button><b>Add to Cart</b></button></p>
            </div>
          </div>


          <div class="pricing-column col-lg-3 col-md-6">
            <div class="card">
              <img class="show-img" src="imgs/jeans.png" alt="" />
              <h2>Tailored Jeans</h2>
              <p class="price">Rs.499/-</p>
              <p>It is comfortable and branded</p>
              <p><button><b>Add to Cart</b></button></p>
            </div>
          </div>


          <div class="pricing-column col-lg-3 col-md-6">
            <div class="card">
              <img class="show-img" src="imgs/jeans.png" alt="" />
              <h2>Tailored Jeans</h2>
              <p class="price">Rs.499/-</p>
              <p>It is comfortable and branded</p>
              <p><button><b>Add to Cart</b></button></p>
            </div>
          </div>

          <div class="pricing-column col-lg-3 col-md-6">
            <div class="card">
              <img class="show-img" src="imgs/jeans.png" alt="" />
              <h2>Tailored Jeans</h2>
              <p class="price">Rs.499/-</p>
              <p>It is comfortable and branded</p>
              <p><button><b>Add to Cart</b></button></p>
            </div>
          </div>
        </div>















      </div>
    );
  }
}

export default home;