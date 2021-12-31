import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Account() {
    return (
        <View style={styles.container}>
             <View style={{ height: "30%", width: "100%", alignContent: "flex-start", marginLeft: 8, top: 10, justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, fontSize:15, top:20}}>Personal information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:50 , fontSize:15}}>Your Activity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:80 , fontSize:15}}>Saved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:110 , fontSize:15}}>Close friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:140 , fontSize:15}}>Account status</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:170 , fontSize:15}}>Language</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:200 , fontSize:15}}>Captions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:230 , fontSize:15}}>Browser settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:260 , fontSize:15}}>Sensitive content control</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:290 , fontSize:15}}>Contacts syncing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:320 , fontSize:15}}>Sharing content control</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:350 , fontSize:15}}>Mobile data use</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:380 , fontSize:15}}>Original posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:410 , fontSize:15}}>Request verification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:440 , fontSize:15}}>Posts you've liked</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:470 , fontSize:15}}>Recently deleted</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:500 , fontSize:15}}>Review Activity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:530 , fontSize:15}}>Branded content</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:570 , fontSize:15, color: 'blue'}}>Switch to professional account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Text style={{ marginHorizontal: 10, top:600 , fontSize:15, color: 'blue'}}>Add new professional account</Text>
                    </TouchableOpacity>

                    </View>
        </View>
    )
}

export default Account;

const styles = StyleSheet.create({
    container: {

    }
})
