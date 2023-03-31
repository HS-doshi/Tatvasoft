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

function App() {
  return (
    <div className='App'>

      {/* 30/3/23
      <ParentCompo />
      <Counter /> */}
      <FocusInput />
      <ClassTimer />
      <HookTimer />

      <RegisterUser />
      {/* <User /> */}
      <Form />
    </div>
  )
}

export default App