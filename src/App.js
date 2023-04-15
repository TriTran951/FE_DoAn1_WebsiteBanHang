import { publicRoutes } from './routes/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index.js';
import theme from './components/GlobalStyles/theme.js';
import { ThemeProvider } from '@mui/material/styles';
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layoutt = route.layout || Layout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layoutt>
                                            <Page />
                                        </Layoutt>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
