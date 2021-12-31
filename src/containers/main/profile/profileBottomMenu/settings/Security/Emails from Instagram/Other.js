import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Other() {
    return (
        <View style={styles.container}>
            <Text style={{  color: "black",  marginHorizontal: 20, top:20 }}> Other emails from Instagram in the last 14 days that
                   aren't about security or login will appear here. You can
                   use it to verify emails are real and which are fake.</Text>
                   <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top: 20, marginHorizontal: 20}}>
                    <Text style={{  color: "blue" }}>
                        learn more
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

export default Other;

const styles = StyleSheet.create({
    container: {

    }
})
