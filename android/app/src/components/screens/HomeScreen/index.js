import { StyleSheet,FlatList } from 'react-native'
import React from 'react'
import RestaurantItem from '../../RestaurantItem'
import  restaurants from '../../data/restaurants.json'
export default function HomeScreen() {
  return (

      

<FlatList 
data = {restaurants}
renderItem={({item}) => <RestaurantItem restaurant={item} />}
showsVerticalScrollIndicator={false}
/>



  )
}
const styles=StyleSheet.create({

})
