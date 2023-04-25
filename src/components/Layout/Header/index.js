import React from 'react';
import anh1 from './aaa.png';

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
function Header() {
    return (
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
                <Grid container item xs={3} justifyContent="center" alignItems="center">
                    <div>
                        <img src={anh1} height={Theme.fontSize.xxl} width={Theme.fontSize.xxl}></img>
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: Theme.fontSize.xl, fontStyle: 'italic' }}>Tech Hub</div>
                </Grid>
                <Grid container item xs={5} justifyContent="center" alignItems="center">
                    <Search></Search>
                </Grid>
                <Grid container item xs={2} justifyContent="space-between" alignItems="center">
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
            <Grid container justifyContent="space-between" xs={5}>
                <Grid>
                    <Button style={CssButtonHeader}>
                        <SmartphoneIcon sx={{ paddingRight: '5px' }}></SmartphoneIcon> Điện thoại
                    </Button>
                </Grid>
                <Button style={CssButtonHeader}>
                    <LaptopIcon sx={{ paddingRight: '5px' }}></LaptopIcon> Laptop
                </Button>
                <Button style={CssButtonHeader}>
                    <TabletIcon sx={{ paddingRight: '5px' }}></TabletIcon> Tablet
                </Button>
                <Button style={CssButtonHeader}>
                    <WatchOutlinedIcon sx={{ paddingRight: '5px' }}></WatchOutlinedIcon> Đồng hồ
                </Button>
                <Button style={CssButtonHeader}>
                    <HeadphonesIcon sx={{ paddingRight: '5px' }}></HeadphonesIcon> Tai nghe
                </Button>
            </Grid>
        </Grid>
    );
}

export default Header;
