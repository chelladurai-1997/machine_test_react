import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { registerFormData, validateFormData } from './reducers/formReducer'
import thunk from 'redux-thunk'
const middleware = [thunk]
const allReducers = combineReducers({
  registerFormData: registerFormData,
  validationResult: validateFormData
})
const initialState = {
  registerFormData: {
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
  },
  validationResult: {
    isPersonelInfoForm: {isTriggered:false, status: false, Message: [] },
    isCompanyInfoForm: { status: false, Message: [] }
  }
}
const store = createStore(
  allReducers,
  initialState,
  compose(applyMiddleware(...middleware))
)
export default store
