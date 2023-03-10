import { View, Text, Image, StyleSheet,SafeAreaView,Pressable } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

const RestaurantItem = ({ restaurant }) => {

    const navigation= useNavigation();
const onPress = () => {
    navigation.navigate("Restaurant",{id:restaurant.id})
}

    return (

        <Pressable onPress={onPress} style={styles.restaurantContainer}>
            <Image source={{ uri: restaurant.image }}
                style={styles.image} />


            <Text style={styles.title}>
                {restaurant.name}
            </Text>
            <View style={{ flexDirection: 'row' }}>


                <Text style={styles.subtitle}>
                    $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime}
                </Text>
                <View style={{marginLeft:'auto', backgroundColor:'lightgrey',
            padding:5,marginRight:10,justifyContent:'center',
            borderRadius:10,flex:0.2,flexDirection:'row',marginBottom:10}}>
                <Icon name='star' size={18} color='yellow'/>
                <Text style={{ textAlign:'center',marginLeft:5 }}>
                    {restaurant.rating}
                </Text>
                </View>
            </View>
        
</Pressable>
    )

};

export default RestaurantItem;
const styles = StyleSheet.create({

    restaurantContainer: {
        width: '100%',
        marginVertical: 10,
borderRadius:5,
justifyContent:'space-between',
backgroundColor: '#FCF3CF'
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginBottom: 5
    },
    title: {
        fontSize: 17,
        fontWeight: '900',
        marginVertical: 5,
        color: 'black',
        paddingLeft:5
    },
    subtitle: {
        color: 'grey',
        paddingLeft:5,
fontWeight:'bold'        


    }


})
