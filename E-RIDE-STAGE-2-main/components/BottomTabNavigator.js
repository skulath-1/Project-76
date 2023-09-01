import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons,MaterialIcons} from "@expo/vector-icons";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon:({focus,color,size})=>{
              var iconName;

              if(route.name == "Ride"){
                 iconName="car-sport-outline" 
                 return <Ionicons name={iconName} color={color} size={size} />
              }else if(route.name == "Ride History"){
                  iconName="history"
                  return <MaterialIcons name={iconName} color={color} size={size} />
              } 
            }
        })}>
            <Tab.Screen name="Ride" component={RideScreen} />
            <Tab.Screen name="Ride History" component={RideHistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}