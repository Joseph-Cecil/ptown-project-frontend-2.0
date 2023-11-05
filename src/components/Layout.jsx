import { Outlet } from 'react-router'
import { Home } from '../pages/Home'

const Layout = () => {
  return (
   <>
    <Outlet/>
    <Home/>
   </>
  )
}

export default Layout