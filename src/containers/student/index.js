import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Calendar from './calendar/index';
import Home from './home/index';
import ChangePassword from './changepwd/index';
import Notification from './notification/index';
import Profile from './profile/index';

const HomeStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const ChangePasswordStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();
function index() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Lịch biểu',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <Icon name="ios-calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ChangePassword"
        component={ChangePwdScreen}
        options={{
          tabBarLabel: 'Đổi MK',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="md-lock-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#a52b2a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#a52b2a"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);
const CalendarScreen = ({navigation}) => (
  <CalendarStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#a52b2a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <CalendarStack.Screen
      name="Home"
      component={Calendar}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#a52b2a"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </CalendarStack.Navigator>
);
const ChangePwdScreen = ({navigation}) => (
  <ChangePasswordStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#a52b2a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ChangePasswordStack.Screen
      name="Home"
      component={ChangePassword}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#a52b2a"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ChangePasswordStack.Navigator>
);
const NotificationScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#a52b2a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Home"
      component={Notification}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#a52b2a"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </NotificationStack.Navigator>
);
const ProfileScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#a52b2a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="Home"
      component={Profile}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#a52b2a"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);
export default index;
