import Header from './Header';

function Layout({ children }) {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
        </div>
    );
}

export default Layout;