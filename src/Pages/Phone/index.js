import React, { useState } from 'react';
import { Pagination, Grid, CardContent, Typography, Rating, Button } from '@mui/material';
// Tổng số sản phẩm và số sản phẩm trên một trang
const totalProducts = 37;
const productsPerPage = 12;

// Sản phẩm của bạn
const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' },
    { id: 9, name: 'Product 9' },
    { id: 10, name: 'Product 10' },
    { id: 11, name: 'Product 11' },
    { id: 12, name: 'Product 12' },
    { id: 13, name: 'Product 13' },
    { id: 14, name: 'Product 14' },
    { id: 15, name: 'Product 15' },
    { id: 16, name: 'Product 16' },
    { id: 17, name: 'Product 17' },
    { id: 18, name: 'Product 18' },
    { id: 19, name: 'Product 19' },
    { id: 20, name: 'Product 20' },
    { id: 21, name: 'Product 21' },
    { id: 22, name: 'Product 22' },
    { id: 23, name: 'Product 23' },
    { id: 24, name: 'Product 10' },
    { id: 25, name: 'Product 11' },
    { id: 12, name: 'Product 12' },
    { id: 13, name: 'Product 13' },
    { id: 14, name: 'Product 14' },
    { id: 15, name: 'Product 15' },
    { id: 16, name: 'Product 16' },
    { id: 17, name: 'Product 17' },
    { id: 18, name: 'Product 18' },
    { id: 19, name: 'Product 19' },
    { id: 20, name: 'Product 20' },
    { id: 21, name: 'Product 21' },
    { id: 22, name: 'Product 22' },
    { id: 23, name: 'Product 23' },
];

function ProductPage() {
    const [page, setPage] = useState(1);

    // Tính toán sản phẩm hiển thị trên trang hiện tại
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <Grid container spacing={2}>
                {currentProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        {/* Hiển thị thông tin sản phẩm ở đây */}
                        <div>{product.name}</div>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={Math.ceil(totalProducts / productsPerPage)}
                page={page}
                onChange={handleChangePage}
                color="primary"
                style={{ marginTop: '16px' }}
            />
        </>
    );
}

export default ProductPage;
