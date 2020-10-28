import store from '../index'

export const updateFields = data => {
  store.dispatch({ type: 'UPDATED', payload: data })
}

export const checkUndefinedNull = value => {
  if (value && value !== undefined && value !== '' && value !== null) {
    return true
  } else {
    return false
  }
}
