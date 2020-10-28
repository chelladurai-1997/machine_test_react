import React from 'react'

import { connect } from 'react-redux'

function NavBar (props) {
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
            <span
              className='dot'
              style={{
                paddingLeft: 10,
                background: props.page === 1 ? '' : '#3d566f'
              }}
            >
              {' '}
              {props.page === 3 || props.page === 2 ? (
                <i class='fa fa-check' aria-hidden='true'></i>
              ) : (
                1
              )}
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
              style={{
                paddingLeft: 10,
                background: props.page === 2 ? '' : '#3d566f'
              }}
            >
              {' '}
              {props.page === 3 ? (
                <i class='fa fa-check' aria-hidden='true'></i>
              ) : (
                2
              )}
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
              style={{
                paddingLeft: 10,
                background: props.page === 3 ? '' : '#3d566f'
              }}
            >
              {' '}
              3
            </span>
            Email Verification{' '}
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

const MapStateToProps = state => {
  return {
    registerFormData: state.registerFormData,
    validationResult: state.validationResult
  }
}

export default connect(MapStateToProps, null)(NavBar)
