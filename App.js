import { StyleSheet,StatusBar,View} from 'react-native'
import React from 'react'
import HomeScreen from './android/app/src/components/screens/HomeScreen'
import RestaurantDetails from './android/app/src/components/screens/RestaurantDetailsScreen'
export default function App() {
  return (
    <View style={styles.container}>
     <HomeScreen />


    <StatusBar style='auto' />
    </View>
  )
}
const styles=StyleSheet.create({

  container :{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    // paddingVertical:30

  }
})
