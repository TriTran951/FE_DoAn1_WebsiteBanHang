import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import { Card, CardMedia, CardContent, Typography, Rating, Pagination, Grid, Button, Popover } from '@mui/material';
import { Theme, CssNameProduct, CssPrice } from '~/components/GlobalStyles/theme.js';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
library.add(faDongSign);

// Sản phẩm của bạn
// const products = [
//     {
//         id: 1,
//         name: 'Product 1',
//         price: '9.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 4,
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         price: '19.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 3,
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         price: '29.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 5,
//     },
//     {
//         id: 4,
//         name: 'Product 4',
//         price: '9.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 4,
//     },
//     {
//         id: 5,
//         name: 'Product 5',
//         price: '19.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 3,
//     },
//     {
//         id: 6,
//         name: 'Product 6',
//         price: '29.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 5,
//     },
//     {
//         id: 7,
//         name: 'Product 7',
//         price: '19.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 3,
//     },
//     {
//         id: 8,
//         name: 'Product 8',
//         price: '29.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 5,
//     },
//     {
//         id: 9,
//         name: 'Product 9',
//         price: '9.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 4,
//     },
//     {
//         id: 10,
//         name: 'Product 10',
//         price: '19.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 3,
//     },
//     {
//         id: 11,
//         name: 'Product 11',
//         price: '29.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 5,
//     },
//     {
//         id: 12,
//         name: 'Product 12',
//         price: '9.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 4,
//     },
//     {
//         id: 13,
//         name: 'Product 13',
//         price: '19.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 3,
//     },
//     {
//         id: 14,
//         name: 'Product 14',
//         price: '29.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 5,
//     },
//     {
//         id: 15,
//         name: 'Product 15',
//         price: '19.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 3,
//     },
//     {
//         id: 16,
//         name: 'Product 16',
//         price: '29.99',
//         image: 'https://via.placeholder.com/150',
//         rating: 5,
//     },
// ];
//Các hãng
const brand = [
    {
        id: 1,
        img: '//cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
    },
    {
        id: 2,
        img: '//cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
    },
    {
        id: 3,
        img: '//cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg',
    },
    {
        id: 4,
        img: '//cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
    },
    {
        id: 5,
        img: '//cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png',
    },
    {
        id: 6,
        img: '////cdn.tgdd.vn/Brand/1/Realme42-b_37.png',
    },
    {
        id: 7,
        img: '//cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg',
    },
    {
        id: 8,
        img: '//cdn.tgdd.vn/Brand/1/Masstel42-b_0.png',
    },
    {
        id: 9,
        img: '//cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg',
    },
    {
        id: 10,
        img: '//cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg',
    },
    {
        id: 11,
        img: '//cdn.tgdd.vn/Brand/1/tcl-logo-lon-220x48.jpg',
    },
];
//Thông tin về thông số kỹ thuật
const specifications = [
    {
        id: 2,
        name: 'Giá',
        value: [
            'Dưới 2 triệu',
            'Từ 2 - 4 triệu',
            'Từ 4 - 7 triệu',
            'Từ 7 - 13 triệu',
            'Từ 13 - 20 triệu',
            'Trên triệu',
        ],
    },
    {
        id: 3,
        name: 'RAM',
        value: ['2GB', '3GB', '4GB', '6GB', '8GB', '12GB'],
    },
    {
        id: 4,
        name: 'Dung lượng lưu trữ',
        value: ['32GB', '64GB', '128GB', '256GB', '512GB', '1TB'],
    },
    {
        id: 5,
        name: 'Pin & Sạc',
        value: ['Pin khủng trên 5000 mAh', 'Sạc nhanh (từ 18W)', 'Sạc siêu nhanh (từ 33W)'],
    },
];
//Filter
const FilterBrand = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [bntHoverI, setbntHoverI] = useState(null);
    const [bntHoverO, setbntHoverO] = useState(null);
    return (
        <Grid>
            <Button
                aria-describedby={id}
                variant="outlined"
                onClick={handleClick}
                onMouseOver={() => {
                    setbntHoverO(id);
                }}
                onMouseOut={() => {
                    setbntHoverO(null);
                }}
                style={{
                    borderRadius: '5px',
                    marginLeft: '16px',
                    marginBottom: '5px',
                    color: Theme.colors.text,
                    fontWeight: '450',
                    fontSize: '13px',
                    border: bntHoverO === id ? `1px solid ${Theme.colors.filter}` : `1px solid ${Theme.colors.border}`,
                }}
            >
                Hãng
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                style={{ marginTop: '10px' }}
            >
                <Grid container style={{ width: '460px' }}>
                    {brand.map((brand) => {
                        return (
                            <Button
                                variant="outlined"
                                key={brand.id}
                                onMouseOver={() => {
                                    setbntHoverI(brand.id);
                                }}
                                onMouseOut={() => {
                                    setbntHoverI(null);
                                }}
                                style={{
                                    borderRadius: '5px',
                                    margin: '10px',
                                    color: Theme.colors.text,
                                    fontWeight: '450',
                                    fontSize: '13px',
                                    border:
                                        bntHoverI === brand.id
                                            ? `1px solid ${Theme.colors.filter}`
                                            : `1px solid ${Theme.colors.border}`,
                                }}
                            >
                                <img src={brand.img} height="20px" width="100px" alt="Hình ảnh thương hiệu"></img>
                            </Button>
                        );
                    })}
                </Grid>
            </Popover>
        </Grid>
    );
};
const Filter = () => {
    return (
        <Grid container>
            <Grid style={{ marginLeft: '60px', fontWeight: '600', marginTop: '8px' }}>Bộ lọc:</Grid>
            <FilterBrand></FilterBrand>
            {specifications.map((specification) => {
                return (
                    <PopoverExample id={specification.id} {...specification} key={specification.id}></PopoverExample>
                );
            })}
            {/* button tìm kiếmd */}
            {
                <Button
                    variant="outlined"
                    style={{
                        borderRadius: '5px',
                        marginLeft: '16px',
                        marginBottom: '5px',
                        color: Theme.colors.secondary,
                        fontWeight: '450',
                        fontSize: '13px',
                        border: `1px solid ${Theme.colors.secondary}`,
                    }}
                >
                    Bỏ chọn
                </Button>
            }
            <Button
                variant="contained"
                disableElevation
                style={{
                    borderRadius: '5px',
                    marginLeft: '16px',
                    marginBottom: '5px',
                    color: Theme.colors.white,
                    backgroundColor: Theme.colors.filter,
                    fontWeight: '450',
                    fontSize: '13px',
                }}
            >
                Xem kết quả
            </Button>
        </Grid>
    );
};

