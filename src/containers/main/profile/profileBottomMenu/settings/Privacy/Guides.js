import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Switch, label } from 'react-native'

function Guides() {
    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Text style={{ top: 10, left: 10, fontWeight: "bold" }}>Your posts</Text>

                <Text style={{ top: 30, left: 10, fontWeight: "bold" }}>Allow others to use your posts</Text>
                <View style={{ marginLeft: 210, top: 10 }}>
                    <Switch {...label} defaultChecked />
                </View>
                <Text style={{ top: 5, left: 10 }}>Others people can add your posts to their guides.</Text>
                <Text style={{ top: 5, left: 10 }}>Your username will always appear with Your</Text>
                <Text style={{ top: 5, left: 10 }}>Posts.</Text>
            </View>
        </View>
    )
}

export default Guides;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",


    },




})
