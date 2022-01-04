import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Help() {
    return (
        <View style={styles.container}>
            <Text style={{top:20, left:10}}>This setting can help you control the amount of photos
                                            and videos that you may find upsetting or offensive
                                            on your Explore page.It does not control what you
                                            see in direct messages, reels, stories, feed or account
                                            recommendation.
                                            </Text>
                     <TouchableOpacity onPress={() => alert("clicked")} style={{ flexDirection: "row", top:35, left: 10 }}>
                    <Text style={{  color: "blue" }}>
                        How does this work?
                    </Text>
                </TouchableOpacity>
                <Text style={{top:50, left:10, fontSize:17}}>Allow
                                            </Text>
                <Text style={{top:50, left:10}}>You may see more photos and videos that could
                                               be upsetting or offensive.
                                            </Text>
                 <Text style={{top:60, left:10, fontSize:17}}>Limit (default)
                                            </Text>
                <Text style={{top:60, left:10}}>You may see some fewer photos and videos
                 that could be upsetting or offensive.Content in explore has
                                        always been filtered at this level.
                                            </Text>
               
               <Text style={{top:70, left:10, fontSize:17}}>Limit even more
                                            </Text>
                <Text style={{top:70, left:10}}>You may see some fewer photos and videos that could
                                                             be upsetting or offensive.
                                            </Text>
                                            
                
                

        </View>
    )
}

export default Help;

const styles = StyleSheet.create({
    container: {

    }
})