const PopoverExample = ({ value, name, id }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    //Trạng thái khi button hover
    const [bntHoverI, setbntHoverI] = React.useState(null);
    const [bntHoverO, setbntHoverO] = React.useState(null);
    //Trạng thái khi button được chọn
    const [bntChooseO, setbntChooseO] = React.useState([]);
    const [bntChooseI, setbntChooseI] = React.useState([]);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const state = open ? 'simple-popover' : undefined;
    //funtion xử lý khi bộ lọc chọn
    const handleValueSelect = (value, id) => {
        let updatedSelectedValues = [...bntChooseI];
        let updatedSelectedNames = [...bntChooseO];
        if (updatedSelectedValues.includes(value)) {
            updatedSelectedValues = updatedSelectedValues.filter((item) => item !== value);
            if (updatedSelectedValues.length === 0) {
                updatedSelectedNames = updatedSelectedNames.filter((item) => item !== id);
            }
        } else {
            updatedSelectedValues.push(value);
            updatedSelectedNames.push(id);
        }
        setbntChooseO(updatedSelectedNames);
        setbntChooseI(updatedSelectedValues);
    };

    return (
        <Grid>
            <Button
                aria-describedby={state}
                variant="outlined"
                onClick={handleClick}
                onMouseOver={() => {
                    setbntHoverO(id);
                }}
                onMouseOut={() => {
                    setbntHoverO(null);
                }}
                style={{
                    borderRadius: '5px',
                    marginLeft: '16px',
                    marginBottom: '5px',
                    color: Theme.colors.text,
                    fontWeight: '450',
                    fontSize: '13px',
                    border:
                        bntHoverO === id || bntChooseO.includes(id)
                            ? `1px solid ${Theme.colors.filter}`
                            : `1px solid ${Theme.colors.border}`,
                }}
            >
                {name}
            </Button>
            <Popover
                id={state}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                style={{ marginTop: '10px' }}
            >
                {value.map((value) => {
                    return (
                        <Button
                            key={value}
                            variant="outlined"
                            onMouseOver={() => {
                                setbntHoverI(value);
                            }}
                            onMouseOut={() => {
                                setbntHoverI(null);
                            }}
                            onClick={() => {
                                handleValueSelect(value, id);
                            }}
                            style={{
                                borderRadius: '5px',
                                margin: '10px',
                                color: Theme.colors.text,
                                fontWeight: '450',
                                fontSize: '13px',
                                border:
                                    bntHoverI === value || bntChooseI.includes(value)
                                        ? `1px solid ${Theme.colors.filter}`
                                        : `1px solid ${Theme.colors.border}`,
                            }}
                        >
                            {value}
                        </Button>
                    );
                })}
            </Popover>
        </Grid>
    );
};
//Danh sách hãng
const ListBrand = () => {
    const [bntHover, setbntHover] = useState(null);
    return (
        <Grid container>
            {brand.map(({ id, img }) => {
                return (
                    <Button
                        key={id}
                        id={id}
                        onMouseOver={() => {
                            setbntHover(id);
                        }}
                        onMouseOut={() => {
                            setbntHover(null);
                        }}
                        style={{
                            border:
                                bntHover === id
                                    ? `1px solid ${Theme.colors.filter}`
                                    : `1px solid ${Theme.colors.border}`,
                            borderRadius: '20px',
                            marginLeft: '16px',
                            marginBottom: '5px',
                        }}
                    >
                        <img src={img} height="20px" width="100px" alt="Hình ảnh thương hiệu"></img>
                    </Button>
                );
            })}
        </Grid>
    );
};
// Từng ô sản phẩm
const ProductCard = ({ TenSanPham, GiaBan, HinhAnh, rating, _id }) => {
    const [activeProduct, setactiveProduct] = useState(null);
    return (
        <>
            <Link
                to={{ pathname: `/san-pham/${TenSanPham.replace('/', '')}`, search: `?id=${_id}` }}
                style={{ backgroundColor: 'unset', color: 'inherit', textDecoration: 'none' }}
            >
                <Grid>
                    <Card
                        key={_id}
                        onMouseOver={() => {
                            setactiveProduct(_id);
                        }}
                        onMouseOut={() => {
                            setactiveProduct(null);
                        }}
                        style={{ position: 'relative', height: '400px' }}
                    >
                        <CardMedia
                            component="img"
                            height="215"
                            image={HinhAnh}
                            alt={TenSanPham}
                            style={{
                                transform: activeProduct === _id ? 'translateY(-15px)' : 'none',
                                marginTop: '20px',
                                transitionDuration: '0.5s',
                                padding: '8px',
                                objectFit: 'contain',
                            }}
                        />
                        <CardContent>
                            <Typography
                                style={{
                                    ...CssNameProduct,
                                    fontSize: Theme.fontSize.s,
                                    color: activeProduct === _id ? Theme.colors.nameHover : Theme.colors.black,
                                }}
                            >
                                {TenSanPham}
                            </Typography>
                            <Typography style={{ ...CssPrice, fontSize: Theme.fontSize.m }}>
                                {GiaBan.toLocaleString('vi-VN')}
                                <FontAwesomeIcon icon={faDongSign} />
                            </Typography>
                            <Rating value="4" readOnly />
                        </CardContent>
                    </Card>
                </Grid>
            </Link>
        </>
    );
};
function ProductPage({ stt }) {
    const [page, setPage] = useState(1);
    const [products, setproducts] = useState([]);
    let loaiSP;
    let URL;
    if (stt === 0) {
        URL = process.env.REACT_APP_hostBE + '/api/client/dienthoai';
        loaiSP = 'Điện thoại';
    }
    if (stt === 1) {
        URL = process.env.REACT_APP_hostBE + '/api/client/laptop';
        loaiSP = 'Laptop';
    }
    if (stt === 2) {
        URL = process.env.REACT_APP_hostBE + '/api/client/tablet';
        loaiSP = 'Tablet';
    }
    if (stt === 3) {
        URL = process.env.REACT_APP_hostBE + '/api/client/dongho';
        loaiSP = 'Đồng hồ';
    }
    if (stt === 4) {
        URL = process.env.REACT_APP_hostBE + '/api/client/tainghe';
        loaiSP = 'Tai nghe';
    }
    // Tổng số sản phẩm và số sản phẩm trên một trang
    useEffect(() => {
        async function fetchData() {
            try {
                await axios({
                    method: 'GET',
                    url: URL,
                }).then((res) => {
                    setproducts(res.data);
                });
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [URL]);
    // Tính toán sản phẩm hiển thị trên trang hiện tại
    let totalProducts = products.length;
    console.log(totalProducts);
    const productsPerPage = 30;
    const startIndex = 1 + productsPerPage * (page - 1);
    const endIndex =
        startIndex + productsPerPage - 1 > totalProducts ? totalProducts : startIndex + productsPerPage - 1;
    const currentProducts = products.slice(startIndex - 1, endIndex);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <Helmet>
                <title>TechHub - {loaiSP}.</title>
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
            <Grid container direction="column" alignItems="center">
                <Grid container xs={10} style={{ marginBottom: '10px' }}>
                    <ListBrand></ListBrand>
                </Grid>
                <Grid container xs={10} style={{ marginBottom: '10px' }}>
                    <Filter></Filter>
                </Grid>
                <Grid container xs={10} spacing={1} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    {currentProducts?.map((product) => (
                        <Grid item xs={2} key={product._id}>
                            {/* Hiển thị thông tin sản phẩm ở đây */}
                            <ProductCard key={product._id} {...product}></ProductCard>
                        </Grid>
                    ))}
                </Grid>
                <Pagination
                    count={Math.ceil(totalProducts / productsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    style={{ marginTop: '16px', padding: '16px 0px 0px 16px' }}
                />
            </Grid>
        </>
    );
}

export default ProductPage;
