import React, {Component, useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
import {
  handleInputEmail,
  handleInputPwd,
  updateSecureEntry,
  handleChangeSelect,
  check_login,
} from './actions';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import students from '../models/students';
import employees from '../models/employees';
import teachers from '../models/teachers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../components/context';
import {useSelector, useDispatch} from 'react-redux';

function login() {
  const {signIn} = useContext(AuthContext);
  const dispatch = useDispatch();
  const {
    usr_email,
    usr_password,
    secureTxtEntry,
    isValidEmail,
    isValidPassword,
    selectedItem,
    itemType,
  } = useSelector((state) => state.Login);

  const handleLogin = (email, pwd, selected) => {
    let findUser;
    if (email == '' || pwd == '') {
      Alert.alert('', 'Vui lòng nhập email va password', [{text: 'OK'}]);
      return;
    }
    if (selected == '') {
      Alert.alert('', 'Vui lòng chọn quyền đăng nhập', [{text: 'OK'}]);
      return;
    }
    if (email != '' && pwd != '' && selected != '') {
      findUser = check_login(email, pwd, selected);
    }
    if (findUser == null) {
      Alert.alert('', 'Email và password không được tìm thấy', [{text: 'OK'}]);
      return;
    }
    console.log(findUser);
    signIn(findUser);
    // this.signIn();
    // if (findUser.length > 0) {
    //   Alert.alert('', 'Email và password đã đúng', [{text: 'OK'}]);
    //   return;
    // }
    // console.log(findUser);
    // const token = String(this.makeToken());
    // console.log(findUser, token);

    // console.log(this.props.token);
  };
  // console.log(usr_email);
  return (
    <View style={styles.container}>
      <Text style={styles.sizeTitle}>Aptech Education</Text>
      <Text style={styles.signIn}>Sign In</Text>
      <View style={styles.row}>
        <View style={styles.action}>
          <View style={styles.iconStyle}>
            <FontAwesome name="envelope-o" color="#fff" size={18} />
          </View>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#c9c9c9"
            style={styles.txtInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              dispatch(handleInputEmail(val));
            }}
          />
          {isValidEmail ? (
            <Animatable.View animation="bounceIn">
              <View style={styles.iconStyle}>
                <Feather name="check" color="#4da112" size={18} />
              </View>
            </Animatable.View>
          ) : null}
        </View>
        <View style={styles.action}>
          <View style={styles.iconStyle}>
            <FontAwesome name="lock" color="#fff" size={18} iconStyle />
          </View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#c9c9c9"
            style={styles.txtInput}
            autoCapitalize="none"
            secureTextEntry={secureTxtEntry}
            onChangeText={(val) => {
              dispatch(handleInputPwd(val));
            }}
          />
          {isValidPassword ? (
            <TouchableOpacity
              onPress={() => {
                dispatch(updateSecureEntry(secureTxtEntry));
              }}>
              {secureTxtEntry ? (
                <View style={styles.iconStyle}>
                  <Feather name="eye" color="grey" size={18} />
                </View>
              ) : (
                <View style={styles.iconStyle}>
                  <Feather name="eye-off" color="grey" size={18} />
                </View>
              )}
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderColor: '#fff',
            color: '#fff',
            paddingLeft: 8,
          }}>
          <Picker
            style={selectedItem == '' ? {color: '#c9c9c9'} : {color: '#fff'}}
            onValueChange={(val) => {
              dispatch(handleChangeSelect(val));
            }}
            selectedValue={selectedItem}>
            <Picker.Item value="" label="Đăng nhập quyền?" />
            {itemType.map((item, key) => (
              <Picker.Item key={key} value={item.value} label={item.label} />
            ))}
          </Picker>
        </View>

        <View paddingVertical={5} />

        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.btn_signIn}
            onPress={() => {
              // this.handleLogin(
              //   this.props.usr_email,
              //   this.props.usr_password,
              //   this.props.selected,
              // );
              handleLogin(usr_email, usr_password, selectedItem);
            }}>
            <View>
              <Text style={{color: '#fff'}}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View paddingVertical={5} />
      </View>
    </View>
  );
}
export default login;
