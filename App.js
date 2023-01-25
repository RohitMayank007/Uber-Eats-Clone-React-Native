import { StatusBar} from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './android/app/src/navigation'


export default function App() {
  return (

<NavigationContainer>
    


<RootNavigator />
    <StatusBar style='auto' />
    
    </NavigationContainer>
  )
}
