import React from 'react'
import Routers from '../../Routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from '../Header/Head'
import Louding from '../loading/Louding'
import Button from '../button/Button'
import Cuser from '../curser/Curser'
import {  useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  
  return (

    < > 
<Louding/>
<Button/>
<Cuser/>
{
  location.pathname.startsWith("/admin") ? <> </>  :
  <>
  <Head/>
 
  </>
   
  }
   <Header/>

<div>
  <Routers/>
</div>
<Footer/>
    </ >
  )
}

export default Layout