import React, { Component } from 'react'
import './Home.css'
import {
  ControlLabel,
  FormGroup,
  InputGroup,
  Panel,
  Image,
} from 'react-bootstrap'
import PlatePrefixFormControl
  from '../../components/PlatePrefixFormControl'
import PlateSuffixFormControl from '../../components/PlateSuffixFormControl'
import DateTimeFormControl from '../../components/DateTimeFormControl'
import ResultLabel from '../../components/ResultLabel'

export default class Home extends Component {

  constructor (props, context) {
    super(props, context)

    this.state = {
      platePrefix: '',
      plateSuffix: '',
      dateTime: '',
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
            result = (plateLastDigit === '1' || plateLastDigit === '2')
              ? negativeResult
              : positiveResult
            break
          // Tuesday
          case 2:
            result = (plateLastDigit === '3' || plateLastDigit === '4')
              ? negativeResult
              : positiveResult
            break
          // Wednesday
          case 3:
            result = (plateLastDigit === '5' || plateLastDigit === '6')
              ? negativeResult
              : positiveResult
            break
          // Thursday
          case 4:
            result = (plateLastDigit === '7' || plateLastDigit === '8')
              ? negativeResult
              : positiveResult
            break
          // Friday
          case 5:
            result = (plateLastDigit === '9' || plateLastDigit === '0')
              ? negativeResult
              : positiveResult
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
                <PlatePrefixFormControl id='platePrefix'
                                        value={this.state.platePrefix}
                                        onChange={this.handleChange}/>
                <InputGroup.Addon>-</InputGroup.Addon>
                <PlateSuffixFormControl id='plateSuffix'
                                        value={this.state.plateSuffix}
                                        onChange={this.handleChange}/>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Date & Time</ControlLabel>
              <InputGroup>
                <DateTimeFormControl
                  id='dateTime'
                  value={this.state.dateTime}
                  onChange={this.handleChange}/>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <ResultLabel {...result}/>
            </FormGroup>

          </form>
        </Panel.Body>
      </Panel>
    )
  }
}