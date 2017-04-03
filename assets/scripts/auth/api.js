'use strict'

const config = require('../config')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    // data: data  (Same thing!)
    data
  })
}

const signIn = (data) => {
  console.log('not here?')
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    // data: data  (Same thing!)
    data
  })
}

module.exports = {
  signUp,
  signIn
}
