import React from 'react'
import {View, TextInput ,StyleSheet, Text, Image, Button} from 'react-native'

function Likes() {
    return (
        <View style={styles.container}>

        <View style={{ flexDirection: "column", marginStart: 20 }}>

            <View style={{ width: "90%", height: 40, flexDirection: "row", borderRadius:4, backgroundColor:"grey", top: 20}}>
                <View>
                    <TextInput
                    
                    placeholder='Search'
                     />
                </View>

            </View>
            </View>
            <View style={{alignContent: "flex-start", marginLeft: 10, top: 30, }}>
            <Image
                        source={{ uri: 'https://picsum.photos/600'}}
                        
                        style={{ width: 50, height: 50, borderRadius: 70 ,}}/>

                        <Text style={{ marginHorizontal: 10, marginLeft: 70, bottom: 50 }}>Kias star</Text>
                        <Text style={{  marginLeft: 70, bottom: 50 }}> KiasV</Text>

                        <View style={{alignContent: "flex-start", marginLeft: 100, marginRight:20,  bottom: 50,  borderRadius: 2, }}>
                        <Button
                        title="Follow"
                          onPress={() => Alert.alert('Simple Button pressed')}
                       />
                       </View>

                       
                       
                       <View style={{alignContent: "flex-start", marginLeft: 10, top: 30, }}>
            <Image
                        source={{ uri: 'https://picsum.photos/600'}}
                        
                        style={{ width: 50, height: 50, borderRadius: 70 ,}}/>

                        <Text style={{ marginHorizontal: 10, marginLeft: 70, bottom: 50 }}>Kias star</Text>
                        <Text style={{  marginLeft: 70, bottom: 50 }}> KiasV</Text>

                        <View style={{alignContent: "flex-start", marginLeft: 100, marginRight:20,  bottom: 50,  borderRadius: 2, }}>
                        <Button
                        title="Follow"
                          onPress={() => Alert.alert('Simple Button pressed')}
                       />
                       </View>
</View>

<View style={{alignContent: "flex-start", marginLeft: 10, top: 30, }}>
            <Image
                        source={{ uri: 'https://picsum.photos/600'}}
                        
                        style={{ width: 50, height: 50, borderRadius: 70 ,}}/>

                        <Text style={{ marginHorizontal: 10, marginLeft: 70, bottom: 50 }}>Kias star</Text>
                        <Text style={{  marginLeft: 70, bottom: 50 }}> KiasV</Text>

                        <View style={{alignContent: "flex-start", marginLeft: 100, marginRight:20,  bottom: 50,  borderRadius: 2, }}>
                        <Button
                        title="Follow"
                          onPress={() => Alert.alert('Simple Button pressed')}
                       />
                       </View>
</View>
                    
<View style={{alignContent: "flex-start", marginLeft: 10, top: 30, }}>
            <Image
                        source={{ uri: 'https://picsum.photos/600'}}
                        
                        style={{ width: 50, height: 50, borderRadius: 70 ,}}/>

                        <Text style={{ marginHorizontal: 10, marginLeft: 70, bottom: 50 }}>Kias star</Text>
                        <Text style={{  marginLeft: 70, bottom: 50 }}> KiasV</Text>

                        <View style={{alignContent: "flex-start", marginLeft: 100, marginRight:20,  bottom: 50,  borderRadius: 2, }}>
                        <Button
                        title="Follow"
                          onPress={() => Alert.alert('Simple Button pressed')}
                       />
                       </View>
</View>
           
          </View>

          
          </View>
            
    )
}

export default Likes;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    searchbar: {
        width: "90%",
        height: 30,
        backgroundColor: "grey",
        borderRadius: 20,
        top: 10,
        left: 0.5,
    }
})



