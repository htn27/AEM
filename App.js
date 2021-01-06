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
  const {id_role, token, isLoading} = useSelector((state) => state.Login);

  const authContext = useMemo(
    () => ({
      signIn: async (findUser) => {
        const {id_user, id_role, token, name_user, email} = findUser;
        console.log(
          'id: ' + id_user,
          'idrole: ' + id_role,
          'token: ' + token,
          'name: ' + name_user,
          'email: ' + email,
        );

        try {
          await AsyncStorage.setItem('Token', token);
          await AsyncStorage.setItem('idUser', id_user);
          await AsyncStorage.setItem('idRole', id_role);
        } catch (e) {
          console.log(e);
        }
        dispatch(login(id_role, token));
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('Token');
          await AsyncStorage.removeItem('idUser');
          await AsyncStorage.removeItem('idRole');
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
        token = await AsyncStorage.getItem('Token');
        type = await AsyncStorage.getItem('idRole');
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
