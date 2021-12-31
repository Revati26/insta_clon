import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

function Accountdata() {
    return (
        <ScrollView>
        <View style={styles.container}>
            
            <Text style={{ marginHorizontal: 30,top:20, fontSize:20 }}>Account info</Text>
            <Text style={{ marginHorizontal: 30,top:30, fontSize:15}}>Date joined</Text>
            <Text style={{ marginHorizontal: 30,top:50, fontSize:15}}>Account privacy changes</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 55, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:70, fontSize:15}}>Password changes</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 75, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:90, fontSize:15}}>Former email addresses</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 95, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:110, fontSize:15}}>Former phone numbers</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 115, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:130, fontSize:15}}>Date of birth</Text>
                <Text style={{ marginHorizontal: 30,top:150, fontSize:15}}>Date upgraded to cross-app messaging</Text>
                <Text style={{ marginHorizontal: 30,top:190, fontSize:20 }}>Power Info</Text>
                <Text style={{ marginHorizontal: 30,top:210, fontSize:15}}>Former usernames</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 215, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:230, fontSize:15}}>Former full names</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 235, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:250, fontSize:15}}>Former bio texts</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 255, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:270, fontSize:15}}>Former links in bio</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 275, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:300, fontSize:20 }}>Connections</Text>
                <Text style={{ marginHorizontal: 30,top:320, fontSize:15}}>Current follow requests</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 325, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:340, fontSize:15}}>Accounts following you</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 345, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:360, fontSize:15}}>Accounts that you follow</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 365, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:380, fontSize:15}}>Hashtags you follow</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 385, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:400, fontSize:15}}>Accounts that you've blocked</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 405, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:420, fontSize:15}}>Accounts you hide stories from</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 425, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                
                <Text style={{ marginHorizontal: 30,top:470, fontSize:20 }}>Account Activity</Text>
                <Text style={{ marginHorizontal: 30,top:490, fontSize:15}}>Logins</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 325, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:510, fontSize:15}}>Logouts</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 515, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:530, fontSize:15}}>Search History</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 535, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:560, fontSize:20 }}>Stories Activity</Text>
                <Text style={{ marginHorizontal: 30,top:580, fontSize:15}}>polls</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 585, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:600, fontSize:15}}>Emojis sliders</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 605, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:620, fontSize:15}}>Questions</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 625, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:640, fontSize:15}}>Music Questions</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 645, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:660, fontSize:15}}>Countdowns</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 665, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:680, fontSize:15}}>Quizzes</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 685, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:700, fontSize:15}}>Music</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 705, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 30,top:730, fontSize:20 }}>Ads</Text>
                <Text style={{ marginHorizontal: 30,top:750, fontSize:15}}>Ads interests</Text>
            <TouchableOpacity onPress={() => alert("clicked")} style={{ top: 755, marginHorizontal: 30 }}>
                    <Text style={{  color: "blue" }}>
                        View All
                    </Text>
                </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}

export default Accountdata;

const styles = StyleSheet.create({
    container: {

    }
})
