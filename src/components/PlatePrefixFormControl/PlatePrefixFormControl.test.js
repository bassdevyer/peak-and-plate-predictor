import React from 'react'
import PlatePrefixFormControl from '../PlatePrefixFormControl'
import { create } from 'react-test-renderer'

describe('Component default rendering', () => {
  it('Renders component correctly', () => {
    const component = create(
      <PlatePrefixFormControl/>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Testing props', () => {
  it('Sets default props', () => {
    const props = {
      className: 'platePrefixFormControl',
      type: 'text',
      maxLength: 3,
    }
    expect(PlatePrefixFormControl.defaultProps.className)
      .toEqual(props.className)
    expect(PlatePrefixFormControl.defaultProps.type)
      .toEqual(props.type)
    expect(PlatePrefixFormControl.defaultProps.maxLength)
      .toEqual(props.maxLength)
    expect(PlatePrefixFormControl.defaultProps.onKeyPress)
      .toBeDefined()
  })

  it('Sets external props', () => {
    const props = {
      value: '',
      onChange: jest.fn(),
    }
    const component = create(
      <PlatePrefixFormControl/>,
    )
    expect(PlatePrefixFormControl.props.className)
      .toEqual(props.className)
    expect(PlatePrefixFormControl.defaultProps.type)
      .toEqual(props.type)
    expect(PlatePrefixFormControl.defaultProps.maxLength)
      .toEqual(props.maxLength)
    expect(PlatePrefixFormControl.defaultProps.onKeyPress)
      .toBeDefined()
  })

})

describe('Testing only-letters acceptance', () => {
  it('Accepts only letters', () => {

  })
})