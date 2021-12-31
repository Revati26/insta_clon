import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextField, Switch, label} from 'react-native'

function Notification() {
    return (
        <View style={styles.container}>
             <View style={{ flexDirection: "column", marginStart: 10, }}>
         <View style={{ height: "40%", width: "100%", alignContent: "flex-start", marginLeft: 8, justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => alert("Allow Contacts access to find people to follow")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10 }}>Push notifications</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, bottom: 20}}>
                      
                        <Text style={{ marginHorizontal: 10 }}>Pause all</Text>
                        <View style={{marginLeft: 210}}>
                            <Switch {...label} defaultChecked />
                            </View>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top: 10}}>
                        
                        <Text style={{ marginHorizontal: 10 }}>Posts, stories and comments</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top: 40}}>
                        
                        <Text style={{ marginHorizontal: 10 }}>Following and followers</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top: 70}}>
                      
                        <Text style={{ marginHorizontal: 10 }}>Messages and calls</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top: 100}}>
                        
                        <Text style={{ marginHorizontal: 10 }}>Live and video</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top: 130}}>
                       
                        <Text style={{ marginHorizontal: 10 }}>Fundraisers</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top:160}}>
                        
                        <Text style={{ marginHorizontal: 10 }}>From Instagram</Text>
                    </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top:200}}>
                        
                        <Text style={{ marginHorizontal: 10 }}>Other notification type</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top:230}}>
                        
                        <Text style={{ marginHorizontal: 10 }}>Email and SMS </Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", marginLeft: 8, top:260}}>
                        
                        <Text style={{ marginHorizontal: 10 }}>Shopping</Text>
                    </TouchableOpacity>
                    </View>
        </View>
             </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    container: {

    }
})
