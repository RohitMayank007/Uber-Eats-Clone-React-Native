import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import restaurants from '../../data/restaurants.json'
import Icon from 'react-native-vector-icons/Ionicons'
import ListItem from './ListItem'


const restaurant=restaurants[0]

export default function RestaurantDetails() {
  return (
    <View style={styles.page}>
        <Image source={{uri:restaurant.image}} style={styles.image }/>
<View style={styles.iconContainer}>
<Icon name ='arrow-back-circle' size={25} color='white' style={styles.imageIcon} />

</View>
        <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
                    $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} Minutes
                </Text>
    </View>
    <ListItem dish={restaurant.dishes[0]} />
    <ListItem dish={restaurant.dishes[1]} />
    </View>
    
  )
}
const styles=StyleSheet.create({
    page:{
        flex:1
    },
image:{
    width:'100%',
    aspectRatio:5/3
},
title:{
  fontSize:30,
  fontWeight:'800',
  color:'black',
  marginVertical:10,
  margin:10
},
subtitle:{
  color:'#525252',
  fontSize:15,
  fontWeight:'500'
},
container:{
  margin:5
},
iconContainer:{
  backgroundColor:'red',
  padding:8,
  position:'absolute',
  top:15,
  left:10,
  borderRadius:50,
  
}

})