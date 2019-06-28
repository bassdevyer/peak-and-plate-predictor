import React from 'react'
import './style.css'
import { FormControl } from 'react-bootstrap'

const DateTimeFormControl = (props) => {

  return (
    <FormControl type='datetime-local'
                 {...props}/>
  )
}

export default DateTimeFormControl