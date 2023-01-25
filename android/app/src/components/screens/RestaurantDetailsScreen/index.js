import { View, Text,StyleSheet,Image, FlatList} from 'react-native'
import React from 'react'
import restaurants from '../../data/restaurants.json'
import Icon from 'react-native-vector-icons/Ionicons'
import ListItem from './ListItem'
import Header from './Header'
import { styles } from './Styles'
import {useRoute} from '@react-navigation/native'

const restaurant=restaurants[0]

export default function RestaurantDetails() {

const route = useRoute();
const id=route.params?.id;

  return (
    <View style={styles.page}>
     
      
    <FlatList 
    ListHeaderComponent={() => <Header restaurant={restaurant} />} 
    data={restaurant.dishes}
    renderItem={({item}) => <ListItem dish={item} 
    keyExtractor={(item) => item.name}
    />
  }
    />
      <View style={styles.iconContainer}>
<Icon name ='arrow-back-circle' size={25} color='white' style={styles.imageIcon} />

</View>
    </View>
    
  )
}
