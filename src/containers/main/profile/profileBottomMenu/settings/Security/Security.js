import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

function Security() {
    return (
        
             <View style={styles.container}>

                <View style={{ flexDirection: "column",  marginStart: 10 }}>
                <View style={{ width: "90%", height: 40, flexDirection: "row", borderRadius:4, top: 20}}>
                        <Text style={{ marginHorizontal: 10 }}>Login Security</Text>

                    </View>
            </View>
            <View style={{ height: "20%", width: "100%", alignContent: "flex-start", marginLeft: 12, top: 20, justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row",top: 20 }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Login activity</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row",top: 40 }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Saved login information</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row",top: 60 }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Two-factor authentication</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row",top: 80 }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Emails from Instagram</Text>
                    </TouchableOpacity>
                
                    <View style={{ flexDirection: "row", top: 180 }}>

                   <Text style={{ marginHorizontal: 10 }}>Data and history</Text>

                  </View>
                  <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row",top: 210 }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Access Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row",top: 230 }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Download Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row",top: 250 }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>Apps and websites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row",top: 270 }}>
                        <Feather name='user-plus' size={18} color="black" />
                        <Text style={{ marginHorizontal: 10 }}>search history</Text>
                    </TouchableOpacity>
                
               

                
                    </View>
                    </View>

                 
                

            
            
    )
}

export default Security

const styles = StyleSheet.create({

})
