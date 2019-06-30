import React from 'react'
import DateTimeFormControl from '../DateTimeFormControl'
import { create } from 'react-test-renderer'
import ReactDOM from 'react-dom'

describe('Component Mounting', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DateTimeFormControl/>, div)
  })
})

describe('Component default rendering', () => {
  test('Renders default component', () => {
    const component = create(
      <DateTimeFormControl/>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
