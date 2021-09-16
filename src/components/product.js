import React from "react";
import ReactDOM from "react-dom";
import './product.css';

class product extends React.Component {
    render() {
        return (

            <div>


                <div class="row">


                    <div class="col-lg-6 col-md-2">
                        <div class="card">
                            <i class="wishlist-icon fa fa-heart-o" style={{'font-size':'24px'}}></i>
                            <img class="product-img" src="imgs/mobile1.png" alt="" />
                        </div>
                        <p><button class="buy-now"><b>Buy Now</b></button><button class="buy-now"><b>Add to cart</b></button></p>
                    </div>

                    <div class="pricing-column col-lg-6 col-md-2">
                        <div class="about-product">
                            <h2><b>Realme C21Y (Cross Black, 64 GB)  (4 GB RAM)</b></h2>

                            <div>
                                <h3 class="product-rating">Ratings-
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </h3>
                            </div>

                            <p class="price"><b>₹9,999/-</b></p>
                            <p>1 Year Warranty for Mobile and 6 Months for Accessories</p>
                            <p>realme is a technology brand officially established on May 4, 2018. The aspiration of realme is to provide products with a comprehensive superior experience for the young, and realme is committed to be a trendsetting technology brand. Due to the abilities in cutting-edge technologies of smartphones and IoT, realme brings consumers products with trendsetting technologies, features and trendsetting experiences that are first applied in the price segment.</p>
                            <hr />
                            <div>
                                <h3>More About product</h3>
                                <hr />
                                <p>General</p>
                                <br />

                                <p>In the box-<b>In The Box-Handset, Adapter (5V/2A), USB Cable, SIM Card Tool, Screen Protect Film, Important Info Booklet with Warranty Card, Quick Guide.</b></p>
                                <p>Model Number-<b>RMX3261</b></p>
                                <p>Model Name-<b>C21Y</b></p>
                                <p>Color-<b>Cross Black</b></p>
                                <p>SIM Type-<b>Dual Sim</b></p>
                                <p>Sound Enhancements-<b>Dirac Sound Effect</b></p>
                                <p>SAR Value-<b>Head: 0.855 W/kg, Body: 0.674 W/kg</b></p>

                            </div>



                        </div>

                    </div>


                </div>



                {/*    ----------------------------Matching-products-----------------------------------------     */}


                <div>
                    <br /><br /><hr />
                    <h2 class="similar-product-head"><b>Some Similar products</b></h2>
                    <hr />

                    <div class="carousel-inner">
                        <div class="parent">
                            <div class=" child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile1.png" alt="" />
                                    <h4>REDMI 9 Prime</h4>
                                    <h6>(Sunrise Flare, 64 GB)  (4 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.11,999/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>

                            <div class=" child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile2.png" alt="" />
                                    <h4>POCO C3</h4>
                                    <h6>(Arctic Blue, 64 GB)  (4 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.8,999/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>

                            <div class="child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile3.png" alt="" />
                                    <h4>Realmi-Narzo</h4>
                                    <h6>5G (Sword Black, 64 GB)  (6 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.13,499/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>

                            <div class="child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile4.jpg" alt="" />
                                    <h4>Redmi-9A</h4>
                                    <h6>(Midnight Black, 32 GB)  (2 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.7899/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>

                            <div class="child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile3.png" alt="" />
                                    <h4>Realmi-Narzo</h4>
                                    <h6>5G (Sword Black, 64 GB)  (6 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.13,499/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>
                        </div>


                        <div>



                        </div>


                    </div>
                </div>


                {/* Again Similar product */}


                <div>
                    <br /><br /><hr />
                    <h2 class="similar-product-head"><b>Some Similar products</b></h2>
                    <hr />

                    <div class="carousel-inner">
                        <div class="parent">
                            <div class=" child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile1.png" alt="" />
                                    <h4>REDMI 9 Prime</h4>
                                    <h6>(Sunrise Flare, 64 GB)  (4 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.11,999/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>

                            <div class=" child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile2.png" alt="" />
                                    <h4>POCO C3</h4>
                                    <h6>(Arctic Blue, 64 GB)  (4 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.8,999/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>

                            <div class="child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile3.png" alt="" />
                                    <h4>Realmi-Narzo</h4>
                                    <h6>5G (Sword Black, 64 GB)  (6 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.13,499/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>

                            <div class="child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile4.jpg" alt="" />
                                    <h4>Redmi-9A</h4>
                                    <h6>(Midnight Black, 32 GB)  (2 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.7899/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>

                            <div class="child">
                                <div class="similar-product">
                                    <img class="testimonial-img" src="imgs/mobile3.png" alt="" />
                                    <h4>Realmi-Narzo</h4>
                                    <h6>5G (Sword Black, 64 GB)  (6 GB RAM)</h6>
                                    <p class="similar-product-price">Rs.13,499/-</p>
                                    <p><button><b>Buy Now</b></button></p>
                                </div>
                            </div>
                        </div>


                        <div>



                        </div>


                    </div>
                </div>





            </div>





        );
    }
}

export default product;