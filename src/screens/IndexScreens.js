import React ,{useContext}  from "react";
import { Text,View,StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreens=()=>{
    const value=useContext(BlogContext)
    return (
        <View>
            <Text>Anurag {value}</Text>
        </View>
    )
}

const styles=StyleSheet.create({});

export default IndexScreens;