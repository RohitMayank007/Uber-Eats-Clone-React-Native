import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../data/restaurants.json'

    const BasketDishItem =({basketDish}) => {
        return(
    
            <View style={styles.icon}>
    <View style={styles.quantityContainer} >
        <Text>1</Text>
        </View>
        <Text style={{fontWeight:'800'}}> 
            {basketDish.name}
        </Text>
    <Text style={{marginLeft:'auto'}}>
        $ {basketDish.price}
    
    </Text>
    
    </View>
    
        )
    }
    const styles=StyleSheet.create({
    

        
        name:{
            fontSize:24,
            fontWeight:'700',
            color:'black'
        },
        
        icon:{
            textAlign:'center',
            
            flexDirection:'row',
            
            marginVertical:17
        },
        
        quantityContainer:{
        backgroundColor:'lightgrey',
        paddingHorizontal:5,
        paddingVertical:2,
        marginRight:10,
        borderRadius:3
        
        }
        
        
        
        
        
        })
    

export default BasketDishItem;