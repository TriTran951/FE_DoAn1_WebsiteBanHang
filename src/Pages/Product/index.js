import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import { Card, CardMedia, CardContent, Typography, Rating, Pagination, Grid, Button, Popover } from '@mui/material';
import { Theme, CssNameProduct, CssPrice } from '~/components/GlobalStyles/theme.js';
import { useLocation } from 'react-router-dom';
library.add(faDongSign);
function Product() {
    const TenSanPham = 'Iphone 15 128 GB | Chính hãng';
    const GiaBan = 50000000;
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [products, setproducts] = useState([]);
    const id = params.get('id');
    console.log(id);
    useEffect(() => {
        async function fetchData() {
            try {
                await axios({
                    method: 'POST',
                    url: 'http://localhost:3150/api/client/getproduct',
                    data: { id: id },
                }).then((res) => {
                    setproducts(res.data);
                    console.log(res.data);
                });
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <Grid container justifyContent="center">
                <Grid container xs={10}>
                    {/* Tên sản phẩm */}
                    <Grid container justifyContent="start">
                        <h1>{TenSanPham}</h1>
                    </Grid>
                    {/* ô hình ảnh, phiên bản, các sản phẩm liên quan */}
                    <Grid container>
                        <Grid container xs={8} style={{ background: Theme.colors.black, height: '400px' }}>
                            ssss
                        </Grid>
                        <Grid container xs={4} direction="column">
                            <Grid container justifyContent="start">
                                {/* Giá */}
                                <Typography style={{ ...CssPrice, fontSize: Theme.fontSize.m }}>
                                    {GiaBan.toLocaleString('vi-VN')}
                                    <FontAwesomeIcon icon={faDongSign} />
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="start"></Grid>
                        </Grid>
                    </Grid>
                    {/* hình ảnh, phiên bản,  */}
                </Grid>
            </Grid>
        </>
    );
}
export default Product;
