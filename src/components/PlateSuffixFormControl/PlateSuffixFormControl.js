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
    className: 'plateSuffixFormControl',
    type: 'text',
    maxLength: 4,
    onKeyPress: (e) => _onPlateSuffixKeyPress(
      e),
  }

const _onPlateSuffixKeyPress = e => {
  const regExp = /[0-9]+/g
  if (!regExp.test(e.key)) {
    e.preventDefault()
  }
}

const PlateSuffixFormControl = (props) => {
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
      value={value}/>
  )
}

PlateSuffixFormControl.propTypes = propTypes
PlateSuffixFormControl.defaultProps = defaultProps

export default PlateSuffixFormControl