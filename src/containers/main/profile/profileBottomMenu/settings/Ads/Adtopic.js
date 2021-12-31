import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Adtopic() {
    return (
        <View style={styles.container}>
               <Text style={{ marginHorizontal: 20,top:20,fontSize:20 }}>See fewer ads about selected topics</Text>
               <Text style={{ marginHorizontal: 20,top:30 }}>These topics are based on feedback about people's
                                                             ads experiences. We'll show you fewer ads about 
                                                             the topics you select. This won't affect the overall
                                                             number of ads you see.
                                                             
                                                                 </Text>
                <Text style={{ marginHorizontal: 20,top:50,fontSize:20 }}>Alcohol</Text>
                <Text style={{ marginHorizontal: 20,top:70,fontSize:20 }}>Parenting</Text>
                <Text style={{ marginHorizontal: 20,top:90,fontSize:20 }}>Pets</Text>
                <Text style={{ marginHorizontal: 20,top:110,fontSize:20 }}>Social issues, election or politics</Text>
        </View>
    )
}

export default Adtopic;

const styles = StyleSheet.create({
    container: {

    }
})
