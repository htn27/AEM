import React, {useContext, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {
  // createDrawerNavigator,
  // DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {Drawer, Avatar, Title, Caption} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {signOut} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUsr} from './actions';
import {AuthContext} from '../../components/context';

export default function DrawerContent(props) {
  const {signOut} = useContext(AuthContext);
  const dispatch = useDispatch();
  const {usrEmail, usrType} = useSelector((state) => state.Student);

  useEffect(() => {
    return async () => {
      let usrEmail;
      let usrType;
      try {
        usrEmail = await AsyncStorage.getItem('userEmail');
        usrType = await AsyncStorage.getItem('userType');
      } catch (error) {
        console.log(error);
      }

      dispatch(getUsr(usrEmail, usrType));
    };
  });

  return (
    <View style={{flex: 1}}>
      <View style={styles.userInfoSection}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 15,
            alignItems: 'center',
          }}>
          <Avatar.Image
            source={require('../../assets/images/avatar-icon.png')}
          />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Title style={styles.title}>Hồ Thế Nhuận</Title>
            <Caption style={styles.caption}>{usrEmail}</Caption>
            <Caption style={styles.caption}>{usrType}</Caption>
          </View>
        </View>
      </View>
      <ScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Cá nhân"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="calendar-week" color={color} size={size} />
              )}
              label="Lịch"
              onPress={() => {
                props.navigation.navigate('Schedule');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="lock-open-variant" color={color} size={size} />
              )}
              label="Đổi mật khẩu"
              onPress={() => {
                props.navigation.navigate('ChangePassword');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="notification-clear-all" color={color} size={size} />
              )}
              label="Thông báo"
              onPress={() => {
                props.navigation.navigate('Notification');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="contacts" color={color} size={size} />
              )}
              label="Liên hệ"
              // onPress={() => {
              //   props.navigation.navigate("Notification");
              // }}
            />
          </Drawer.Section>
        </View>
      </ScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

// const mapStateToProps =

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    //
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
