import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../../components/admin/SideBar'
import AllProducts from '../../components/admin/AllProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/productReducer'
  
const AllProductsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const get=async() =>{
     await dispatch(getProducts(50))

    }
    get();
  }, [dispatch])
  const product = useSelector((state) => state.products.products)
console.log(product)
  return (
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <SideBar />
        </Col>

        <Col sm="9" xs="10" md="10">

<Row>
{
   product?.map((product, index) => (
    <AllProducts
      product={product}
       key={index}
    />
  ))
}

</Row>


         </Col>
    </Row>
</Container>
  )
}

export default AllProductsPage
