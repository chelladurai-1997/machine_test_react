// import { GET_ALL_TASKS } from '../Constants'

var initialState = {
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
}
export const registerFormData = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATED':
      return { ...state, ...payload }

    default:
      return state
  }
}

export const validateFormData = (
  state = {
    isPersonelInfoForm: { isTriggered: false, status: false, Message: '' },
    isCompanyInfoForm: { status: false, Message: '' }
  },
  { type, payload }
) => {
  switch (type) {
    case 'VALIDATED_PERSONEL_FORM':
      return { ...state, isPersonelInfoForm: payload }
    case 'VALIDATED_COMPANY_FORM':
      return { ...state, isCompanyInfoForm: payload }
    case 'TRIGGER_FALSE':
      return {
        ...state,
        isCompanyInfoForm: { ...state.isCompanyInfoForm, isTriggered: false }
      }

    default:
      return state
  }
}

export const stateList = (state = [], { type, payload }) => {
  switch (type) {
    case 'UPDATED_STATES':
      return [...payload]

    default:
      return state
  }
}
