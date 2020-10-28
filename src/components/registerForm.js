import React, {  useState } from 'react'
import OtpInput from 'react-otp-input';

import { connect } from 'react-redux'
// import getAllTasks from '../store/actions/registerActionCreator'

function Register (props) {
  const [otp,setOTP]=useState('')
 const handleChange = otp => setOTP(otp );
console.log('hhdhdhddh',otp)
  return (
    <React.Fragment>
      <nav
        class='navbar navbar-dark bg-dark'
        style={{
          height: 50,
          color: '#fff',
          justifyContent: 'center',
          background: '#2E4B64'
        }}
      >
        <div className='row' style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div
            className='step-1'
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              marginRight: 60
            }}
          >
            {' '}
            <span className='dot' style={{ paddingLeft: 10, background: '' }}>
              {' '}
              1
            </span>
            Personal Details
          </div>

          <div
            className='step-1'
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              marginRight: 60
            }}
          >
            {' '}
            <span
              className='dot'
              style={{ paddingLeft: 10, background: '#3d566f' }}
            >
              {' '}
              2
            </span>
            Company Details
          </div>

          <div
            className='step-1'
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              marginRight: 60
            }}
          >
            {' '}
            <span
              className='dot'
              style={{ paddingLeft: 10, background: '#3d566f' }}
            >
              {' '}
              3
            </span>
            Email Verification{' '}
          </div>
        </div>
      </nav>

      <div className='content-holder'  >
        <img
          style={{ visibility: 'hidden' }}
          src='Amazon Logo.png'
          alt='Amazon.com'
        />
        <p id='SignInTxt'>Add your personal details</p>
        <p style={{ textAlign: 'center' }} className='b-text'>
          Let's tell us your details to proceed further, Thanks to be here !
        </p>

        <div id='signInBorder'>
          <p id='SignInTxt'></p>
          <label style={{ color: '#6C6B6B', fontSize: 15 }}>
            Full Name
            <br />
            <input
              type='email'
              name='email'
              defaultValue
              style={{
                paddingLeft: 8,
                height: 28,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                marginTop: 3
              }}
              value='Chelladurai'
            />
          </label>
          <br />
          <label style={{ color: '#6C6B6B', fontSize: 15 }}>
            Gender
            <br />
            <div className='row'>
              <div className='col-3'>
                <div class='rectangle'>Male</div>
              </div>

              <div className='col-3'>
                <div class='rectangle'>Female</div>
              </div>

              <div className='col-3'>
                <div class='rectangle'>Others</div>
              </div>

              <div className='col-3'></div>
            </div>
          </label>

          <label style={{ color: '#6C6B6B', fontSize: 15 }}>
            Country
            <br />
            {/* <input type="email" name="email" defaultValue style={{paddingLeft:3,height:28,borderStyle:'solid',borderWidth:1,borderColor:'#CECECE',marginTop:3}} value='Chelladurai' /> */}
            <select
              style={{
                paddingLeft: 3,
                height: 28,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                marginTop: 3,
                width: 312,
                background: 'transparent',
                borderRadius: 2
              }}
            >
              <option>India</option>
              <option>United states</option>
              <option>Germany</option>
              <option>Canada</option>
            </select>
          </label>

          <label style={{ color: '#6C6B6B', fontSize: 15 }}>
            State
            <br />
            {/* <input type="email" name="email" defaultValue style={{paddingLeft:3,height:28,borderStyle:'solid',borderWidth:1,borderColor:'#CECECE',marginTop:3}} value='Chelladurai' /> */}
            <select
              style={{
                paddingLeft: 3,
                height: 28,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                marginTop: 3,
                width: 312,
                background: 'transparent',
                borderRadius: 2
              }}
            >
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Andhra pradesh</option>
            </select>
          </label>

          <label style={{ color: '#6C6B6B', fontSize: 15 }}>
            Phone
            <br />
            <input
              type='email'
              name='email'
              defaultValue
              style={{
                paddingLeft: 3,
                height: 28,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                marginTop: 3
              }}
              value='+91-8122817097'
            />
          </label>

          <div className='mb-4'>
            <button id='amazon'>Next</button>
          </div>
        </div>
      </div>

      <div className='content-holder' style={{ display: 'none' }}>
        <img
          style={{ visibility: 'hidden' }}
          src='Amazon Logo.png'
          alt='Amazon.com'
        />
        <p id='SignInTxt'>Add your Company details</p>
        <p style={{ textAlign: 'center' }} className='b-text'>
          Let's share your company details to proceed further, Thanks to be here
          !
        </p>

        <div id='signInBorder'>
          <p id='SignInTxt'></p>
          <div className='row'>
            <div className='col-3'>
              {' '}
              <span class='Upload '>
                <i className='fa fa-file-image-o' aria-hidden='true'></i>
              </span>
            </div>
            <div className='col-9' style={{ paddingTop: 40 }}>
              <span style={{ fontSize: 14, paddingLeft: 15, color: 'red' }}>
                Please upload your company logo .
              </span>
            </div>
          </div>

          <label
            style={{
              color: '#6C6B6B',
              fontSize: 15,
              marginBottom: 10,
              marginTop: 16
            }}
          >
            Company Name
            <br />
            <input
              type='email'
              name='email'
              defaultValue
              style={{
                paddingLeft: 3,
                height: 28,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                marginTop: 3
              }}
              value='Chelladurai'
            />
          </label>
          <br />
          <label style={{ color: '#6C6B6B', fontSize: 15, marginBottom: 10 }}>
            Email Id <br />
            <input
              type='email'
              name='email'
              defaultValue
              style={{
                paddingLeft: 3,
                height: 28,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                marginTop: 3
              }}
              value='Chelladurai'
            />
          </label>

          <label style={{ color: '#6C6B6B', fontSize: 15, marginBottom: 10 }}>
            Job Title <br />
            <input
              type='email'
              name='email'
              defaultValue
              style={{
                paddingLeft: 3,
                height: 28,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                marginTop: 3
              }}
              value='Chelladurai'
            />
          </label>

          <label style={{ color: '#6C6B6B', fontSize: 15, marginBottom: 10 }}>
            Years Of Experience <br />
            <input
              type='email'
              name='email'
              defaultValue
              style={{
                paddingLeft: 3,
                height: 28,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                marginTop: 3
              }}
              value='Chelladurai'
            />
          </label>

          <div className='mb-4'>
            <button id='amazon'>Next</button>
          </div>
        </div>
      </div>
   
      <div className='content-holder' style={{ display: 'none' }}>
        <img
          style={{ visibility: 'hidden' }}
          src='Amazon Logo.png'
          alt='Amazon.com'
        />
        <p id='SignInTxt'>Enter your <strong>OTP</strong></p>
        <p style={{ textAlign: 'center' }} className='b-text'>
      For your security, we need to ensure your identity. We sent a 5-digit<br/>  code to <strong>xxjj@gmail.com</strong>.Please enter it below
        </p>

        <div id='signInBorder' style={{width:463}}>
          <p id='SignInTxt'></p>
      

          <label
            style={{
              color: '#6C6B6B',
              fontSize: 15,
              marginBottom: 10,
              marginTop: 16
            }}
          >
