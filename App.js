import React, {useMemo, useEffect} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from './src/components/context';
import DrawerStudent from './src/containers/student/drawer';
import StudentScreen from './src/containers/student/index';
import {logout, retrieve_token, login} from './src/containers/actions';
import {useSelector, useDispatch} from 'react-redux';
import LoginScreen from './src/containers/login';

const Drawer = createDrawerNavigator();

const App = () => {
  const dispatch = useDispatch();
  const {token, isLoading} = useSelector((state) => state.Login);

  const authContext = useMemo(
    () => ({
      signIn: async (findUser) => {
        const {email, type, token} = findUser;
        try {
          await AsyncStorage.setItem('userToken', token);
          await AsyncStorage.setItem('userEmail', email);
          await AsyncStorage.setItem('userType', type);
        } catch (e) {
          console.log(e);
        }
        dispatch(login(type, token));
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('userEmail');
          await AsyncStorage.removeItem('userType');
        } catch (e) {
          console.log(e);
        }
        dispatch(logout());
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let token;
      let type;
      try {
        token = await AsyncStorage.getItem('userToken');
        token = await AsyncStorage.getItem('userType');
      } catch (e) {
        console.log(e);
      }

      dispatch(retrieve_token(type, token));
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#a52b2a',
        }}>
        <Image
          style={{width: 200, resizeMode: 'contain'}}
          source={require('./src/assets/images/1516361101-fGQDcKd.png')}
        />
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{marginBottom: 15}}
        />
        {/* <Text style={{ color: "#c9c9c9" }}>Please wait...</Text> */}
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {token != null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerStudent {...props} />}>
            <Drawer.Screen
              name="Student"
              component={StudentScreen}></Drawer.Screen>
          </Drawer.Navigator>
        ) : (
          <LoginScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a52b2a',
  },
});

export default App;
