import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../../components/admin/SideBar'
import AddProducts from '../../components/admin/AddProducts'

const AddProductsPage = () => {
  return (
    <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <SideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AddProducts />
                </Col>
            </Row>
        </Container>
  )
}

export default AddProductsPage
