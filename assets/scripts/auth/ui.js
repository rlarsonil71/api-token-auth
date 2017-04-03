'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran!  Data is :', data)
}

const signUpFailure = (error) => {
  console.log('Sign-up failure! Error is :', error)
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signInSuccess ran!  Data is :', data)
  // Store user object
  store.user = data.user
}

const signInFailure = (error) => {
  console.log('Sign-in failure!  Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
