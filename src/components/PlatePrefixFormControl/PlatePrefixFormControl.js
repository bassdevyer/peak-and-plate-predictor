import React from 'react'
import './style.css'
import { FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

const propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    maxLength: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
  },
  defaultProps = {
    className: 'platePrefixFormControl',
    type: 'text',
    maxLength: 3,
    onKeyPress: (e) => _onPlatePrefixKeyPress(
      e),
  }

const _onPlatePrefixKeyPress = e => {
  const regExp = /[a-zA-Z]+/g
  if (!regExp.test(e.key)) {
    e.preventDefault()
  }
}

const PlatePrefixFormControl = (props) => {
  const {
    className,
    id,
    maxLength,
    onChange,
    onKeyPress,
    type,
    value,
  } = props
  return (
    <FormControl
      className={className}
      id={id}
      maxLength={maxLength}
      onChange={onChange}
      onKeyPress={onKeyPress}
      type={type}
      value={value}
    />
  )
}

PlatePrefixFormControl.propTypes = propTypes
PlatePrefixFormControl.defaultProps = defaultProps

export default PlatePrefixFormControl