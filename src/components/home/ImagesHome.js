import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./imageshome.css"
function imgsHome() {
    
    return (
           <Carousel autoPlay={true} infiniteLoop={true} interval={3000} stopOnHover={true} useKeyboardArrows={true} className="carousel"> 
               <div >
                   <img src="https://http2.mlstatic.com/D_NQ_853786-MLA46247538647_062021-OO.webp"></img>
               </div>
               <div>
                   <img src="https://http2.mlstatic.com/D_NQ_847451-MLA46363248871_062021-OO.webp"></img>
               </div>
               <div>
                   <img src="https://http2.mlstatic.com/D_NQ_726980-MLA46363591257_062021-OO.webp"></img>
               </div>
               <div>
                   <img src="https://http2.mlstatic.com/D_NQ_893116-MLA46331155309_062021-OO.webp"></img>
               </div>
               <div>
                   <img src="https://http2.mlstatic.com/D_NQ_679105-MLA46081394025_052021-OO.webp"></img>
               </div>
           </Carousel>
    )
}

export default imgsHome
