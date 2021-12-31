import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,  TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

function FollowInvite() {
    return (

        <View style={styles.container}>
         
         <View style={{ flexDirection: "column", marginStart: 20, }}>
         <View style={{ height: "40%", width: "100%", alignContent: "flex-start", marginLeft: 8, justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => alert("Allow Contacts access to find people to follow")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Follow contacts</Text>
                    </TouchableOpacity>
                    </View>
        <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, bottom: 30}}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Invite friends by email</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8,bottom :30}}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Invite friends via sms</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, bottom :30}}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Invite friends via...</Text>
                    </TouchableOpacity>
                    
                    </View>
                    </View>    
         </View>
    
)
}

  export default FollowInvite;

const styles = StyleSheet.create({
    container: {

    }
})
