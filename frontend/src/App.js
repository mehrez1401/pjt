import logo from './logo.svg';
import './App.css';

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from'./Pages/Home';
function App() {

  const router = createBrowserRouter([
    {
      path :'/',
      element :<div>Home Page</div>
    },
    {
      path : '/login',
      element : <Login/>
    },
    
    {
    path : '/register',
    element : <Register/>
  },
  {
    path : '/home',
    element : <Home/>
  }




  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
