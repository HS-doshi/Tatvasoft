import React from 'react'
import './App.css'
import Counter from './component/Week4/Counter'
import ParentCompo from './component/Week4/ParentCompo'
import FocusInput from './component/Week4/FocusInput'
import ClassTimer from './component/Week4/ClassTimer'
import HookTimer from './component/Week4/HookTimer'
import RegisterUser from './component/Week4/RegisterUser'
import UserDetail from './component/Week4/UserDetail'
import User from './component/Week4/User'
import Form from './component/Week4/Form'
import DoccounterOne from './component/Week5/DoccounterOne'
import SoccountTwo from './component/Week5/SoccountTwo'
import Counter1 from './component/Week5/Counter1'
import Counter2 from './component/Week5/Counter2'
import UserForm from './component/Week5/UserForm'
import UseState from './UseState/UseState'
import UseReducer from './UseReducer/UseReducer'
import ObjectState from './Immutable State/ObjectState'
import ArrayUsestate from './Immutable State/ArrayUsestate'

function App() {
  return (
    <div className='App'>

      {/* 30/3/23 */}
      {/* <ParentCompo />
      <Counter />
      <FocusInput />
      <h2>Timer using class compon.</h2>
      <ClassTimer />
      <h2>Timer using Function compo.</h2>
      <HookTimer />
      <h2>Day  - 19 : ReactHook - React.memo()</h2>
      <RegisterUser />
      <User />
      <Form />
      <h2>Custom Hook!</h2>
      <DoccounterOne />
      <SoccountTwo />
      <Counter1 />
      <Counter2 />
      <UserForm /> */}

      {/* 4/4/23 */}

      <UseState />
      <UseReducer />


      <ObjectState />
      <ArrayUsestate />
    </div>
  )
}

export default App