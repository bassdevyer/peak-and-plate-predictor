import React from 'react'
import './style.css'
import { Label } from 'react-bootstrap'
import PropTypes from 'prop-types'

const propTypes = {
  style: PropTypes.string,
  label: PropTypes.string,
}

const ResultLabel = (props) => {
  const
    {
      style,
      label,
    } = props

  return (
    <Label bsStyle={style}>{label}</Label>
  )
}

ResultLabel.propTypes = propTypes

export default ResultLabel