import React from 'react'
import PlatePrefixFormControl from '../PlatePrefixFormControl'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme/build'

describe('Component default rendering', () => {
  it('Renders component correctly', () => {
    const component = create(
      <PlatePrefixFormControl/>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Component props', () => {
  it('checks default props', () => {
    const DateInputComponent = mount(<PlatePrefixFormControl/>)

    expect(DateInputComponent.prop('className'))
      .toEqual('platePrefixFormControl')
    expect(DateInputComponent.prop('type'))
      .toEqual('text')
    expect(DateInputComponent.prop('maxLength'))
      .toEqual(3)
    expect(DateInputComponent.prop('onKeyPress'))
      .toBeFunction()
  })

  it('check if props are set correctly', () => {
    const onChange = jest.fn(),
      props = {
        id: 'platePrefix',
        value: '',
        onChange,
      },
      DateInputComponent = mount(<PlatePrefixFormControl {...props} />)
    expect(DateInputComponent.prop('id'))
      .toEqual('platePrefix')
    expect(DateInputComponent.prop('value'))
      .toEqual('')
    expect(DateInputComponent.prop('onChange'))
      .toEqual(onChange)

  })

  it('checks prop types', () => {
    const onChange = jest.fn(),
      props = {
        id: 'platePrefix',
        value: '',
        onChange,
      },
      DateInputComponent = mount(<PlatePrefixFormControl {...props} />)
    expect(DateInputComponent.prop('id')).toBeString()
    expect(DateInputComponent.prop('value')).toBeString()
    expect(DateInputComponent.prop('onChange')).toBeFunction()
    expect(DateInputComponent.prop('type')).toBeString()
  })
})
