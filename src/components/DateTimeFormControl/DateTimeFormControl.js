import React from 'react'
import './style.css'
import { FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

const propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,

  },
  defaultProps = {
    type: 'datetime-local',
  }

const DateTimeFormControl = (props) => {
  const {
    id,
    onChange,
    type,
    value,
  } = props

  return (
    <FormControl id={id}
                 onChange={onChange}
                 type={type}
                 value={value}/>
  )
}

DateTimeFormControl.propTypes = propTypes
DateTimeFormControl.defaultProps = defaultProps

export default DateTimeFormControl