import { React, useState } from 'react';
import logo from './aaa.png';
import Carousel from 'react-material-ui-carousel';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { Theme } from '../../GlobalStyles/theme';
import { CssButtonHeader } from '../../GlobalStyles/theme';
import { TextField } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import TabletIcon from '@mui/icons-material/Tablet';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import anh1 from './img/anhbia1.png';
import anh2 from './img/anhbia2.jpg';
import { Link } from 'react-router-dom';
function Search() {
    return (
        <Grid
            container
            item
            xs={8}
            justifyContent="left"
            alignItems="center"
            style={{ background: '#fff' }}
            sx={{ borderRadius: '5px' }}
        >
            <TextField
                sx={{ border: 'none', '& fieldset': { border: 'none' }, width: '93%' }}
                id="outlined-basic"
                variant="outlined"
                placeholder="Tìm kiếm"
                inputProps={{ style: { fontSize: 15 } }}
            ></TextField>
            <SearchIcon style={{ height: '7%', width: '7%', paddingRight: '10px' }}></SearchIcon>
        </Grid>
    );
}
const TypeProduct = [
    {
        id: 1,
        name: 'Điện thoại',
        iconn: SmartphoneIcon,
        link: '/dien-thoai',
    },
    {
        id: 2,
        name: 'Laptop',
        iconn: LaptopIcon,
        link: '/lap-top',
    },
    {
        id: 3,
        name: 'Tablet',
        iconn: TabletIcon,
        link: '/tab-let',
    },
    {
        id: 4,
        name: 'Đồng hồ',
        iconn: WatchOutlinedIcon,
        link: '/dong-ho',
    },
    {
        id: 5,
        name: 'Tai nghe',
        iconn: HeadphonesIcon,
        link: '/tai-nghe',
    },
];
function Header() {
    const [Idproduct, setIdproduct] = useState('');
    return (
        <>
            <Grid
                container
                direction="row"
                style={{
                    background: Theme.colors.primary,
                    paddingTop: '10px',
                    marginBottom: '20px',
                    paddingBottom: '10px',
                }}
                justifyContent="center"
                alignItems="center"
            >
                {/* Logo, thanh tìm kiếm, nút giỏ hàng */}
                <Grid container justifyContent="center">
                    <Grid container item lg={3} sm={4}>
                        <Link to="/" style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}>
                            <Grid justifyContent="center" alignItems="center" container>
                                <div>
                                    <img src={logo} height={Theme.fontSize.xxl} width={Theme.fontSize.xxl}></img>
                                </div>
                                <div style={{ fontWeight: 'bold', fontSize: Theme.fontSize.xl, fontStyle: 'italic' }}>
                                    Tech Hub
                                </div>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid container item lg={5} sm={5} justifyContent="center" alignItems="center">
                        <Search></Search>
                    </Grid>
                    <Grid container item lg={2} sm={2.25} xs={4} justifyContent="space-around" alignItems="center">
                        <Button
                            style={{
                                ...CssButtonHeader,
                                fontWeight: '400',
                                fontSize: '10px',
                                background: Theme.colors.button,
                            }}
                        >
                            Lịch sử đơn hàng
                        </Button>
                        <Button style={{ ...CssButtonHeader, background: Theme.colors.button, fontWeight: '500' }}>
                            Giỏ hàng
                            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        </Button>
                    </Grid>
                </Grid>
                {/* Menu các loại sản phâmr */}
                <Grid container justifyContent="space-between" lg={5} sm={8} xs={10}>
                    {TypeProduct.map((product) => {
                        const Iconlogo = product.iconn;
                        return (
                            <Link
                                to={product.link}
                                style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}
                            >
                                <Button
                                    style={{
                                        ...CssButtonHeader,
                                        background:
                                            Idproduct === product.id ? Theme.colors.button : Theme.colors.primary,
                                    }}
                                    key={product.id}
                                    onClick={(e) => {
                                        setIdproduct(product.id);
                                    }}
                                >
                                    <Iconlogo sx={{ paddingRight: '5px' }} /> {product.name}
                                </Button>
                            </Link>
                        );
                    })}
                </Grid>
            </Grid>
            <Grid style={{ marginBottom: '20px' }}>
                <Carousel autoPlay="true" indicators={false}>
                    <Grid justifyContent="center" container>
                        <img src={anh1}></img>
                    </Grid>
                    <Grid justifyContent="center" container>
                        <img src={anh2}></img>
                    </Grid>
                </Carousel>
            </Grid>
        </>
    );
}

export default Header;
