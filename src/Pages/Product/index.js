import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import { Card, CardMedia, CardContent, Typography, Rating, Pagination, Grid, Button, Popover } from '@mui/material';
import { Theme, CssNameProduct, CssPrice } from '~/components/GlobalStyles/theme.js';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

library.add(faDongSign);
function Product() {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let [product, setproducts] = useState({});
    let id = params.get('id');
    let [change, setChange] = useState(1);
    let [productcolor, setProductcolor] = useState();
    let [price, setPrice] = useState();
    console.log(id);
    useEffect(() => {
        async function fetchData() {
            try {
                await axios({
                    method: 'POST',
                    url: 'http://localhost:3150/api/client/getproduct',
                    data: { id: id },
                }).then((res) => {
                    window.scroll(0, 0);
                    setproducts(res.data);
                    setPrice(res.data.GiaBan);
                    console.log(res.data);
                });
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [change]);
    return (
        <>
            <Grid container justifyContent="center" paddingTop={'8px'}>
                <Grid container xs={10}>
                    {/* Tên sản phẩm */}
                    <Grid container justifyContent="start" style={{ paddingBottom: '16px' }}>
                        <h1 style={{ fontSize: Theme.fontSize.m }}>{product.TenSanPham}</h1>
                    </Grid>
                    <Grid container>
                        {/* Cột hình ảnh và Thông số */}
                        <Grid container direction="column" xs={8}>
                            <Grid
                                container
                                justifyContent="center"
                                boxShadow={'0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)'}
                                style={{
                                    background: Theme.colors.white,
                                    height: '400px',
                                    border: `1px solid ${Theme.colors.button}`,
                                    borderRadius: '15px',
                                }}
                            >
                                <img src={product.HinhAnh} style={{ objectFit: 'contain' }}></img>
                            </Grid>
                            <Grid container direction="column" paddingTop={'32px'}>
                                <Card
                                    boxShadow={'0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)'}
                                    style={{
                                        border: `2px solid ${Theme.colors.borderbasic}`,
                                        borderRadius: ' 10px ',
                                        padding: '16px',
                                    }}
                                >
                                    <Grid container direction="column">
                                        <Typography style={{ fontWeight: 'bold', fontSize: Theme.fontSize.m }}>
                                            Thông Số kỹ thuật
                                        </Typography>
                                        <Grid
                                            container
                                            direction="column"
                                            style={{
                                                border: `2px solid ${Theme.colors.borderbasic}`,
                                                borderRadius: ' 10px ',
                                                marginTop: '16px',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {product.thongso?.map((item, index) => {
                                                return (
                                                    <Grid
                                                        container
                                                        key={index}
                                                        style={{
                                                            backgroundColor:
                                                                index % 2 == 0
                                                                    ? Theme.colors.borderbasic
                                                                    : Theme.colors.white,
                                                            padding: '16px',
                                                        }}
                                                    >
                                                        <Grid xs={6}>
                                                            <Typography style={{ fontSize: '15px' }}>
                                                                {item.TenThongSo}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs={6}>
                                                            <Typography style={{ fontSize: '15px' }}>
                                                                {item.GiaTri}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                        {/* Thông tin về phiên bản và các sản phẩm liên quan */}
                        <Grid container xs={4} style={{ paddingLeft: '16px' }} direction="column">
                            <Grid container justifyContent="start" style={{ paddingBottom: '8px' }}>
                                {/* Giá */}
                                <Typography style={{ ...CssPrice, fontSize: Theme.fontSize.ms }}>
                                    {price?.toLocaleString('vi-VN')}
                                    <FontAwesomeIcon icon={faDongSign} />
                                </Typography>
                            </Grid>
                            {/* Sản phẩm liên quan */}
                            <Grid container justifyContent="start" spacing={2}>
                                {product.SanPhamLienQuan?.map((item) => {
                                    return (
                                        <Grid xs={4} item key={item.id}>
                                            <Link
                                                width={'100%'}
                                                to={{
                                                    pathname: `/san-pham/${item.TenSanPham.replace('/', '')}`,
                                                    search: `?id=${item._id}`,
                                                }}
                                                style={{
                                                    backgroundColor: 'unset',
                                                    color: 'inherit',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                <Button
                                                    onClick={() => {
                                                        setChange(() => {
                                                            console.log(change);
                                                            return ++change;
                                                        });
                                                    }}
                                                    style={{
                                                        border:
                                                            product._id === item._id
                                                                ? `2px solid ${Theme.colors.secondary}`
                                                                : `1px solid ${Theme.colors.borderbasic}`,
                                                        height: '50px',
                                                        minWidth: '100%',
                                                        borderRadius: '8px',

                                                        width: '100%',
                                                    }}
                                                >
                                                    <Grid
                                                        container
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        style={{ height: '100%', width: '100%' }}
                                                    >
                                                        <Grid item xs={12}>
                                                            <Typography
                                                                style={{
                                                                    fontSize: Theme.fontSize.s,
                                                                    color: Theme.colors.text,
                                                                    fontWeight: 'bold',
                                                                }}
                                                            >
                                                                12gb
                                                                {/* {item.TenSanPham} */}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid>
                                                            <Typography
                                                                style={{
                                                                    fontSize: Theme.fontSize.s,
                                                                    color: Theme.colors.text,
                                                                }}
                                                            >
                                                                {item.GiaBan?.toLocaleString('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND',
                                                                })}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Button>
                                            </Link>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                            {/* phiên bản */}
                            {
                                <>
                                    <Grid
                                        container
                                        justifyContent="start"
                                        style={{ paddingBottom: '8px', paddingTop: '8px' }}
                                    >
                                        {/* chọn màu */}
                                        <Typography style={{ fontSize: Theme.fontSize.m, fontWeight: 'bold' }}>
                                            Chọn màu
                                        </Typography>
                                    </Grid>
                                    <Grid container justifyContent="start" spacing={2}>
                                        {product.phienban?.map((item) => {
                                            return (
                                                <Grid xs={6} container item key={item.id}>
                                                    <Button
                                                        onClick={() => {
                                                            setProductcolor(item._id);
                                                            setPrice(item.GiaBan);
                                                        }}
                                                        style={{
                                                            border:
                                                                productcolor === item._id
                                                                    ? `2px solid ${Theme.colors.secondary}`
                                                                    : `1px solid ${Theme.colors.borderbasic}`,
                                                            borderRadius: '8px',

                                                            height: '60px',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <Grid container alignItems="center">
                                                            <Grid container xs={4}>
                                                                <img src={item.HinhAnh}></img>
                                                            </Grid>
                                                            <Grid
                                                                xs={8}
                                                                container
                                                                direction="row"
                                                                justifyContent="center"
                                                                alignItems="center"
                                                                style={{ height: '100%', width: '100%' }}
                                                            >
                                                                <Grid item xs={12}>
                                                                    <Typography
                                                                        style={{
                                                                            fontSize: Theme.fontSize.s,
                                                                            color: Theme.colors.text,
                                                                            fontWeight: 'bold',
                                                                        }}
                                                                    >
                                                                        {item.TenPhienBan}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid alignContent="center">
                                                                    <Typography
                                                                        style={{
                                                                            fontSize: Theme.fontSize.s,
                                                                            color: Theme.colors.text,
                                                                        }}
                                                                    >
                                                                        {item.GiaBan?.toLocaleString('vi-VN', {
                                                                            style: 'currency',
                                                                            currency: 'VND',
                                                                        })}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Button>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </>
                            }
                            <Grid container style={{ paddingTop: '12px' }}>
                                <Grid xs={10}>
                                    <Button
                                        style={{
                                            height: '50px',
                                            width: '100%',
                                            background: Theme.colors.secondary,
                                            borderRadius: '8px',
                                            color: Theme.colors.white,
                                            fontWeight: 'bold',
                                            fontSize: Theme.fontSize.m,
                                        }}
                                    >
                                        Mua ngay
                                    </Button>
                                </Grid>
                                <Grid xs={2} paddingLeft="4px">
                                    <Button
                                        style={{
                                            height: '50px',
                                            width: '100%',
                                            background: Theme.colors.white,
                                            color: Theme.colors.secondary,
                                            fontWeight: 'bold',
                                            borderRadius: '8px',
                                            border: `1px solid ${Theme.colors.secondary}`,
                                            fontSize: Theme.fontSize.min,
                                        }}
                                    >
                                        Thêm vào giỏ hàng
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* hình ảnh, phiên bản,  */}
                </Grid>
            </Grid>
        </>
    );
}
export default Product;
