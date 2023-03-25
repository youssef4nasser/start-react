import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Aboute from './components/Aboute/Aboute';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Porfolio/Portfolio';

const router = createBrowserRouter([
  {path:"/", element: <Layout />, children:[
    {index: true, element: <Home />},
    {path:"prtfolio", element: <Portfolio />},
    {path:"aboute", element: <Aboute />},
    {path:"Contact", element: <Contact />},
    {path:"*", element: <div className='vh-100 d-flex justify-content-center align-items-center bg-success'><h2 className='fs-1 fw-bolder'>Erro 404</h2></div>},
  ]},
])

function App() {
  return (<>
  <RouterProvider router={router} />
  </>);
}

export default App;
