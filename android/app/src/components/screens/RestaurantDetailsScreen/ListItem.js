import { View, Text,StyleSheet,Image,ScrollView } from 'react-native'
import React from 'react'

const ListItem = ({dish}) => {
  return (
    // <ScrollView>
    <View style={styles.container}>
      
<View style={{flex:1}} >
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description} numberOfLines={2} >{dish.description} </Text>
      <Text style={styles.price}>${dish.price}</Text>
      </View>
   {dish.image && (<Image source={{uri:dish.image}} style={styles.image}/>)}
   
    </View>
    // </ScrollView>
  )
}
const styles=StyleSheet.create({
container:{
paddingVertical:10,
marginVertical:10,
marginHorizontal:20,
borderBottomWidth:1,
borderBottomColor:'Lightgrey',
flexDirection:'row'

},
name:{
    fontWeight:'900',
    fontSize:16,
    letterSpacing:0.5,
    color:'black'
    

},
description:{
color:'gray',
marginVertical:5
},
price:{
    fontSize:16,
    fontWeight:'800'

},
image:{
    height:75,
    aspectRatio:1
}
})

export default ListItem