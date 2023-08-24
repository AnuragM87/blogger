 import { createStackNavigator } from "react-navigation-stack";
 import React from "react";
 import { createAppContainer } from "react-navigation";
 import IndexScreens from "./src/screens/IndexScreens";
 import {Provider} from './src/context/BlogContext';
 import ShowScreen from "./src/screens/ShowScreen";
 import CreateScreen from './src/screens/CreateScreen';
 const navigator=createStackNavigator({
  Index:IndexScreens,
  Show:ShowScreen,
  Create:CreateScreen

 },
 {
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Blogs'
  }
 })

 const App= createAppContainer(navigator)
 export default()=>{
  return (
    <Provider>
      <App/>
    </Provider>
  )
 }