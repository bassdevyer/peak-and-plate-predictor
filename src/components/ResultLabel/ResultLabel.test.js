import React from 'react'
import ResultLabel from '../ResultLabel'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme/build'

describe('Component default rendering', () => {
  it('Renders component correctly', () => {
    const component = create(
      <ResultLabel/>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Component props', () => {

  it('check if props are set correctly', () => {
    const props = {
        style: 'default',
        label: 'Complete los datos',
      },
      DateInputComponent = mount(<ResultLabel {...props} />)
    expect(DateInputComponent.prop('style'))
      .toEqual('default')
    expect(DateInputComponent.prop('label'))
      .toEqual('Complete los datos')

  })

  it('checks prop types', () => {
    const props = {
        style: 'default',
        label: 'Complete los datos',
      },
      DateInputComponent = mount(<ResultLabel {...props} />)
    expect(DateInputComponent.prop('style')).toBeString()
    expect(DateInputComponent.prop('label')).toBeString()
  })
})
