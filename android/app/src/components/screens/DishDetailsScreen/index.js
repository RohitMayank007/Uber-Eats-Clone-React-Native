import { useState } from 'react'

import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../../data/restaurants.json'

import AntDesign from 'react-native-vector-icons/AntDesign'
const dish = restaurants[0].dishes[0]




const DishDetailsScreen = () => {

const [quantity, setQuantity] = useState(1);

const onMinus=() => {
    if( quantity > 1) {
    setQuantity(quantity-1)
    }
}
const onPlus = () =>
{
   
    setQuantity(quantity+1)
   
}
const getTotal = () => {
    return (
    (dish.price * quantity).toFixed(2)
)
}


    return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seprator} />

    
<View style={styles.icon}>
    <AntDesign name='minuscircleo' size={60} color={'black'} onPress={onMinus} />
    <Text style={styles.quantity}> {quantity}</Text>
    <AntDesign name='pluscircleo' size={60} color={'black'} onPress={onPlus} />
    </View>
<View style={styles.buttom}>
<Text style= {styles.total}>
    Add {quantity} to basket &#8226; $ {(getTotal())}
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
    fontSize:30,
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
    justifyContent:'center',
    marginTop:60
},
quantity:{
    fontSize:30,
    fontWeight:'700',
    marginHorizontal:20



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

export default DishDetailsScreen