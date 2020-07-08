import * as React from 'react';
import { Text, View, Fragment, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { AccessAlarm } from '@material-ui/icons';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import Home from './Home.js'

function ProfileScreen() {
  return (
        <View>
          <SafeAreaView style={{ flex:0, height:"60%", backgroundColor: '#FFC857' }} />
          {/* <SafeAreaView style={{ flex:1, backgroundColor: 'red' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }} />
          </SafeAreaView> */}
        </View>
      );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <AccessAlarmIcon />
      <AcUnitIcon />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#F5F5F5',
          inactiveBackgroundColor: '#F5F5F5',
          style: {
            backgroundColor: '#F5F5F5',
            // borderTopColor: '#BDBDBD',
          }
        }}>
        <Tab.Screen tabBarOptions={{tabBarVisible:false}} name="Home" component={Home} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
}