import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function Login() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img src={require('./Images/image-4.jpg')} class="img-fluid" alt="..." />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Login</h1>
            <form>
      <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' className='mb-4' block color='info'>
        Sign in
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
        <p>or Login with:</p>

        <MDBBtn floating className='mx-1' color='primary'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating className='mx-1' color='danger'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating className='mx-1' color='info'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating className='mx-1' color='dark'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
