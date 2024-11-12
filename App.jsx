
import React from 'react'
import StackNavigation from './config/StackNavigation'
import TabNavigation from './config/TabNavigation'
import AsyncStorage from './Components/AsyncStorage'
import Camera_picker from './Components/Camera_picker'
import Signup from './screens/Signup'
import { Provider } from 'react-redux'
import Counter from './screens/Counter'
import store from './Store/Store'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'

const App = () => {
  return (
  <>

  
    {/* <Signup /> */}
  <StackNavigation />
  
    {/* <TabNavigation /> */}
    
  
  {/* <AsyncStorage /> */}
  {/* <Camera_picker /> */}

 
  </>
  )
}

export default App