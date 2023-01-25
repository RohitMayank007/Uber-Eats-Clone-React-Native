import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/screens/HomeScreen";
import RestaurantDetails from "../components/screens/RestaurantDetailsScreen/index";
import DishDetailsScreen from "../components/screens/DishDetailsScreen/index";
import Basket from "../components/screens/Basket/index";
import OrderScreen from "../components/screens/OrderScreen/index";
import OrderDetails from "../components/OrderDetails/index";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    return(
<Stack.Navigator >
<Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
<Stack.Screen name="Restaurant" component={RestaurantDetails} options={{headerShown:false}}/>


</Stack.Navigator>


    )
}
export default RootNavigator;