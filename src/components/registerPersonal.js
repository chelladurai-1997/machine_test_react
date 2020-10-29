import React, { useState } from 'react'

import { connect } from 'react-redux'
import store from '../store'
import {
  checkUndefinedNull,
  updateFields,updateStates
} from '../store/actions/registerActionCreator'
import csc from 'country-state-city'
import NavBar from './navbar';

function RegisterPersonal (props) {

  const [CountryList]= useState(csc.getAllCountries())

  const [NameErr, setNameErr] = useState(false)
  const [GenderErr, setGenderErr] = useState(false)
  const [StateErr, setStateErr] = useState(false)
  const [CountryErr, setCountryErr] = useState(false)
  const [PhoneErr, setPhoneErr] = useState(false)

  return (
    <React.Fragment>
        <NavBar page={1} />
 <div className='content-holder'>
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
              onChange={e => {
                updateFields({
                  ...props.registerFormData,
                  full_name: e.target.value
                })
              }}
              value={props.registerFormData.full_name}
            />
            {NameErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}{' '}
          </label>
          <br />
          <label style={{ color: '#6C6B6B', fontSize: 15 }}>
            Gender
            <br />
            <div className='row'>
              <div className='col-3'>
                <div
                  style={{
                    background:
                      props.registerFormData.gender === 'male'
                        ? '#c2e2ff'
                        : ''
                  }}
                  class='rectangle'
                  onClick={e => {
                    updateFields({ ...props.registerFormData, gender: 'male' })
                  }}
                >
                  Male
                </div>
              </div>

              <div className='col-3'>
                <div
                  style={{
                    background:
                      props.registerFormData.gender === 'female'
                        ? '#c2e2ff'
                        : ''
                  }}
                  class='rectangle'
                  onClick={e => {
                    updateFields({
                      ...props.registerFormData,
                      gender: 'female'
                    })
                  }}
                >
                  Female
                </div>
              </div>

              <div className='col-3'>
                <div
                  style={{
                    background:
                      props.registerFormData.gender === 'others'
                        ? '#c2e2ff'
                        : ''
                  }}
                  class='rectangle'
                  onClick={e => {
                    updateFields({
                      ...props.registerFormData,
                      gender: 'others'
                    })
                  }}
                >
                  Others
                </div>
              </div>

              <div className='col-3'></div>
            </div>
            {GenderErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}
          </label>

          <label style={{ color: '#6C6B6B', fontSize: 15 }}>
            Country
            <br />
            {/* <input type="email" name="email" defaultValue style={{paddingLeft:3,height:28,borderStyle:'solid',borderWidth:1,borderColor:'#CECECE',marginTop:3}} value='Chelladurai' /> */}
            <select
              onChange={e => {
                //  setCountryStates(csc.getStatesOfCountry(e.target.value)) 
                 updateStates(csc.getStatesOfCountry(e.target.value))
                updateFields({
                  ...props.registerFormData,
                  country: e.target.value
                })
              }}
              value={props.registerFormData.country}
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
              <option value=''>Choose</option>

              {CountryList&&CountryList.map((item)=><option value={item.id}>{item.name}</option>)}
      
            </select>
            {CountryErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}
          </label>

          <label style={{ color: '#6C6B6B', fontSize: 15 }}>
            State
            <br />
            {/* <input type="email" name="email" defaultValue style={{paddingLeft:3,height:28,borderStyle:'solid',borderWidth:1,borderColor:'#CECECE',marginTop:3}} value='Chelladurai' /> */}
            <select
              onChange={e => {
                updateFields({
                  ...props.registerFormData,
                  state: e.target.value
                })
              }}
              value={props.registerFormData.state}
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
              <option value=''>Choose</option>

              
            {props.countryStates && props.countryStates.map((state)=><option value={state.name}>{state.name}</option>)}
            </select>
            {StateErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}
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
              onChange={e => {
                updateFields({
                  ...props.registerFormData,
                  phone: e.target.value
                })
              }}
              value={props.registerFormData.phone}
            />
            {PhoneErr && (
              <span style={{ color: 'red', fontSize: 14 }}>*Required</span>
            )}
          </label>

          <div className='mb-4'>
            <button
              id='amazon'
              onClick={() => {
                var data = store.getState().registerFormData
                checkUndefinedNull(data.full_name)
                  ? setNameErr(false)
                  : setNameErr(true)
                checkUndefinedNull(data.gender)
                  ? setGenderErr(false)
                  : setGenderErr(true)
                checkUndefinedNull(data.state)
                  ? setStateErr(false)
                  : setStateErr(true)
                checkUndefinedNull(data.country)
                  ? setCountryErr(false)
                  : setCountryErr(true)
                checkUndefinedNull(data.phone)
                  ? setPhoneErr(false)
                  : setPhoneErr(true)

                if (
                  checkUndefinedNull(data.full_name) &&
                  checkUndefinedNull(data.gender) &&
                  checkUndefinedNull(data.state) &&
                  checkUndefinedNull(data.country) &&
                  checkUndefinedNull(data.phone)
                ) {
                  props.history.push('/RegisterCompany')
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const MapStateToProps = state => {
  return {
    registerFormData: state.registerFormData,
    validationResult: state.validationResult,
    countryStates:state.countryStates
  }
}

export default connect(MapStateToProps, null)(RegisterPersonal)
