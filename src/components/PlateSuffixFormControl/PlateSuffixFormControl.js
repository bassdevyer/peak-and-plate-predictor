import React from 'react'
import './style.css'
import { FormControl } from 'react-bootstrap'

const PlateSuffixFormControl = (props) => {

  const _onPlateSuffixKeyPress = e => {
    const regExp = /[0-9]+/g
    if (!regExp.test(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <FormControl className='plateSuffixFormControl' type="text" maxLength={4}
                 onKeyPress={(e) => _onPlateSuffixKeyPress(
                   e)}
                 {...props}/>
  )
}

export default PlateSuffixFormControl