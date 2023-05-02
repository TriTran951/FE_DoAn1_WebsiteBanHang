import { createTheme } from '@mui/material/styles';
export const Theme = createTheme({
    colors: {
        primary: '#FADAB4',
        button: '#EDB892',
        secondary: '#f44336',
        background: '#FADAB4',
        text: '#333333',
        black: '#000000',
        white: '#ffffff',
        nameHover: '#7CCCA5',
        border: '#E5E5DB',
        filter: '#387CA5',
    },
    fontSize: {
        s: '14px',
        m: '18px',
        l: '30px',
        xl: '50px',
        xxl: '80px',
        price: '25px',
    },
    fontFamily: 'Roboto',
});

export const CssButtonHeader = {
    background: Theme.colors.primary,
    fontSize: '13px',
    lineHeight: '16px',
    color: '#333',
    fontWeight: '410',
    height: '45px',
};

export const CssButtonFullProduct = {
    height: '40px',
    width: '200px',
    background: Theme.colors.white,
    color: Theme.colors.black,
    fontSize: '10px',
    fontWeight: '300',
};

export const CssHeaderProduct = {
    fontSize: Theme.fontSize.l,
    fontWeight: '700',
};

export const CssNameProduct = {
    fontSize: Theme.fontSize.m,
    color: Theme.colors.black,
};
export const CssPrice = {
    color: Theme.colors.secondary,
    fontSize: Theme.fontSize.price,
    fontWeight: '600',
};
