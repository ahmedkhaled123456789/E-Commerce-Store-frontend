import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../../components/admin/SideBar'
import AddCoupon from '../../components/admin/AddCoupon'

const AddCouponPage = () => {
  return (
    <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <SideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AddCoupon />
                </Col>
            </Row>
        </Container>
  )
}

export default AddCouponPage
