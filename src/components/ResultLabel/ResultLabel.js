import React from 'react'
import './style.css'
import { Label } from 'react-bootstrap'

const ResultLabel = (props) => {

  return (
    <Label bsStyle={props.style}>{props.label}</Label>
  )
}

export default ResultLabel