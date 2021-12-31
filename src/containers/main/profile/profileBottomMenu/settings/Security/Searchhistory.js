import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function About() {
    return (
        <View style={styles.container}>
             <Text style={{ marginHorizontal: 20,top:20, }}>Only things you have searched for in the main search bar
                                                            will appear here.</Text>
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    container: {

    }
})
