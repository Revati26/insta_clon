import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, label, Switch } from 'react-native'

function Savedlogininformation() {
    return (
        <View style={styles.container}>
  <View style={{ flexDirection: "column", marginStart: 10,top:10 }}>
            <Text style={{ marginHorizontal: 10,top:20 }}>Saved login</Text>
                        <View style={{marginLeft: 210}}>
                            <Switch {...label} defaultChecked />
                            </View>
             <Text style={{ marginHorizontal: 10,top:10 }}>We'll remember your account information for you on this device.
                  You won't need to enter it when you log in again.
            </Text>
        </View>
        </View>
    )
}

export default Savedlogininformation;

const styles = StyleSheet.create({
    container: {

    }
})
