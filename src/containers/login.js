import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
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
} from './actions';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

class login extends Component {
  render() {
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
                this.props.inputEmail(val);
              }}
            />
            {this.props.isValidEmail ? (
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
              secureTextEntry={this.props.secureTxtEntry ? true : false}
              onChangeText={(val) => {
                this.props.inputPassword(val);
              }}
            />
            {this.props.isValidPassword ? (
              <TouchableOpacity
                onPress={() => {
                  this.props.onHide(this.props.secureTxtEntry);
                }}>
                {this.props.secureTxtEntry ? (
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
              style={
                this.props.selected == '' ? {color: '#c9c9c9'} : {color: '#fff'}
              }
              onValueChange={(val) => this.props.select(val)}
              selectedValue={this.props.selected}>
              <Picker.Item value="" label="Đăng nhập quyền?" />
              {this.props.itemType.map((item, key) => (
                <Picker.Item key={key} value={item.value} label={item.label} />
              ))}
            </Picker>
          </View>

          <View paddingVertical={5} />

          <View style={styles.btn}>
            <TouchableOpacity style={styles.btn_signIn} onPress={() => {}}>
              <View>
                <Text style={{color: '#fff'}}>Đăng nhập</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  // const {visible} =
  return {
    usr_email: state.Login.usr_email,
    usr_password: state.Login.usr_password,
    isValidEmail: state.Login.isValidEmail,
    isValidPassword: state.Login.isValidPassword,
    secureTxtEntry: state.Login.secureTxtEntry,
    itemType: state.Login.itemType,
    selected: state.Login.selectedItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(this.state.visible);
  return {
    inputEmail: (val) => dispatch(handleInputEmail(val)),
    inputPassword: (val) => dispatch(handleInputPwd(val)),
    onHide: (secureTxt) => dispatch(updateSecureEntry(secureTxt)),
    select: (val) => dispatch(handleChangeSelect(val)),
  };
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#fff',
    paddingRight: 30,
  },
  inputAndroid: {
    flexDirection: 'row',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#fff',
    paddingRight: 30,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(login);
