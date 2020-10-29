import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext)
    return(
        <View>
            <Text style={styles.headerStyle}>Index Screen!</Text>
            <Button title="hello!" onPress={addBlogPost}/>
            <FlatList 
            data = {data}
            keyExtractor = {post => post.title }
            renderItem = {(post)=> {
                return <Text style={{textAlign: "center"}}>
                    {post.index + 1} - {post.item.title}- {post.item.content}
                </Text>
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default IndexScreen