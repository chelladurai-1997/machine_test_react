import React from 'react'
import { updateFields } from '../store/actions/registerActionCreator'

function LandingPage (props) {
  return (
    <div style={{ margin: 204 }}>
      {
        // eslint-disable-next-line
      }{' '}
      <h1>Welcome {'😊'}...You have logged in succesfully ! </h1>
      <br></br>
      <button
        className='btn btn-danger'
        onClick={() => {
          updateFields({
            ...props.registerFormData,
            full_name: '',
            gender: '',
            country: '',
            state: '',
            phone: '',
            company_logo: '',
            company_name: '',
            company_mail_id: '',
            job_title: '',
            agreed: true,
            year_of_experience: '',
            generated_otp: '',
            user_typed_otp: ''
          })
          props.history.push('/')
        }}
      >
        wanna Log out?
      </button>
    </div>
  )
}

export default LandingPage
