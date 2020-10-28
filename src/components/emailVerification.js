import React, { useState, useEffect } from 'react'
import OtpInput from 'react-otp-input'

import { connect } from 'react-redux'
import NavBar from './navbar';

function EmailVerification (props) {
  const [otp, setOTP] = useState('')
  const handleChange = otp => setOTP(otp)
  console.log('hhdhdhddh', otp)
  useEffect(() => {
    // eslint-disable-next-line
    if (props.registerFormData.generated_otp == otp) {
      localStorage.setItem('form_data', JSON.stringify(props.registerFormData))

      props.history.push('/LandingPage')

    }
    // eslint-disable-next-line
  }, [otp])
  return (
    <React.Fragment>
        <NavBar page={3} />

 <div className='content-holder'>
        <img
          style={{ visibility: 'hidden' }}
          src='Amazon Logo.png'
          alt='Amazon.com'
        />
        <p id='SignInTxt'>
          Enter your <strong>OTP</strong>
        </p>
        <p style={{ textAlign: 'center' }} className='b-text'>
          For your security, we need to ensure your identity. We sent a 5-digit
          <br /> code to{' '}
          <strong>{props.registerFormData.company_mail_id}</strong>.Please enter
          it below
        </p>

        <div id='signInBorder' style={{ width: 463 }}>
          <p id='SignInTxt'></p>

          <label
            style={{
              color: '#6C6B6B',
              fontSize: 15,
              marginBottom: 10,
              marginTop: 16
            }}
          >
            Enter your code <br />
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              isInputNum={true}
              inputStyle={{
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#CECECE',
                background: 'aliceblue',
                height: 45,
                width: 45,
                fontSize: 40,
                marginRight: 15
              }}
              separator={<span style={{ visibility: 'hidden' }}>{'-'}</span>}
            />
          </label>
          <br />
          <div className='mb-4'>
            <div className='row'>
              <div className='col-3'>
                <button
                  id='amazon'
                  style={{ width: 80, background: '#F4F6F7', color: '#0A0909' }}
                  onClick={() => {
                    props.history.push('/RegisterCompany')
                  }}
                >
                  Back
                </button>
              </div>

              <div className='col-9'>
                <button
                  id='amazon'
                  style={{ width: 272 }}
                  onClick={() => {
                    // eslint-disable-next-line
                    if (
                      Number(props.registerFormData.generated_otp) ===
                      Number(otp)
                    ) {
                      localStorage.setItem(
                        'form_data',
                        JSON.stringify(props.registerFormData)
                      )

                      props.history.push('/LandingPage')

                      // alert('yes verified')
                    } else {
                      alert(
                        'Sorry...It seems you have not entered correct verification code'
                      )
                    }
                  }}
                >
                  Verify
                </button>
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
            Didn't receive the email? Check your spam filter for an email from{' '}
            <strong style={{ color: '#ED5C37' }}>mern28671@gmail.com</strong>{' '}
          </label>
        </div>
      </div>
    </React.Fragment>
  )
}

const MapStateToProps = state => {
  return {
    registerFormData: state.registerFormData,
    validationResult: state.validationResult
  }
}

export default connect(MapStateToProps, null)(EmailVerification)
