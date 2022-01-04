import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, label,Switch } from 'react-native'

function Help() {
    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Text style={styles.contents, { fontWeight: "bold" }}>Show activity status</Text>
                </View>
                <View style={{ marginLeft: 210,top:1 }}>
                    <Switch {...label} defaultChecked />
                </View>
                <View style={{ alignItems: "center", flexDirection: "column", top: "1%" }}>
                <Text style={styles.contents}>Allow accounts you follow and anyone you message to see when</Text>
                <Text style={styles.contents}>you are active or were last active on Instagram apps. When this</Text>
                <Text style={styles.contents}>is turned off, you won't be able to see the activity status of other</Text>
                <Text style={styles.contents}>accounts.</Text>
                </View>
                <View style={styles.second}>
                <Text style={styles.second, { fontWeight: "bold" }}>Show When you're active together</Text>
               </View>
                <View style={{ marginLeft: 210,top:15 }}>
                    <Switch {...label} defaultChecked />
                </View>
                
                <View style={{ alignItems: "center", flexDirection: "column", top: "1%" }}>
                <Text style={styles.second}>Allow accounts you follow and anyone you message to see when</Text>
                <Text style={styles.second}>you are active or were last active on Instagram apps. When this</Text>
                <Text style={styles.second}>is turned off, you won't be able to see the activity status of other</Text>
                <Text style={styles.second}>accounts.</Text>
                </View>
                
                
                
        </View>
    )
}

export default Help;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",

    },
    contents:{
    top:20,
    left:10,
    },

    second:{
        top:40,
        left:10,
        }
    

}) 
