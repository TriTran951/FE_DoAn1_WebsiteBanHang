import Grid from '@mui/material/Grid';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import { Card, CardMedia, CardContent, Typography, Rating, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import style from './style.scss';

import anhtrang from './img/anhtrang.jpg';
import {
    Theme,
    CssButtonFullProduct,
    CssHeaderProduct,
    CssNameProduct,
    CssPrice,
} from '~/components/GlobalStyles/theme.js';
library.add(faDongSign);

// Từng ô sản phẩm
const ProductCard = ({ name, price, image, rating, id }) => {
    const [activeProduct, setactiveProduct] = useState(null);
    return (
        <Grid>
            <Card
                key={id}
                onMouseOver={() => {
                    setactiveProduct(id);
                }}
                onMouseOut={() => {
                    setactiveProduct(null);
                }}
                style={{ marginLeft: '0.5vw', marginRight: '0.5vw', position: 'relative' }}
            >
                <CardMedia
                    component="img"
                    height="220"
                    image={image}
                    alt={name}
                    style={{
                        transform: activeProduct === id ? 'translateY(-10px)' : 'none',
                        transitionDuration: '0.5s',
                    }}
                />
                <CardContent>
                    <Typography
                        style={{
                            ...CssNameProduct,
                            color: activeProduct === id ? Theme.colors.nameHover : Theme.colors.black,
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography style={{ ...CssPrice }}>
                        {price}
                        <FontAwesomeIcon icon={faDongSign} />
                    </Typography>
                    <Rating value={rating} readOnly />
                </CardContent>
            </Card>
        </Grid>
    );
};
// Thông tin sản phẩm
const products = [
    {
        id: 1,
        name: 'Product 1',
        price: '9.99',
        image: anhtrang,
        rating: 4,
    },
    {
        id: 2,
        name: 'Product 2',
        price: '19.99',
        image: anhtrang,
        rating: 3,
    },
    {
        id: 3,
        name: 'Product 3',
        price: '29.99',
        image: anhtrang,
        rating: 5,
    },
    {
        id: 4,
        name: 'Product 4',
        price: '9.99',
        image: anhtrang,
        rating: 4,
    },
    {
        id: 5,
        name: 'Product 5',
        price: '19.99',
        image: anhtrang,
        rating: 3,
    },
    {
        id: 6,
        name: 'Product 6',
        price: '29.99',
        image: anhtrang,
        rating: 5,
    },
    {
        id: 7,
        name: 'Product 7',
        price: '19.99',
        image: anhtrang,
        rating: 3,
    },
    {
        id: 8,
        name: 'Product 8',
        price: '29.99',
        image: anhtrang,
        rating: 5,
    },
];

// List sản phẩm
function ProductList() {
    const sliderRef = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    };
    const handleMouseOver = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };
    return (
        <Grid style={{ position: 'relative' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Slider ref={sliderRef} {...settings}>
                {products.map((product) => {
                    return <ProductCard key={product.id} {...product}></ProductCard>;
                })}
            </Slider>

            <button
                style={{
                    height: '75px',
                    width: '40px ',
                    background: '#FFFFFF',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translate(-20%,-50%) ',
                    border: '0px',
                    boxShadow: '4px 0px  rgba(0, 0, 0, 0.3)',
                    opacity: isHover ? '1' : '0.5',
                    borderRadius: '0px 5px 5px 0px',
                }}
                onClick={() => {
                    sliderRef.current.slickPrev();
                }}
            >
                <NavigateBeforeIcon style={{ fontSize: '40px' }}></NavigateBeforeIcon>
            </button>
            <button
                style={{
                    height: '75px',
                    width: '40px ',
                    background: '#FFFFFF',
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translate(20%,-50%) ',
                    border: '0px',
                    boxShadow: '-4px 0px   rgba(0, 0, 0, 0.3)',
                    opacity: isHover ? '1' : '0.35',
                    borderRadius: '5px 0px 0px 5px',
                }}
                onClick={() => {
                    sliderRef.current.slickNext();
                }}
            >
                <NavigateNextIcon style={{ fontSize: '40px' }}></NavigateNextIcon>
            </button>
        </Grid>
    );
}
function Home() {
    return (
        <>
            <Grid container justifyContent="center">
                <Grid
                    item
                    xs={10}
                    style={{
                        marginTop: '20px',
                        background: Theme.colors.background,
                        padding: '1vw 0.5vw ',
                    }}
                >
                    <Grid container justifyContent="center" style={{ marginBottom: '10px' }}>
                        <Typography style={{ ...CssHeaderProduct }}>ĐIỆN THOẠI</Typography>
                    </Grid>
                    <ProductList></ProductList>
                    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                        <Button style={{ ...CssButtonFullProduct }}>
                            Xem tất cả
                            <NavigateNextIcon style={{ fontSize: '17px' }}></NavigateNextIcon>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
export default Home;
