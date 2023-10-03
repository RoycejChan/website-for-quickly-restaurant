import React, { useEffect } from "react";
import image1 from "./../assets/quicklyGallery/image1.jpg"
import image2 from "./../assets/quicklyGallery/image2.jpg"
import image3 from "./../assets/quicklyGallery/image3.jpg"
import image4 from "./../assets/quicklyGallery/image4.jpg"
import image5 from "./../assets/quicklyGallery/image5.jpg"
import image6 from "./../assets/quicklyGallery/image6.jpg"
import image7 from "./../assets/quicklyGallery/image7.jpg"
import image8 from "./../assets/quicklyGallery/image8.jpg"
import image10 from "./../assets/quicklyGallery/image10.jpg"
import image15 from "./../assets/quicklyGallery/image15.jpg"
import image13 from "./../assets/quicklyGallery/image13.jpg"
import image16 from "./../assets/quicklyGallery/image16.jpg"
import image17 from "./../assets/quicklyGallery/image17.jpg"
import image18 from "./../assets/quicklyGallery/image18.jpg"
import image19 from "./../assets/quicklyGallery/image19.jpg"
import renoimage from "./../assets/quicklyGallery/renoimage.jpg"


export default function Home() {

    return (
        <div className="home-container">
                <div className="photo-gallery-container">
                    <div className="gallery-header-container">
                        <h1 className="photo-gallery-header">Check out our <br /> <span className="Gallery">Gallery</span></h1>
                    </div>
                    <div className="photo-gallery">

                        <div className="photo-column">
                            <div className="photo" id="one" >
                                <img src={image1} alt="" className=" orange-border"  />
                            </div>
                            <div className="photo" id="two">
                                <img src={image3} alt="" className="green-border" />
                            </div>                    
                            <div className="photo" id="three">
                                <img src={image15} alt="" className="blue-border" />
                            </div>
                            <div className="photo" id="four">
                                <img src={image19} alt="" className="orange-border"/>
                            </div>   

                        </div>
                        <div className="photo-column">
                            <div className="photo" id="five">
                                <img src={image13} alt="" className="orange-border"/>
                            </div>
                            <div className="photo" id="six">
                                <img src={image5} alt="" className="blue-border"/>
                            </div>                    
                            <div className="photo" id="seven">
                                <img src={image6} alt="" className="green-border" />
                            </div>  
                        </div>    
                        <div className="photo-column">
                            <div className="photo" id="eight">
                                <img src={image7} alt="" className="blue-border" />
                            </div>
                            <div className="photo" id="nine">
                                <img src={image8} alt="" className="green-border"/>
                            </div>                    
                            <div className="photo" id="ten">
                                <img src={image10} alt="" className="orange-border" />
                            </div>
                            <div className="photo" id="eleven">
                                <img src={image18} alt="" className="blue-border" />
                            </div>   
                        </div>
                        <div className="photo-column">
                            <div className="photo" id="twelve">
                                <img src={renoimage} alt="" className="orange-border"/>
                            </div>
                            <div className="photo" id="thirteen">
                                <img src={image16} alt="" className="blue-border"/>
                            </div>                    
                            <div className="photo" id="fourteen">
                                <img src={image17} alt="" className="green-border"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}