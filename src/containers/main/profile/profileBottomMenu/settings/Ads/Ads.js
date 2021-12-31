import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Ads() {
    return (
        <View style={styles.container}>
              <Text style={{ marginHorizontal: 20,top:20, fontSize:15}}>Ad preferences</Text>
           <Text style={{ marginHorizontal: 20,top:50, fontSize:15}}>Ad topics</Text>
           <Text style={{ marginHorizontal: 20,top:80, fontSize:15}}>Data about your activity from partners</Text>
           <Text style={{ marginHorizontal: 20,top:120, fontSize:15}}>General info</Text>
           <Text style={{ marginHorizontal: 20,top:150, fontSize:15}}>Ad activity</Text>
           <Text style={{ marginHorizontal: 20,top:180, fontSize:15}}>About ads</Text>
        </View>
    )
}

export default Ads;

const styles = StyleSheet.create({
    container: {

    }
})
