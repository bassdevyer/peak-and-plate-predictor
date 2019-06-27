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
      canBeOnRoad: null,
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
        || (dateTime >= afternoonStartTime && dateTime <= afternoonEndTime))) {
      const plateLastDigit = this.state.plateSuffix.slice(-1)
      console.log(plateLastDigit)
      switch (dayOfWeekIndex) {
        // Monday
        case 1:
          if (plateLastDigit === '1' || plateLastDigit === '2') {
            this.setState({ canBeOnRoad: false })
          }
          break
        // Tuesday
        case 2:
          if (plateLastDigit === '3' || plateLastDigit === '4') {
            this.setState({ canBeOnRoad: false })
          }
          break
        // Wednesday
        case 3:
          if (plateLastDigit === '5' || plateLastDigit === '6') {
            this.setState({ canBeOnRoad: false })
          }
          break
        // Thursday
        case 4:
          if (plateLastDigit === '7' || plateLastDigit === '8') {
            this.setState({ canBeOnRoad: false })
          }
          break
        // Friday
        case 5:
          if (plateLastDigit === '9' || plateLastDigit === '0') {
            this.setState({ canBeOnRoad: false })
          }
          break
        default:
          this.setState({ canBeOnRoad: true })

      }
    }else{
      this.setState({ canBeOnRoad: true })
    }
    console.log('canBeOnRoad', this.state.canBeOnRoad)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (this.state.platePrefix !== nextState.platePrefix)
      || (this.state.plateSuffix !== nextState.plateSuffix)
      || (this.state.dateTime !== nextState.dateTime)
      || (this.state.canBeOnRoad !== nextState.canBeOnRoad)

  }

  componentDidUpdate = () => {
    console.log(this.state)
    if (this.state.platePrefix.length === 3
      && this.state.plateSuffix.length >= 3
      && this.state.dateTime) {
      this.checkIfCanBeOnRoad()
    }
  }

  render () {
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
              <Label bsStyle={this.state.canBeOnRoad === null
                ? 'default'
                : this.state.canBeOnRoad
                  ? 'success'
                  : 'danger'}>{this.state.canBeOnRoad === null
                ? 'Complete los datos'
                : this.state.canBeOnRoad
                  ? 'Puede circular'
                  : 'No puede circular'}</Label>
            </FormGroup>

          </form>
        </Panel.Body>
      </Panel>
    )
  }
}