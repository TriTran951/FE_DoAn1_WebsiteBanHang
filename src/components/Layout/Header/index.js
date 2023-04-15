import { BellOutlined, MailOutlined, BgColorsOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import React from 'react';
import anh1 from './aaa.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { ThemeProvider } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.common.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),

        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
function Header() {
    return (
        <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
            <Grid container item xs={3} justifyContent="center" alignItems="center">
                <div>
                    <img src={anh1} height="42" width="42"></img>
                </div>
                <div>Tech Hub</div>
            </Grid>
            <Grid item xs={5}>
                <Search>
                    <StyledInputBase placeholder="Tìm kiếm" inputProps={{ 'aria-label': 'search' }} />
                    <IconButton aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Search>
            </Grid>
            <Grid item xs={2}>
                <Button color="secondary">fsd</Button>
            </Grid>
        </Grid>
        // <div className={cx('header-container')}>
        //     <div className={cx('header-row-1')}>
        //         <div className="logo">
        //             <div>
        //                 <img src={anh1} height="42" width="42" className={cx('icon-container')}></img>
        //             </div>
        //             <div className={cx('store-name')}>Tech Hub</div>
        //         </div>
        //         <div className={cx('search-bar')}>
        //             <input></input>
        //             <BsSearch />
        //         </div>
        //         <div className={cx('order')}>
        //             <div className={cx('order-history')}>
        //                 <button>Lịch sử đơn hàng</button>
        //             </div>
        //             <div className={cx('cart')}>
        //                 <Button className="primary col-6" variant="contained">
        //                     <BsCart />
        //                     Giỏ hàng
        //                 </Button>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="header-row-2">{/* Mã HTML để hiển thị danh sách sản phẩm */}</div>
        // </div>
    );
}

export default Header;
