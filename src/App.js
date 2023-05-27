import { publicRoutes } from './routes/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index.js';
import SiteMap from './Pages/SiteMap/index.js';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layoutt = route.layout || Layout;
                        const Page = route.component;
                        if (Page === SiteMap) {
                            return <Route key={index} path={route.path} element={<pre>{SiteMap}</pre>}></Route>;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layoutt>
                                        <Page stt={route.stt} />
                                    </Layoutt>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
