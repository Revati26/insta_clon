import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions } from 'react-native'
import user from '../../../../../../res/images/user.png'
import chat from '../../../../../../res/images/chat.png'
import direction from '../../../../../../res/images/direction.png'

const { Width, Hieght } = Dimensions.get("window")

function Limits() {
    return (
        <SafeAreaView style={styles.container}>

            <Image source={user} style={{ width: 100, height: 100, }} />


            <Text style={{ fontSize: 22 }}>Limit unwanted interactions</Text>
            <View style={{ alignItems: "center", flexDirection: "column", top: "2%" }}>
                <Text style={styles.paragraph}>If you feel like you're being harassed, you can</Text>
                <Text style={styles.paragraph}>temporarily limit unwanted comments and </Text>
                <Text style={styles.paragraph}>messages. Limiting is similar to restricting, but</Text>
                <Text style={styles.paragraph}>helps you mange harassment from groups</Text>
                <Text style={styles.paragraph}>instead of individual</Text>
            </View>

            <View style={{ top: "4%", left: 10 }}>


                <View style={styles.contents}>
                    <Image source={user} style={styles.Image} />
                    <View style={{ flexDirection: "column", }}>
                        <Text style={styles.paragraph}> We'll recommend groups of accounts you may</Text>
                        <Text style={styles.paragraph}> want to limit comments and messages from.</Text>
                    </View>
                </View>


                <View style={[styles.contents, { top: 20 }]}>
                    <Image source={chat} style={styles.Image} />
                    <View style={{ flexDirection: "column", }}>
                        <Text style={styles.paragraph}> Limited comments and messages will be hidden</Text>
                        <Text style={styles.paragraph}> unless you approve them.</Text>
                    </View>
                </View>


                <View style={[styles.contents, { top: 40 }]}>
                    <Image source={direction} style={styles.Image} />
                    <View style={{ flexDirection: "column", }}>
                        <Text style={styles.paragraph}> This won't affect your reach in the feed and Explore.</Text>

                    </View>
                </View>


            </View>

            <View style={{ width: "100%", height: 50, borderWidth: 0.5, top: 100, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={() => alert("pressed")} style={{ width: "90%", backgroundColor: "skyblue", height: 35, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Continue</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Limits;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center"
    },
    paragraph: {
        color: "grey"
    },
    contents: {
        flexDirection: "row"
    },
    Image: {
        width: 25,
        height: 25,
        right: 20
    },
    button: {
        width: "100%",
        height: 50,
        borderWidth: 0.5,
        top: 100,
        justifyContent: "center",
        alignItems: "center"

    }





























})
