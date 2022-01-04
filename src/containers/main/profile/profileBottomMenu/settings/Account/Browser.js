import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, label, Switch } from 'react-native'

function Browser() {
    return (
        <View style={styles.container}>
              <Text style={{top:20, left:10, fontSize: 17}}>Browsing data</Text>
               <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top: 1, left: 300 }}>
                    <Text style={{  color: "blue" }}>
                        clear
                    </Text>
                </TouchableOpacity>
              
              <Text style={{top:40, left:10}}>Clear your cookies and cache from the website
                                             you've visited while using Instagram.</Text>
              <Text style={{top:80, left:10, fontSize: 17}}>Auto-fill</Text>
              <Text style={{top:90, left:10}}>Quickly fill in forms with your saved contact info.</Text>
              <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top:70, left: 300 }}>
                    <Text style={{  color: "blue" }}>
                        learn more
                    </Text>
                </TouchableOpacity>
                <Text style={{top:100, left:10, fontSize: 17}}>Auto-fill contact forms</Text>
                <View style={{marginLeft: 210, top:75}}>
                            <Switch {...label} defaultChecked />
                            </View>
                            <Text style={{top:100, left:10, fontSize: 17}}>contact Info</Text>
             
        </View>
    )
}

export default Browser;

const styles = StyleSheet.create({
    container: {

    }
})
