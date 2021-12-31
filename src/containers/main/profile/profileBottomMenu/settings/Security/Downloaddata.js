import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  Button } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'

function Downloaddata() {
    return (
        
        
        <View style={styles.container}>
          <Text style={{ marginHorizontal: 50,top:250, fontSize:20}}>Get a copy of what you've
                                                                       shared on Instagram 
         </Text>
         <Text style={{ marginHorizontal: 40,top:270, }}>We'll email you a link to a file with your photos,
                                                       comments, profile information and more. It may take up
                                                         to 48 hours to collect this data and send it to you.
         </Text>
         <TextInput
                       
                       style={{
                           
                           fontsize: 16,
                           borderBottomWidth: 2,
                           borderColor: '#CDCDCD',
                           top: 290,
                           width: "80%",
                           height: 20, 
                           flexDirection: "row", 
                           borderRadius:4,
                           left:30,
                       }}
                       
                   />
                   
                   
</View>

        
    )
}

export default Downloaddata;

const styles = StyleSheet.create({
    container: {

    }
})
