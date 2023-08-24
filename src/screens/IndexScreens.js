import React ,{useContext}  from "react";
import { Text,View,StyleSheet,FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreens=()=>{
    const {data,addBlogPost}=useContext(BlogContext)

    return (
        <View>
            <Text>IndexScreen</Text>
            <Button title="AddBlog" onPress={addBlogPost} />
            <FlatList 
              data={data}
              keyExtractor={(blogPost)=>blogPost.title}
              renderItem={({item})=>{
                return <Text>{item.title}</Text>
              }}
            />
        </View>
    )
}

const styles=StyleSheet.create({});

export default IndexScreens;