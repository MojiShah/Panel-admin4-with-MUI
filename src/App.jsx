import './App.css'
import Home from './pages/Home'
import Setting from './pages/Setting'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products'
import Analytics from './pages/Analytics';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/setting', element: <Setting /> },
];
function App() {

  return (
    <>
      <Navbar />
      {
        <Routes>
          {routes.map((page, pageIndex) =>
            <Route key={pageIndex} path={page.path} element={page.element} />
          )}
        </Routes>
      }
    </>
  )
}

export default App
