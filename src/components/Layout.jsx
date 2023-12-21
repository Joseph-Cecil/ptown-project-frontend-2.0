import { Outlet } from 'react-router'
import { Home } from '../pages/Home';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
   <>
    <Outlet/>
    <ToastContainer/>
    <Home/>
   </>
  )
}

export default Layout