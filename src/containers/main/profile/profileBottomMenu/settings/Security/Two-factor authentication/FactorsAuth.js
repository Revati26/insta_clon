import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Switch, label } from 'react-native'

function FactorsAuth() {
    return (
        <View style={styles.container}>
             <Text style={{ marginHorizontal: 50,top:20, fontSize:20 }}>Two-factor authentication is on</Text>
             <Text style={{ marginHorizontal: 20,top:30 }}>We'll ask for a login code in addition to your Password
                                                             when you log in on a device that we don't recognise.
            </Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top: 28, marginHorizontal: 140 }}>
                    <Text style={{  color: "blue" }}>
                        learn more
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10,top:70, fontSize:18 }}>How you receive login codes
            </Text>
            <Text style={{ marginHorizontal: 10,top:100, fontSize:18 }}>Authentication app (recommended)
            </Text>
            <Text style={{ marginHorizontal: 10,top:102,  }}>We'll check to see if you have one. If you don't,
                                                             we'll recommend one to download.
            </Text>
            <View style={{marginLeft: 210, top: 50}}>
                            <Switch {...label} defaultChecked />
                            </View>
                            <Text style={{ marginHorizontal: 10,top:100, fontSize:18 }}>WhatsApp
            </Text>
        <Text style={{ marginHorizontal: 10,top:102 }}>We'll need you to enable text messages first,then
                                                           we'll send a login code to your WhatsApp
            </Text>
            <View style={{marginLeft: 210, top: 50}}>
                            <Switch {...label} defaultChecked />
                            </View>
                            <Text style={{ marginHorizontal: 10,top:100, fontSize:18 }}>Text message
            </Text>
        <Text style={{ marginHorizontal: 10,top:102 }}> We'll send a login code to ****55.
            </Text>
            <Text style={{ marginHorizontal: 10,top:130, fontSize:18 }}>Additional methods
            </Text>
        <Text style={{ marginHorizontal: 10,top:132 }}> See how to login securely even if your other methods
                                                        aren't available.
            </Text>
            <Text style={{ marginHorizontal: 10,top:155, fontSize:18 }}>Trusted devices
            </Text>
        <Text style={{ marginHorizontal: 10,top:157}}> You can log in without a login code using these
                                                        devices.
            </Text>
        </View>
        
    )
}

export default FactorsAuth;

const styles = StyleSheet.create({
    container: {

    }
})
