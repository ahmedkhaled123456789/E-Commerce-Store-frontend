import React, { useEffect, useState } from "react";
 import { Container, Row, Col, FormGroup, Form, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
 import signupImg from '../components/UI/images/login.jfif'
 import '../style/Signup.css';
import LoginHook from "../hook/auth/login-hook";

  const Login = () => {
    const [
      email,
      password,
      loading,
      onChangeEmail,
      onChangePassword,
      onSubmit,
      isPress,
    ] = LoginHook();




    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
       <section className="signup">
        <Container>
        <Row className="res_content">
           <Col lg='6'>
            <div className="img">
              <img src={signupImg} alt="" />
            </div>
           </Col>
              <Col lg="6"  >
               <div className="info login_info text-center ">
               <h3  > Log in to Exclusive</h3>
                <p>Enter your details below</p>
                <Form className="auth_form  "  onSubmit={onSubmit}>
                  
                   <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="Email or Phone Number"
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}
                      
                    />
                  </FormGroup>

                  <div className="btns ">
 
                  <button type="submit" className="login_btn login_click">
                  {isPress ? (
                      loading ? (
                        <Spinner size="sm" />
                      ) : (
                        "Log In"
                      )
                    ) : (
                      "Log In"
                    )}
                 
                  </button>
                   <span>Forget Password?</span>
                  </div>
                  
                 
                </Form>
               </div>
              </Col>
          
          </Row>
          </Container>   
       
 
       </section>
   );
};

export default Login;
