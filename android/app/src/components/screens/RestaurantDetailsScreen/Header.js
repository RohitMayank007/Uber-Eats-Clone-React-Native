import { View, Text,StyleSheet,Image, FlatList} from 'react-native'
import React from 'react'


import { styles } from './Styles'

  const RestaurantHeader = ({restaurant}) => {
  return (
    
    <View style={styles.page}>

       
        <Image source={{uri:restaurant.image}} style={styles.image }/>
        <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
                    $  {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} Minutes
                </Text>

<Text style={styles.menuTitle}>
Menu
</Text>

    </View>
   
    
    </View>
    
  )
}

export default RestaurantHeader ;