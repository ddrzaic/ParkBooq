import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from "../screens/Homepage";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
    drawerType: 'front',
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={'Home'} screenOptions={screenOptionStyle as {}}>
                <Drawer.Screen name="Home" component={HomeScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
