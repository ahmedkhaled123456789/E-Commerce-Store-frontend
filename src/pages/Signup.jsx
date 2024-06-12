import React, { useEffect } from "react";
import { Container, Row, Col, FormGroup, Form, Button, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import signupImg from '../components/UI/images/login.jfif';
import '../style/Signup.css';
import signupHook from "../hook/auth/signup-hook";

const Signup = () => {
  const {
    email,
    password,
    name,
    passwordConfirm,
    loading,
    isPress,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangePasswordConfirm,
    onSubmit,
  } = signupHook();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="signup">
      <Container>
        <Row className="align-items-center res_content">
          <Col lg='6'>
            <div className="img">
              <img src={signupImg} alt="Signup" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6">
            <div className="info text-center">
              <h3>Create an account</h3>
              <p>Enter your details below</p>
              <Form className="auth_form" onSubmit={onSubmit}>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onChangeName}
                    aria-label="Name"
                    required
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                    aria-label="Email"
                    required
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                    aria-label="Password"
                    required
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={onChangePasswordConfirm}
                    aria-label="Confirm Password"
                    required
                  />
                </FormGroup>
                <Button type="submit" className="login_btn"  >
                  {isPress ? (loading ? <Spinner size="sm" /> : "Create an account") : "Create an account"}
                </Button>
                <Button type="button" className="login_btn google_btn">
                  <span><i className="ri-google-fill"></i></span>
                  Sign up with Google
                </Button>
                <p className="text-center contect">
                  Already have an account?
                  <span> <Link to="/login">Login</Link></span>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
