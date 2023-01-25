import { View, Text,Image } from 'react-native'
import React from 'react'
import order from '../data/orders.json'


const OrderListItem = ({order}) => {
  return (
    <View style ={{flexDirection:"row", margin:10}}>
      <Image source ={{ uri: order.Restaurant.image}}
      style={{width:75, height:75,marginRight:10}} 
      />
      <View>
        <Text style={{fontWeight:'bold', fontSize:16, color:'black'}}>
            {order.Restaurant.name}
        </Text>
        <Text style ={{marginVertical:5}} >
            3 items &#8226; $38.65
        </Text>
        <Text>
            2 Days Ago &#8226; {order.status}
        </Text>

      </View>
    </View>
  )
}

export default OrderListItem