
import React,{ Component }  from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
const Stack= createStackNavigator()

class Navigation extends Component{
    render(){
        return(
    
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name='Home'
                    component={Home}
                    />
                     <Stack.Screen
                    name='Profile'
                    component={Profile}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

export default Navigation;