import { View, Text,Image, FlatList } from 'react-native'
import React from 'react'
import orders from '../data/orders.json';
import  styles  from './styles'
import restaurants from '../data/restaurants.json';
import DishDetailsScreen from '../screens/DishDetailsScreen/index';
import BasketDishItem from '../BasketDishItem/index'
import OrderListItem from '../OrderListItem';
const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View style={styles.page}>

       
    <Image source={{uri:order.Restaurant.image}} style={styles.image }/>
    <View style={styles.container}>
  <Text style={styles.title}>{order.Restaurant.name}</Text>
  <Text style={styles.subtitle}>
               {order.status} &#8226; 2 Days Ago
            </Text>

<Text style={styles.menuTitle}>
Your Orders
</Text>

</View>


</View>

  )
}

const OrderDetails = () => {

return(
<FlatList ListHeaderComponent={OrderDetailsHeader} data= {restaurants[0].dishes } renderItem= {({item})=> <BasketDishItem basketDish={item}
 />}
 />


 )}
export default OrderDetails;


