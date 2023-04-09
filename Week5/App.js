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
import Parent from './ParentChild/Parent'
import { ParentOne } from './Optimization/ParentOne'
import ChildOne from './Optimization/ChildOne'
import { GrandParent } from './Optimization/GrandParent'
import { ParentTwo } from './Optimization/ParentTwo'
import { ParentThree } from './Incorrect Memo/ParentThree'
import { ParentFour } from './Incorrect Memo/ParentFour'
import { ContextParent } from './context/ContextParent'
import { ChildA } from './context/ContextChild'

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

      {/* <UseState />
      <UseReducer />


      <ObjectState />
      <ArrayUsestate /> */}

      {/* 7/4/23 */}
      {/* Here, Parent & Child both are re-render. */}

      {/* <h3>Day - 22 : React Render Parent & Child!</h3>

      <Parent />
      <ParentOne >
        <ChildOne />
      </ParentOne>
      <GrandParent /> */}

      {/* 8/4/23 */}
      <h3>Day - 23 : React Render Using Memo!</h3>
      <ParentTwo />
      <ParentThree />
      <ParentFour />

      {/* 9/4/23 */}
      <h3>Day - 24 React renders & context!</h3>
      <ContextParent >
        <ChildA />
      </ContextParent>

      <hr />
      <h2>********** Completed Whole Playlist of React with Dedication! I have Learnt a lot from this. **********</h2>
    </div>
  )
}

export default App