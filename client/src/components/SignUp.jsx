import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function SignUp() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img src={require('./Images/image-2.jpg')} class="img-fluid" alt="..." />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Sign Up</h1>
            <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form3Example5'
        label='Subscribe to our newsletter'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block color='info'>
        Register
      </MDBBtn>

      <div className='text-center'>
      
        <p>or sign up with:</p>

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

export default SignUp;
