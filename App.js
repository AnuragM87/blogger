 import { createStackNavigator } from "react-navigation-stack";
 import React from "react";
 import { createAppContainer } from "react-navigation";
 import IndexScreens from "./src/screens/IndexScreens";
 import {BlogProvider} from './src/context/BlogContext'
 const navigator=createStackNavigator({
  Index:IndexScreens
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
    <BlogProvider>
      <App/>
    </BlogProvider>
  )
 }