import React from 'react'
import Routers from '../../Routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from '../Header/Head'
import Louding from '../loading/Louding'
import Button from '../button/Button'
import Cuser from '../curser/Curser'

const Layout = () => {
 
  
  return (

    < > 
<Louding/>
<Button/>
<Cuser/>
    <Head/>
     <Header/>

<div>
  <Routers/>
</div>
<Footer/>
    </ >
  )
}

export default Layout