import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import profileScreen from './profileScreen';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../res/colors';
import images from '../../../res/images';
import Setting from '../Setting/Setting';
import { NavigationContainer } from '@react-navigation/native';
import SettingScreen from './profileBottomMenu/settings/SettingScreen';
import Archive from './profileBottomMenu/archive/Archive';
import Insight from './profileBottomMenu/insight/Insight';
import YourActivity from './profileBottomMenu/youractivity/YourActivity';
import QrCode from './profileBottomMenu/qrcode/QrCode';
import Saved from './profileBottomMenu/saved/Saved';
import CloseFriends from './profileBottomMenu/closeFriends/CloseFriends';
import DiscoverPeople from './profileBottomMenu/discoverPeople/DiscoverPeople';
import Covid from './profileBottomMenu/covid/Covid';
import FollowInvite from './profileBottomMenu/settings/FollowInvite';
import Savedlogininformation from './profileBottomMenu/settings/Security/Two-factor authentication/FactorsAuth';
import  Activitystatus from './profileBottomMenu/settings/Privacy/Activitystatus';



export default function profileNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      
    <Stack.Screen name="Activitystatus" component = {Activitystatus}/>
    
    
    <Stack.Screen

        name="Profile"
        component={profileScreen}
        options={{
          headerShown: false,
          headerTitle: (
            <TouchableOpacity
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                johndoe
              </Text>
            </TouchableOpacity>
          ),
          headerTitleStyle: { alignSelf: 'center' },
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
          headerRight: () => (
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,

                }}>
                <Image
                  source={images.list3}
                  style={{ resizeMode: 'contain', width: 25, height: 25 }}

                />

              </View>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginStart: 10,

                }}>
                <Image
                  source={images.addIcon}
                  style={{ resizeMode: 'contain', width: 20, height: 20 }}


                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen name='settingScreen' component={SettingScreen} />
      <Stack.Screen name='archive' component={Archive} />
      <Stack.Screen name='insight' component={Insight} />
      <Stack.Screen name='youractivity' component={YourActivity} />
      <Stack.Screen name='qrcode' component={QrCode} />
      <Stack.Screen name='saved' component={Saved} />
      <Stack.Screen name='closefriends' component={CloseFriends} />
      <Stack.Screen name='discoverpeople' component={DiscoverPeople} />
      <Stack.Screen name='covid' component={Covid} />
    </Stack.Navigator>
  );
}
