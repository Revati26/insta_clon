import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, label, Switch} from 'react-native'

function Captions() {
    return (
        <View style={styles.container}>
                  <Text style={{top:20, left:20, fontSize: 15}}>Captions</Text>
                  <View style={{marginLeft: 210}}>
                            <Switch {...label} defaultChecked />
                            </View>
                            <Text style={{top:20, left:20}}>Video posts you watch will show auto-generated captions.</Text>
                            <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top:20, marginHorizontal: 20 }}>
                    <Text style={{  color: "blue" }}>
                        learn more
                    </Text>
                </TouchableOpacity>

                <Text style={{top:40, left:20, fontSize: 15}}>Language</Text>
                <Text style ={{marginLeft:210,top:25}}>English(auto-generated)</Text>
        </View>
        
    )
}

export default Captions;

const styles = StyleSheet.create({
    container: {

    }
})