Enter your code            <br />
         

<OtpInput
                  value={otp}

        onChange={handleChange}
        numInputs={6}
        isInputNum={true}
        inputStyle={{borderStyle:'solid',borderWidth:1,borderColor:'#CECECE',background:'aliceblue',height:45,width:45,fontSize:40,marginRight:15}}
            separator={<span style={{visibility:'hidden'}}>{'-'}</span>}

      />

          </label>
          <br />
  <div className='mb-4'>
<div className='row'>

<div className='col-3'>
<button id='amazon' style={{width:80,background:'#F4F6F7',color:'#0A0909'}}>Back</button>

</div>

<div className='col-9'>
<button id='amazon' style={{width:272}}>Verify</button>

</div>

</div>
          </div>

          <hr />


          <label
            style={{
              color: '#6C6B6B',
              fontSize: 15,
              marginBottom: 10,
              marginTop: 16
            }}
          >
Didn't receive the email? Check your spam filter for an email 
from <strong style={{color:'#ED5C37'}}>Chelladurai97@gmail.com</strong> </label>


        </div>
      </div>
   
   
   
    </React.Fragment>
  )
}

const MapStateToProps = state => {
  return {
    Tasks: state.Tasks,
    Clear: state.Clear
  }
}

/*
MapDispatchToProps : 
It is just function to map store data into props. 
So we can get the store data using props.data for instance

MapDispatchToProps : It converts dispatch function into props.
So we able to call the dispatch function that we imported using props.getTasks()

*/



export default connect(MapStateToProps, null)(Register)
