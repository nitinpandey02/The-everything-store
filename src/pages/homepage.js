import React from "react";

class home extends React.Component{
    render(){
        return(
 <div>
              
<section id="testimonials"/>
  
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="1500">

   <div class="carousel-inner">
     <div class="carousel-item active">
         <h2><b>Great saving on mobiles.<br/>Started from 9899.</b></h2>   
         <img class="testimonials-img" src="mobile.png" alt=""/>
     </div>
  
    <div class="carousel-item">
      <h2 class="testimonial-text"><b>Watches and SmartWatches<br/>Discount up to 60%</b></h2>
      <img class="testimonials-img" src="watch.png" alt=""/>
    </div>

    <div class="carousel-item">
      <h2 class="testimonial-text"><b>Up to 80% off<br/>Bestselling handbags and duffle bags</b></h2>
      <img class="testimonials-img bag" src="bag.jpg" alt=" "/>
    </div>
   </div>
   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Previous</span>
   </a>
   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
   </a>
  </div>


  <div>
    <h3 class="dealhead"><b>Today's Deals</b><button class="show-more" type="submit" alt=" "><h4>Show more</h4></button></h3>
  </div>
    <div class="row">
      <div class="pricing-column col-lg-4 col-md-6">
       <div class="card">
         <img class="deal-img" src="jeans.png" alt="" />
         <h2>Tailored Jeans</h2>
         <p class="price">Rs.499/-</p>
         <p>It is comfortable and branded</p>
         <p><button>Add to Cart</button></p>
       </div>
      </div>

    
      <div class="pricing-column col-lg-4 col-md-6">
       <div class="card">
         <img src="jeans.png" alt="" />
         <h2>Tailored Jeans</h2>
         <p class="price">Rs.499/-</p>
         <p>It is comfortable and branded</p>
         <p><button>Add to Cart</button></p>
       </div>
      </div>
    

    <div class="pricing-column col-lg-4 col-md-6">
       <div class="card">
         <img src="jeans.png" alt="" />
         <h2>Tailored Jeans</h2>
         <p class="price">Rs.499/-</p>
         <p>It is comfortable and branded</p>
         <p><button>Add to Cart</button></p>
       </div>
    </div>


    <div class="pricing-column col-lg-4 col-md-6">
       <div class="card">
         <img src="jeans.png" alt="" />
         <h2>Tailored Jeans</h2>
         <p class="price">Rs.499/-</p>
         <p>It is comfortable and branded</p>
         <p><button>Add to Cart</button></p>
       </div>
    </div>


    <div class="pricing-column col-lg-4 col-md-6">
       <div class="card">
         <img src="jeans.png" alt="" />
         <h2>Tailored Jeans</h2>
         <p class="price">Rs.499/-</p>
         <p>It is comfortable and branded</p>
         <p><button>Add to Cart</button></p>
       </div>
    </div>


    <div class="pricing-column col-lg-4 col-md-6">
       <div class="card">
         <img src="jeans.png" alt="" />
         <h2>Tailored Jeans</h2>
         <p class="price">Rs.499/-</p>
         <p>It is comfortable and branded</p>
         <p><button>Add to Cart</button></p>
       </div>
    </div>
    
  
  </div>
    



</div>
        );
    }
}

export default home;