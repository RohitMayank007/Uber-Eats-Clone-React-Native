import { View, Text,FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '../../OrderListItem/index'
import orders from '../../data/orders.json'
import { styles } from '../RestaurantDetailsScreen/Styles'

const OrderScreen = () => {
  return (
    <View style={{flex:1, width:'100%', paddingTop:30}}>
      <FlatList 
      data={orders} 
      renderItem={({item}) => <OrderListItem 
      order = {item}/>} 
      
      />
    </View>
  )
}

export default OrderScreen