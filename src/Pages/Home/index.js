import React, { useRef, useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import { Card, CardMedia, CardContent, Typography, Rating, Button, Grid, Skeleton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import style from './style.scss';
import Carousel from 'react-material-ui-carousel';
import { StaticRouter } from 'react-router-dom';

import anh1 from './img/anhbia1.webp';
import anh2 from './img/anhbia2.webp';

import {
    Theme,
    CssButtonFullProduct,
    CssHeaderProduct,
    CssNameProduct,
    CssPrice,
} from '~/components/GlobalStyles/theme.js';
library.add(faDongSign);

function Home() {
    const [homeProducts, sethomeProducts] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                await axios({
                    method: 'GET',
                    url: process.env.REACT_APP_hostBE + '/api/client/homeproduct',
                }).then((res) => {
                    sethomeProducts(res.data);
                });
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    const ImagePreloader = ({ src }) => {
        const [imageLoaded, setImageLoaded] = useState(false);

        useEffect(() => {
            const image = new Image();
            image.src = src;

            image.onload = () => {
                setImageLoaded(true);
            };
        }, [src]);

        return imageLoaded ? <img src={src} alt="ảnh quảng cáo" width="1920px" height="450px" /> : null;
    };

    // Từng ô sản phẩm
    const ProductCard = ({ TenSanPham, GiaBan, HinhAnh, _id }) => {
        const [activeProduct, setactiveProduct] = useState(null);
        return (
            <>
                <Link
                    to={{ pathname: `/san-pham/${TenSanPham.replace('/', '')}`, search: `?id=${_id}` }}
                    rel="canonical"
                    style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}
                >
                    <Grid>
                        <LazyLoad height={240} once>
                            <Card
                                key={_id}
                                onMouseOver={() => {
                                    setactiveProduct(_id);
                                }}
                                onMouseOut={() => {
                                    setactiveProduct(null);
                                }}
                                style={{
                                    marginLeft: '0.25vw',
                                    marginRight: '0.25vw',
                                    position: 'relative',
                                    height: '430px',
                                    borderRadius: '8px',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="240px"
                                    image={HinhAnh}
                                    loading="lazy"
                                    alt={TenSanPham}
                                    style={{
                                        transform: activeProduct === _id ? 'translateY(-15px)' : 'none',
                                        transitionDuration: '0.5s',
                                        marginTop: '20px',
                                        padding: '16px',
                                        objectFit: 'contain',
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        style={{
                                            ...CssNameProduct,
                                            color: activeProduct === _id ? Theme.colors.nameHover : Theme.colors.black,
                                        }}
                                    >
                                        {TenSanPham}
                                    </Typography>
                                    <Typography style={{ ...CssPrice }}>
                                        {GiaBan.toLocaleString('vi-VN')}
                                        <FontAwesomeIcon style={{ marginLeft: '2px' }} icon={faDongSign} />
                                    </Typography>
                                    <Rating value="4" readOnly />
                                </CardContent>
                            </Card>
                        </LazyLoad>
                    </Grid>
                </Link>
            </>
        );
    };

    // List sản phẩm
    function ProductList({ dien_thoai }) {
        let sliderRef = useRef(null);
        const [isHover, setIsHover] = useState(false);

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
        };
        const handleMouseOver = () => {
            setIsHover(true);
        };

        const handleMouseOut = () => {
            setIsHover(false);
        };
        return (
            <Grid style={{ position: 'relative' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Slider ref={sliderRef} {...settings} style={{ padding: '0px 8px' }}>
                    {dien_thoai?.map((item) => {
                        return <ProductCard key={item._id} {...item}></ProductCard>;
                    })}
                </Slider>

                <button
                    aria-label="nút điều hướng sản phẩm"
                    style={{
                        height: '75px',
                        width: '40px ',
                        background: '#FFFFFF',
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: 'translate(-25%,-50%) ',
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
                    aria-label="nút điều hướng sản phẩm"
                    style={{
                        height: '75px',
                        width: '40px ',
                        background: '#FFFFFF',
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        transform: 'translate(25%,-50%) ',
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

    return (
        <>
            <Helmet>
                <title>TechHub - Thiết bị điện tử chính hãng.</title>
                <meta name="google-site-verification" content="wA3-yVl6VC3GKPklCIo25_dxhK5XFoLdHCEWt3jpjxI" />
                <meta http-equiv="Cache-Control" content="max-age=3600, public" />
                <meta http-equiv="ETag" content="my-unique-etag" />
                <meta
                    name="description"
                    content="Cửa hàng trực tuyến chuyên cung cấp các thiết bị điện tử chất lượng, từ điện thoại di động, máy tính bảng, đến các thiết bị thông minh."
                />
                <meta
                    name="keywords"
                    content="Cửa hàng trực tuyến chuyên cung cấp các thiết bị điện tử chất lượng, từ điện thoại di động, máy tính bảng, đến các thiết bị thông minh."
                />
            </Helmet>
            <Grid style={{ marginBottom: '50px' }}>
                <Carousel autoPlay="true" indicators={false}>
                    <Grid justifyContent="center" container>
                        <LazyLoad height={450} once>
                            <ImagePreloader src={anh1} />
                        </LazyLoad>
                    </Grid>
                    <Grid justifyContent="center" container>
                        <LazyLoad height={450} once>
                            <ImagePreloader src={anh2} />
                        </LazyLoad>
                    </Grid>
                </Carousel>
            </Grid>
            <Grid container justifyContent="center">
                {/* điện thoại */}
                <Grid
                    item
                    xs={10}
                    boxShadow={'0 4px 8px 0 rgba(60,64,67,.1), 0 4px 24px 8px rgba(60,64,67,.15)'}
                    style={{
                        marginTop: '20px',
                        background: Theme.colors.background,
                        padding: '1vw 0.5vw ',
                        marginBottom: '20px',
                        borderRadius: '17px',
                    }}
                >
                    <Grid container justifyContent="center" style={{ marginBottom: '10px' }}>
                        <Typography style={{ ...CssHeaderProduct }}>ĐIỆN THOẠI</Typography>
                    </Grid>
                    {homeProducts ? (
                        <ProductList dien_thoai={homeProducts[0]}></ProductList>
                    ) : (
                        <Grid container padding={'16px'} spacing={1}>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                        </Grid>
                    )}
                    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                        <Link
                            to="/dien-thoai"
                            rel="canonical"
                            style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}
                        >
                            <Button style={{ ...CssButtonFullProduct }}>
                                Xem tất cả
                                <NavigateNextIcon style={{ fontSize: '17px' }}></NavigateNextIcon>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                {/* laptop */}
                <Grid
                    item
                    xs={10}
                    boxShadow={'0 4px 8px 0 rgba(60,64,67,.1), 0 4px 24px 8px rgba(60,64,67,.15)'}
                    style={{
                        marginTop: '20px',
                        background: Theme.colors.background,
                        padding: '1vw 0.5vw ',
                        marginBottom: '20px',
                        borderRadius: '17px',
                    }}
                >
                    <Grid container justifyContent="center" style={{ marginBottom: '10px' }}>
                        <Typography style={{ ...CssHeaderProduct }}>LAPTOP</Typography>
                    </Grid>
                    {homeProducts ? (
                        <ProductList dien_thoai={homeProducts[1]}></ProductList>
                    ) : (
                        <Grid container padding={'16px'} spacing={1}>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                        </Grid>
                    )}
                    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                        <Link
                            to="/lap-top"
                            rel="canonical"
                            style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}
                        >
                            <Button style={{ ...CssButtonFullProduct }}>
                                Xem tất cả
                                <NavigateNextIcon style={{ fontSize: '17px' }}></NavigateNextIcon>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                {/* tablet */}
                <Grid
                    item
                    boxShadow={'0 4px 8px 0 rgba(60,64,67,.1), 0 4px 24px 8px rgba(60,64,67,.15)'}
                    xs={10}
                    style={{
                        marginTop: '20px',
                        background: Theme.colors.background,
                        padding: '1vw 0.5vw ',
                        marginBottom: '20px',
                        borderRadius: '17px',
                    }}
                >
                    <Grid container justifyContent="center" style={{ marginBottom: '10px' }}>
                        <Typography style={{ ...CssHeaderProduct }}>TABLET</Typography>
                    </Grid>
                    {homeProducts ? (
                        <ProductList dien_thoai={homeProducts[2]}></ProductList>
                    ) : (
                        <Grid container padding={'16px'} spacing={1}>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                        </Grid>
                    )}
                    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                        <Link
                            to="/tab-let"
                            rel="canonical"
                            style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}
                        >
                            <Button style={{ ...CssButtonFullProduct }}>
                                Xem tất cả
                                <NavigateNextIcon style={{ fontSize: '17px' }}></NavigateNextIcon>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                {/* dong ho */}
                <Grid
                    item
                    boxShadow={'0 4px 8px 0 rgba(60,64,67,.1), 0 4px 24px 8px rgba(60,64,67,.15)'}
                    xs={10}
                    style={{
                        marginTop: '20px',
                        background: Theme.colors.background,
                        padding: '1vw 0.5vw ',
                        marginBottom: '20px',
                        borderRadius: '17px',
                    }}
                >
                    <Grid container justifyContent="center" style={{ marginBottom: '10px' }}>
                        <Typography style={{ ...CssHeaderProduct }}>ĐỒNG HỒ</Typography>
                    </Grid>
                    {homeProducts ? (
                        <ProductList dien_thoai={homeProducts[3]}></ProductList>
                    ) : (
                        <Grid container padding={'16px'} spacing={1}>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                        </Grid>
                    )}
                    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                        <Link
                            to="/dong-ho"
                            rel="canonical"
                            style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}
                        >
                            <Button style={{ ...CssButtonFullProduct }}>
                                Xem tất cả
                                <NavigateNextIcon style={{ fontSize: '17px' }}></NavigateNextIcon>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                {/* tai nghe */}
                <Grid
                    item
                    boxShadow={'0 4px 8px 0 rgba(60,64,67,.1), 0 4px 24px 8px rgba(60,64,67,.15)'}
                    xs={10}
                    style={{
                        marginTop: '20px',
                        background: Theme.colors.background,
                        padding: '1vw 0.5vw ',
                        marginBottom: '20px',
                        borderRadius: '17px',
                    }}
                >
                    <Grid container justifyContent="center" style={{ marginBottom: '10px' }}>
                        <Typography style={{ ...CssHeaderProduct }}>TAI NGHE</Typography>
                    </Grid>
                    {homeProducts ? (
                        <ProductList dien_thoai={homeProducts[4]}></ProductList>
                    ) : (
                        <Grid container padding={'16px'} spacing={1}>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                            <Grid xs item>
                                <Skeleton variant="rectangular" height={430} />
                            </Grid>
                        </Grid>
                    )}
                    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                        <Link
                            to="/tai-nghe"
                            rel="canonical"
                            style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}
                        >
                            <Button style={{ ...CssButtonFullProduct }}>
                                Xem tất cả
                                <NavigateNextIcon style={{ fontSize: '17px' }}></NavigateNextIcon>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
export default Home;
