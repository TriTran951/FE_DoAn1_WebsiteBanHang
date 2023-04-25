import React, { useRef } from 'react';
import Slider from 'react-slick';
import Button from '@mui/material/Button';

const SliderComponent = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                <div>
                    <h3>Product 1</h3>
                </div>
                <div>
                    <h3>Product 2</h3>
                </div>
                <div>
                    <h3>Product 3</h3>
                </div>
                <div>
                    <h3>Product 4</h3>
                </div>
                <div>
                    <h3>Product 5</h3>
                </div>
                <div>
                    <h3>Product 6</h3>
                </div>
                <div>
                    <h3>Product 7</h3>
                </div>
                <div>
                    <h3>Product 8</h3>
                </div>
                <div>
                    <h3>Product 9</h3>
                </div>
                <div>
                    <h3>Product 10</h3>
                </div>
            </Slider>

            <Button
                onClick={() => {
                    sliderRef.current.slickPrev();
                }}
            >
                Prev
            </Button>
            <Button
                onClick={() => {
                    sliderRef.current.slickNext();
                }}
            >
                Next
            </Button>
        </div>
    );
};

export default SliderComponent;
