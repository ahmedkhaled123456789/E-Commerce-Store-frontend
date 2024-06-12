import React, { useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import "../style/Account.css";
import { useDispatch } from "react-redux";
import { getLoggedUser } from "../store/auth/authSlice";
import ProfileHook from "../hook/user/profile-hook";
const Account = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    handelSubmit,
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
  ] = ProfileHook();

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const run = async () => {
  //     await dispatch(getLoggedUser());
  //   };
  //   run();
  // }, [dispatch]);
  return (
    <section>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

          <Breadcrumb.Item active>My Account</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="account">
          {/* <Col lg="4" md="12">
            <div className="content_account">
              <h4>Manage My Account</h4>
              <div className="into">
                <p className="para">My Profile</p>
                <p>Address Book</p>
                <p>My Payment Options</p>
              </div>
            </div>

            <div className="content_account">
              <h4>My Orders</h4>
              <div className="into">
                <p>My Returns</p>
                <p>My Cancellations</p>
              </div>
            </div>

            <div className="content_account">
              <h4>My WishList</h4>
            </div>
          </Col> */}

          <Col lg="8" md="12" sm="12" xs="12" className="edit_input ">
            <div className="header_edit mb-2">
              <h2>Edit Your Profile</h2>
            </div>
            <Form>
              <div className="information">
                <FormGroup>
                  <label>First Name</label>
                  <br />
                  <input
                    type="text"
                    value={name}
                    onChange={onChangeName}
                    placeholder="Md"
                  />
                </FormGroup>
                <FormGroup>
                  <label>Email</label> <br />
                  <input
                    type="text"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="email"
                  />
                </FormGroup>
              </div>
              <div className="btn_pass d-flex align-items-center  justify-content-end ">
                <span>Cancel</span>
                <button onClick={handelSubmit} className="pass_btn">
                  Save Change
                </button>
              </div>
              <div className="password_change">
                <h2>Password Changes</h2>
                <FormGroup> 
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={onChangeOldPass}
                    placeholder="Current Password"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={onChangeNewPass}
                    placeholder="New Password"
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    value={confirmNewPassword}
                    onChange={onChangeConfirmPass}
                    placeholder="Confirm New Password"
                  />
                </FormGroup>
              </div>

              <div className="btn_pass d-flex align-items-center  justify-content-end ">
                <span>Cancel</span>
                <button onClick={changePassword} className="pass_btn">
                  Save Change
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Account;
