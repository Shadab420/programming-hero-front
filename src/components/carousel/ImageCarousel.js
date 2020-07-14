import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './ImageCarousel.scss';

const ImageCarousel = (props) =>{

    const images = [
        { url: require('../../assets/images/header-slider/slider-img1.png') },
        { url: require('../../assets/images/header-slider/slider-img2.png') },
        { url: require('../../assets/images/header-slider/slider-img3.png') },
        { url: require('../../assets/images/header-slider/slider-img4.png') },
        { url: require('../../assets/images/header-slider/slider-img5.png') }
    ];

    return (
        <Carousel
            autoPlay={2100}
            animationSpeed={2000}
            infinite
        >
            
            {
                images.map((image, id) => <img src={image.url} className="image carousel-img"/>)
            }
 
        </Carousel>
    );

}

export default ImageCarousel;