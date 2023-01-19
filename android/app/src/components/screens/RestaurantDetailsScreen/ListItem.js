import { View, Text,StyleSheet,Image,ScrollView } from 'react-native'
import React from 'react'

const ListItem = ({dish}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
<View style={{flexDirection:'row'}}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description} numberOfLines={2} >{dish.description} </Text>
      <Text style={styles.price}>${dish.price}</Text>
      </View>
   <Image source={{uri:dish.image}} style={styles.image}/>
   
    </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
container:{
paddingVertical:10,
marginVertical:10,
marginHorizontal:20,
borderBottomWidth:1,
borderBottomColor:'Lightgrey',


},
name:{
    fontWeight:'600',
    fontSize:16,
    letterSpacing:0.5

},
description:{
color:'gray',
marginVertical:5
},
price:{
    fontSize:16

},
image:{
    height:75,
    aspectRatio:1
}
})

export default ListItem