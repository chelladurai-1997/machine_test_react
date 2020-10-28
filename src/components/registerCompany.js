import React, { useState } from 'react'

import { connect } from 'react-redux'
import store from '../store'
import {
  checkUndefinedNull,
  updateFields
} from '../store/actions/registerActionCreator'
// import getAllTasks from '../store/actions/registerActionCreator'
import NavBar from './navbar';

function RegisterCompany (props) {
  const [isLoading, setLoading] = useState(false)
  const [LogoErr, setLogoErr] = useState(false)
  const [EmailErr, setEmailErr] = useState(false)
  const [JobTitleErr, setJobTitleErr] = useState(false)
  const [CompanyErr, setCompanyErr] = useState(false)
  const [ExperinenceErr, setExperinenceErr] = useState(false)

  return (
    <React.Fragment>
              <NavBar page={2} />

 <div className='content-holder'>
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
              <input
                id='file-Input'
                onChange={e => {
                  console.log('hgjhsgjaghd', e.target.files)
                  updateFields({
                    ...props.registerFormData,
                    company_logo: e.target.files[0]
                  })
                }}
                accept='image/x-png,image/gif,image/jpeg'
                style={{ display: 'none' }}
                type='file'
              ></input>{' '}
              <span
                class='Upload '
                onClick={() => {
                  document.getElementById('file-Input').click()
                }}
              >
                <i className='fa fa-file-image-o' aria-hidden='true'></i>
              </span>
            </div>
            <div className='col-9' style={{ paddingTop: 25, paddingLeft: 30 }}>
              <span
                style={{
                  fontSize: 14,
                  paddingLeft: 15,
                  color: 'red',
                  overflow: 'hidden',
                  display: '-webkit-inline-box'
                }}
              >
                {!LogoErr && props.registerFormData.company_logo === ''
                  ? 'Please upload your company logo .'
                  : props.registerFormData.company_logo.name}{' '}
              </span>
            </div>
            {LogoErr && (
              <span style={{ color: 'red', fontSize: 14, paddingLeft: 14 }}>
                *Choose an image
              </span>
            )}{' '}
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
              onChange={e => {
                updateFields({
                  ...props.registerFormData,
                  company_name: e.target.value
                })
              }}
              value={props.registerFormData.company_name}
            />
            {CompanyErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}{' '}
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
              onChange={e => {
                updateFields({
                  ...props.registerFormData,
                  company_mail_id: e.target.value
                })
              }}
              value={props.registerFormData.company_mail_id}
            />
            {EmailErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}{' '}
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
              onChange={e => {
                updateFields({
                  ...props.registerFormData,
                  job_title: e.target.value
                })
              }}
              value={props.registerFormData.job_title}
            />
            {JobTitleErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}{' '}
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
              onChange={e => {
                updateFields({
                  ...props.registerFormData,
                  year_of_experience: e.target.value
                })
              }}
              value={props.registerFormData.year_of_experience}
            />
            {ExperinenceErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}{' '}
          </label>

          <div className='mb-4'>
            <div className='row'>
              <div className='col-3'>
                <button
                  id='amazon'
                  style={{ width: 80, background: '#F4F6F7', color: '#0A0909' }}
                  onClick={() => {
                    props.history.push('/')
                  }}
                >
                  Back
                </button>
              </div>

              <div className='col-9'>
                <button
                  id='amazon'
                  style={{ width: 226 }}
                  onClick={() => {
                    var data = store.getState().registerFormData
                    checkUndefinedNull(data.company_logo)
                      ? setLogoErr(false)
                      : setLogoErr(true)
                    checkUndefinedNull(data.company_name)
                      ? setCompanyErr(false)
                      : setCompanyErr(true)
                    checkUndefinedNull(data.company_mail_id)
                      ? setEmailErr(false)
                      : setEmailErr(true)
                    checkUndefinedNull(data.job_title)
                      ? setJobTitleErr(false)
                      : setJobTitleErr(true)
                    checkUndefinedNull(data.year_of_experience)
                      ? setExperinenceErr(false)
                      : setExperinenceErr(true)

                    if (
                      checkUndefinedNull(data.company_logo) &&
                      checkUndefinedNull(data.company_name) &&
                      checkUndefinedNull(data.company_mail_id) &&
                      checkUndefinedNull(data.job_title) &&
                      checkUndefinedNull(data.year_of_experience)
                    ) {
                      var OTP = Math.floor(100000 + Math.random() * 900000);
                      setLoading(true)
                      window.Email.send({
                        Host: 'smtp.gmail.com',
                        Username: 'mern28671@gmail.com',
                        Password: '12345QWERT',
                        To: props.registerFormData.company_mail_id,
                        From: 'mern28671@gmail.com',
                        Subject: 'verfication code',
                        Body: OTP
                      }).then(message => {
                        setLoading(false)

                        // alert(message)
                        if (message === 'OK') {
                          updateFields({
                            ...props.registerFormData,
                            generated_otp: OTP
                          })
                          props.history.push('/EmailVerification')
                        } else {
                          alert(message)
                        }
                      })
                    }
                  }}
                >
                  

                  {isLoading?'Loading...':'Send OTP'}    

                </button>
              </div>
            </div>
          </div>
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

export default connect(MapStateToProps, null)(RegisterCompany)
