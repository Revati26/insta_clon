import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, label, Switch} from 'react-native'

function Contactsync() {
    return (
        <View style={styles.container}>
           <Text style={{top:100, left:10, fontSize: 17}}>Connect contacts</Text>
                <View style={{marginLeft: 210, top:75}}>
                            <Switch {...label} defaultChecked />
                            </View>
                     <Text style={{top:100, left:10, fontSize: 17}}>To help people connect on Instagram, you contacts are
                                                                    periodically synced and stored on our servers. You choose which
                                                                    ones to follow.
                            </Text>
        </View>
    )
}

export default Contactsync

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
