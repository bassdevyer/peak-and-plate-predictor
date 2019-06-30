// Link.react.test.js
import React from 'react'
import Home from '../Home'
import { create, } from 'react-test-renderer'
import ReactDOM from 'react-dom'

describe('Component Mounting', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home/>, div)
  })
})

describe('Component default rendering', () => {
  test('Renders default component', () => {
    const component = create(
      <Home/>,
    )
    let instance = component.getInstance()
    expect(instance.state.platePrefix).toBe('')
    expect(instance.state.plateSuffix).toBe('')
    expect(instance.state.dateTime).toBe('')

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
