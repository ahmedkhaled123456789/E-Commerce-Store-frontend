import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../../components/admin/SideBar'
import AddProducts from '../../components/admin/AddProducts'
import AdminEditProducts from '../../components/admin/AdminEditProducts'

const AdminEditProductsPage = () => {
  return (
    <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <SideBar /> 
                </Col>
 
                <Col sm="9" xs="10" md="10">
                    <AdminEditProducts />
                </Col>
            </Row>
        </Container>
  )
}

export default AdminEditProductsPage
