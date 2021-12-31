import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

function Password() {
    return (
        <View style={styles.container}>

                <View style={{ flexDirection: "column",  marginStart: 10, top: 10}}>
                <Text>Your password must be more than six characters long 
                  and include a combination of numbers, letters and special
                  characters(!$@%%).
                 </Text>
            <Text style={{top:20}}>Current password (updated on 09/11/20)</Text>
            <TextInput
                       
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 2,
                            borderColor: '#CDCDCD',
                        }}
                    />

<Text style={{top:20}}>New Password</Text>
            <TextInput
                       
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 2,
                            borderColor: '#CDCDCD',
                        }}
                    />
                    <Text style={{top:20}}> Re-enter new password</Text>
            <TextInput
                       
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 2,
                            borderColor: '#CDCDCD',
                        }}
                    />

<TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top: 20 }}>
                    <Text style={{  color: "blue" }}>Forgotten your password</Text>
                </TouchableOpacity>
        </View>
        </View>
    )
}

export default Password;

const styles = StyleSheet.create({
    container: {

    }
})
