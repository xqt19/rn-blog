import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ImageScreen = () => {
    return(
        <View>
            <Text style={styles.headerStyle}>Image Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default ImageScreen