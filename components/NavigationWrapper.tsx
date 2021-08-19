import React from 'react'
import {StyleSheet} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Home} from "./Home";
import {Details} from "./Details";
import {NavigationContainer} from "@react-navigation/native"

export enum Colours {
  MELLOW_APRICOT = "#F8BD7F",
  COLUMBIA_BLUE = "#CAE9FF"
}

export const NavigationWrapper = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer children={{}}>
      <Drawer.Navigator initialRouteName={"Home"}
                        screenOptions={{
                          headerStyle: { backgroundColor: Colours.COLUMBIA_BLUE },
                          headerTintColor: Colours.MELLOW_APRICOT,
                          headerTitleStyle: {
                            fontWeight: 'bold',
                          }
                        }}>
        <Drawer.Screen name={"Home"}
                       component={Home}/>
        <Drawer.Screen name={"Details"}
                       component={Details}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5733',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
