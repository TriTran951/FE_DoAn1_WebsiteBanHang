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
        borderbasic: '#d1d5db',
    },
    fontSize: {
        min: '8px',
        s: '13px',
        m: '18px',
        ms: '25px',
        l: '30px',
        xl: '50px',
        xxl: '80px',
        price: '25px',
        name: '15px',
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
    borderRadius: '9px',
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
    fontSize: Theme.fontSize.name,
    color: Theme.colors.black,
};
export const CssPrice = {
    color: Theme.colors.secondary,
    fontSize: Theme.fontSize.price,
    fontWeight: '600',
};
