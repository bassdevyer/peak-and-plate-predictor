import React from 'react'
import './style.css'
import { FormControl } from 'react-bootstrap'

const PlatePrefixFormControl = (props) => {

  const _onPlatePrefixKeyPress = e => {
    const regExp = /[a-zA-Z]+/g
    if (!regExp.test(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <FormControl className='platePrefixFormControl' type="text" maxLength={3}
                 onKeyPress={(e) => _onPlatePrefixKeyPress(
                   e)}
                 {...props}/>
  )
}

export default PlatePrefixFormControl