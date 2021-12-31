import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Secu() {
    return (
        <View style={styles.container}>
            <Text style={{ marginHorizontal: 20,top: 30 }}>Security and login emails from Instagram in the last
                  14 days will appear here.You can use it to verify which
                  emails are real and which are fake.<TouchableOpacity onPress={() => alert("clicked")}>
                    <Text style={{  color: "blue" }}>
                        learn more
                    </Text>
                </TouchableOpacity></Text>
        </View>
    )
}

export default Secu;

const styles = StyleSheet.create({
    container: {

    }
})
