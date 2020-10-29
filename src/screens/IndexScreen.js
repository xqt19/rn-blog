import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const IndexScreen = () => {
    return(
        <View>
            <Text style={styles.headerStyle}>Index Screen!</Text>
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