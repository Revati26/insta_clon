import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

function About() {
    return (
        <View style={styles.container}>
            <Text style={{ marginHorizontal: 50,top:20, fontSize:15}}>Provide your personal information, even if the
                                                                     account is used for a business, a pet or something
                                                                       else.This won't be part of your public profile.</Text>
            <Text style={{top:60,marginHorizontal: 20 }}>Email address</Text>
            <TextInput
                       
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 2,
                            borderColor: '#CDCDCD',
                            top: 40,
                            borderRadius: 40
                        }}
                    />
                     <Text style={{top:60,marginHorizontal: 20 }}>Phone number</Text>
            <TextInput
                       
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 2,
                            borderColor: '#CDCDCD',
                            top: 40,
                            borderRadius: 40
                        }}
                    />
                     <Text style={{top:60,marginHorizontal: 20 }}>Gender</Text>
            <TextInput
                       
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 2,
                            borderColor: '#CDCDCD',
                            top: 40,
                            borderRadius: 40
                        }}
                    />
                
                     <Text style={{top:60,marginHorizontal: 20 }}>Date of birth</Text>
                     
            <TextInput
                       
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 2,
                            borderColor: '#CDCDCD',
                            top: 40,
                            borderRadius: 40
                        }}
                    />
                 
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    container: {

    }
})
