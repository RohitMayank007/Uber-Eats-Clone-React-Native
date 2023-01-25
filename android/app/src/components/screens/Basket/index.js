import { useState } from 'react'

import {FlatList, View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import restaurants from '../../data/restaurants.json'
import BasketDishItem from '../../BasketDishItem/index'

import AntDesign from 'react-native-vector-icons/AntDesign'
const restaurant = restaurants[0]



const Basket = () => {



    return (
    <View style={styles.page}>
        
      <Text style={styles.name}>{restaurant.name}</Text>
      
<Text style={{fontSize:18,fontWeight:'bold',marginTop:20}}> Your Items :- </Text>
    <FlatList data ={restaurant.dishes}  renderItem={({item}) => <BasketDishItem basketDish = {item}  /> }
 showsVerticalScrollIndicator={false}   />
    
    
      <View style={styles.seprator} />

    

<View style={styles.buttom}>

<Text style= {styles.total}>
   Create Order 
</Text>


</View>

    </View>
  )
}

const styles=StyleSheet.create({
    

page:{
    flex:1,
    width:'100%',
    paddingVertical:30,
padding:10,
},
name:{
    fontSize:24,
    fontWeight:'700',
    color:'black'
},
description:{
color:'grey'
},
seprator:{
    height:1,
    backgroundColor:'lightgrey',
    marginVertical:10
},
icon:{
    textAlign:'center',
    
    flexDirection:'row',
    
    marginVertical:17
},
quantity:{
    fontSize:30,
    fontWeight:'700',
    marginHorizontal:20



},
quantityContainer:{
backgroundColor:'lightgrey',
paddingHorizontal:5,
paddingVertical:2,

marginRight:10,
borderRadius:3

},

buttom:{

    backgroundColor: 'black',
    marginTop:'auto',
    padding:20,
    alignItems: 'center'

},
total:{
    color:'white',
    fontWeight:'700',
    fontSize:16

}





})

export default Basket