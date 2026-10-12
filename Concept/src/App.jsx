import { useState } from 'react'

import './App.css'

import Counter from './hooks/useState/Counter'
import MyComp from './hooks/useeffect/MyComp'
import EffectCounter from './hooks/useeffect/EffectCounter'
import NewComp from './hooks/usecontext/NewComp'
import UserProvider from './hooks/usecontext/UserProvider'
import MyForm from './hooks/formvalidation/MyForm'

const App = () => {

  return (
    <div>
      <MyForm/>
      {/* <UserProvider /> */}
    </div>
  )
}

export default App
