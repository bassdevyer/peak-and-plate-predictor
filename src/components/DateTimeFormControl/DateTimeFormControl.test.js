import React from 'react'
import DateTimeFormControl from '../DateTimeFormControl'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

describe('Component default rendering', () => {
  test('Renders default component', () => {
    const component = renderer.create(
      <DateTimeFormControl/>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Component props', () => {
  it('checks default props', () => {
    const DateInputComponent = mount(<DateTimeFormControl/>)

    expect(DateInputComponent.prop('type'))
      .toEqual('datetime-local')
  })

  it('check if props are set correctly', () => {
    const mockOnChange = jest.fn(),
      props = {
        id: 'dateTime',
        value: '',
        onChange: mockOnChange,
      },
      DateInputComponent = mount(<DateTimeFormControl {...props} />)
    expect(DateInputComponent.prop('id'))
      .toEqual('dateTime')
    expect(DateInputComponent.prop('value'))
      .toEqual('')
    expect(DateInputComponent.prop('onChange'))
      .toEqual(mockOnChange)

  })

  it('checks prop types', () => {
    const mockOnChange = jest.fn(),
      props = {
        id: 'dateTime',
        value: '',
        onChange: mockOnChange,
      },
      DateInputComponent = mount(<DateTimeFormControl {...props} />)
    expect(DateInputComponent.prop('id')).toBeString()
    expect(DateInputComponent.prop('value')).toBeString()
    expect(DateInputComponent.prop('onChange')).toBeFunction()
    expect(DateInputComponent.prop('type')).toBeString()
  })
})