import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../../components/admin/SideBar'
import AddCategories from '../../components/admin/AddCategories'

const AddCategoriesPage = () => {
  return (
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <SideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
            <AddCategories />
        </Col>
    </Row>
</Container>
  )
}

export default AddCategoriesPage
