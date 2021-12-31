import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Appsandwebsites() {
    return (
        <View style={styles.container}>
           <Text style={{ marginHorizontal: 20,top:20, fontSize:15}}>Active</Text>
           <Text style={{ marginHorizontal: 20,top:50, fontSize:15}}>Expired</Text>
           <Text style={{ marginHorizontal: 20,top:80, fontSize:15}}>Removed</Text>
        </View>
    )
}

export default Appsandwebsites;

const styles = StyleSheet.create({
    container: {

    }
})
