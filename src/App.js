import './app.scss';
import {createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';
import { Navbar } from './home/Navbar';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Home } from './home/Home';

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    );
  }

  const router = createBrowserRouter([{
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      },
      {
        path:'/',
        element: <Home/>
      }
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
