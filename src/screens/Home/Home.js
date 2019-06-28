import React, { Component } from 'react'
import './Home.css'
import {
  ControlLabel,
  Label,
  FormControl,
  FormGroup,
  InputGroup,
  Panel,
  Image,
} from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'

export default class Home extends Component {

  constructor (props, context) {
    super(props, context)

    this.state = {
      platePrefix: '',
      plateSuffix: '',
      dateTime: '',
    }
  }

  static onPlatePrefixKeyPress = e => {
    const regExp = /[a-zA-Z]+/g
    if (!regExp.test(e.key)) {
      e.preventDefault()
    }
  }

  static onPlateSuffixKeyPress = e => {
    const regExp = /[0-9]+/g
    if (!regExp.test(e.key)) {
      e.preventDefault()
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  checkIfCanBeOnRoad = () => {
    let result = {}
    const negativeResult = { style: 'danger', label: 'No puede circular' }
    const positiveResult = { style: 'success', label: 'Puede circular' }
    const defaultResult = { style: 'default', label: 'Complete los datos' }
    if (this.state.platePrefix.length === 3
      && this.state.plateSuffix.length >= 3
      && this.state.dateTime) {
      const dateTime = new Date(this.state.dateTime)
      const dayOfWeekIndex = dateTime.getDay()
      const morningStartTime = new Date(this.state.dateTime).setHours(7, 0, 0)
      const morningEndTime = new Date(this.state.dateTime).setHours(9, 30, 0)
      const afternoonStartTime = new Date(this.state.dateTime).setHours(16, 0,
        0)
      const afternoonEndTime = new Date(this.state.dateTime).setHours(19, 30, 0)

      // Check if it's a working day
      if (dayOfWeekIndex > 0
        && dayOfWeekIndex < 6
        // If so, check if time is between 07:00 to 09:30 or 16:00 to 19:30
        && ((dateTime >= morningStartTime && dateTime <= morningEndTime)
          ||
          (dateTime >= afternoonStartTime && dateTime <= afternoonEndTime))) {
        const plateLastDigit = this.state.plateSuffix.slice(-1)
        switch (dayOfWeekIndex) {
          // Monday
          case 1:
            if (plateLastDigit === '1' || plateLastDigit === '2') {
              result = negativeResult
            }
            break
          // Tuesday
          case 2:
            if (plateLastDigit === '3' || plateLastDigit === '4') {
              result = negativeResult
            }
            break
          // Wednesday
          case 3:
            if (plateLastDigit === '5' || plateLastDigit === '6') {
              result = negativeResult
            }
            break
          // Thursday
          case 4:
            if (plateLastDigit === '7' || plateLastDigit === '8') {
              result = negativeResult
            }
            break
          // Friday
          case 5:
            if (plateLastDigit === '9' || plateLastDigit === '0') {
              result = negativeResult
            }
            break
          default:
            result = positiveResult

        }
      } else {
        result = positiveResult
      }
    } else {
      result = defaultResult
    }
    return result
  }

  render () {
    const result = this.checkIfCanBeOnRoad()
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            Peak and Plate Predictor
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <form className={'Home'}>
            <Image src="/info.png" responsive/>
            <FormGroup>
              <ControlLabel>Registration Plate</ControlLabel>
              <InputGroup>
                <FormControl type="text"
                             id='platePrefix'
                             onKeyPress={(e) => Home.onPlatePrefixKeyPress(e)}
                             value={this.state.platePrefix}
                             maxLength={3}
                             onChange={this.handleChange}/>
                <InputGroup.Addon>-</InputGroup.Addon>
                <FormControl type="text"
                             id='plateSuffix'
                             onKeyPress={(e) => Home.onPlateSuffixKeyPress(e)}
                             value={this.state.plateSuffix}
                             maxLength={4}
                             onChange={this.handleChange}/>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Date & Time</ControlLabel>
              <InputGroup>
                <FormControl type="datetime-local"
                             id='dateTime'
                             value={this.state.dateTime}
                             onChange={this.handleChange}/>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label bsStyle={result.style}>{result.label}</Label>
            </FormGroup>

          </form>
        </Panel.Body>
      </Panel>
    )
  }
}