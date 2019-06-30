import React from 'react'
import './style.css'
import { FormControl } from 'react-bootstrap'

const _onPlatePrefixKeyPress = e => {
  const regExp = /[a-zA-Z]+/g
  if (!regExp.test(e.key)) {
    e.preventDefault()
  }
}

const PlatePrefixFormControl = (props) => {
  return (
    <FormControl
      {...props}/>
  )
}

PlatePrefixFormControl.defaultProps = {
  className: 'platePrefixFormControl',
  type: 'text',
  maxLength: 3,
  onKeyPress: (e) => _onPlatePrefixKeyPress(
    e),
}

export default PlatePrefixFormControl