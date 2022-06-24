import { mount } from 'cypress/react'
import Login from '../../components/authentication/Login'

describe('<Login>', () => {
  it('mounts', () => {
    mount(<Login />)
  })
})