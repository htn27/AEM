import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {TextInput, Title, Caption} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
// import {color} from 'react-native-reanimated';
// import {set} from 'react-native-reanimated';
import Student from '../../../models/students';

export default function index({navigation}) {
  // const [user, setUser] = useState({
  //   value: '',
  // });

  const [data, setData] = useState({
    txtPass: '',
    txtNewPass: '',
    txtRePass: '',
    password: '',
    secureTxtPass: true,
    secureTxtNPass: true,
    secureTxtRePass: true,
  });

  const getUsr = async () => {
    const usr = await AsyncStorage.getItem('userEmail');
    const findUser = Student.find((i) => usr == i.email_student);
    const pass = findUser.password;
    // console.log(password);
    return pass;
  };

  // getUser();
  const onExistPass = () => {
    const txt = data.txtPass;
    getUsr().then((val) => {
      if (val != null) {
        if (data.password == '') {
          // console.log(val);
          setData({
            ...data,
            password: val,
          });
        }
      }
    });
    if (data.password != '') {
      if (data.password == txt) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const onMinLengthChar = () => {
    const txt = data.txtNewPass;
    const max = 6;
    const length = txt.length;
    if (txt != '') {
      if (length >= max) return true;
      else return false;
    }
    return false;
  };

  const onLeastFChar = () => {
    const txt = data.txtNewPass;
    if (txt != '') {
      const val = txt.charAt(0);
      const regex = /^(?=.*?[A-Z]).{1,}$/;
      const check = regex.test(val) ? true : false;
      //  = chkRegLeastFChar(fisrt)
      // console.log(check);
      return check;
    }
    return false;
  };

  const onLeastChar = () => {
    const txt = data.txtNewPass;
    if (txt != '') {
      const regex = /^(?=.*?[a-z]).{1,}$/;
      const check = regex.test(txt) ? true : false;
      return check;
    }
    return false;
  };

  const onLeastSChar = () => {
    const txt = data.txtNewPass;
    if (txt != '') {
      const regex = /^(?=.*?[#?!@$%^&*-]).{1,}$/;
      const check = regex.test(txt) ? true : false;
      return check;
    }
    return false;
  };
  const onLeastNum = () => {
    const txt = data.txtNewPass;
    if (txt != '') {
      const regex = /^(?=.*?[0-9]).{1,}$/;
      const check = regex.test(txt) ? true : false;
      return check;
    }
    return false;
  };

  const onSameOldPass = () => {
    const txt = data.txtNewPass;
    if (txt != '') {
      const check = txt == data.txtPass ? false : true;
      return check;
    }
    return false;
  };

  const onSameRePass = () => {
    const txt = data.txtRePass;
    if (txt != '') {
      const check = txt == data.txtNewPass ? true : false;
      return check;
    }
    return false;
  };

  const onChangePassword = (txt) => {
    // console.log(check);
    if (txt != '') {
      setData({
        ...data,
        txtPass: txt,
      });
    } else {
      setData({
        ...data,
        txtPass: txt,
      });
    }
  };

  const onChangeNewPass = (txt) => {
    if (txt != '') {
      setData({
        ...data,
        txtNewPass: txt,
      });
    } else {
      setData({
        ...data,
        txtNewPass: txt,
      });
    }
  };

  const onChangeRePass = (txt) => {
    if (txt != '') {
      setData({
        ...data,
        txtRePass: txt,
        // isValidRePass: true,
      });
    } else {
      setData({
        ...data,
        txtRePass: txt,
        // isValidRePass: false,
      });
    }
  };

  const btnSubmit = () => {
    const check1 = onExistPass();
    const check2 = onMinLengthChar();
    const check3 = onLeastFChar();
    const check4 = onLeastChar();
    const check5 = onLeastSChar();
    const check6 = onLeastNum();
    const check7 = onSameOldPass();
    const check8 = onSameRePass();
    if (
      check1 &&
      check2 &&
      check3 &&
      check4 &&
      check5 &&
      check6 &&
      check7 &&
      check8
    ) {
      return true;
    } else {
      return false;
    }
  };

  const updateSecureTxtPass = () => {
    setData({
      ...data,
      secureTxtPass: !data.secureTxtPass,
    });
  };
  const updateSecureTxtNPass = () => {
    setData({
      ...data,
      secureTxtNPass: !data.secureTxtNPass,
    });
  };
  const updateSecureTxtRePass = () => {
    setData({
      ...data,
      secureTxtRePass: !data.secureTxtRePass,
    });
  };

  // getUser();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* {this.getItem()} */}
        {/* <View>{getUser.bind()}</View> */}
        {/* <Text>{data.userEmail}</Text> */}
        <View style={styles.row}>
          <TextInput
            mode={'outlined'}
            label="Password"
            value={data.txtPass}
            onChangeText={(txt) => onChangePassword(txt)}
            secureTextEntry={data.secureTxtPass ? true : false}
            style={{
              width: '85%',
            }}></TextInput>
          <TouchableOpacity
            style={styles.icon_grid}
            onPress={updateSecureTxtPass}>
            {data.secureTxtPass ? (
              <View style={styles.iconStyle}>
                <Feather name="eye" color="grey" size={20} />
              </View>
            ) : (
              <View style={styles.iconStyle}>
                <Feather name="eye-off" color="grey" size={20} />
              </View>
            )}
          </TouchableOpacity>
          {/* <Title style={styles.title}>dsada</Title> */}
        </View>
        <Caption style={data.txtPass == '' ? styles.unValid : styles.Valid}>
          {/* &#8226; Vui lòng điền vào mật khẩu */}
          {data.txtPass == ''
            ? 'Vui lòng điền vào mật khẩu'
            : 'Mật khẩu đã được điền'}
        </Caption>

        <View style={styles.row}>
          <TextInput
            mode={'outlined'}
            label="New Password"
            value={data.txtNewPass}
            onChangeText={(txt) => onChangeNewPass(txt)}
            secureTextEntry={data.secureTxtNPass ? true : false}
            style={{
              width: '85%',
            }}></TextInput>
          <TouchableOpacity
            style={styles.icon_grid}
            onPress={updateSecureTxtNPass}>
            {data.secureTxtNPass ? (
              <View style={styles.iconStyle}>
                <Feather name="eye" color="grey" size={20} />
              </View>
            ) : (
              <View style={styles.iconStyle}>
                <Feather name="eye-off" color="grey" size={20} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Caption style={data.txtNewPass == '' ? styles.unValid : styles.Valid}>
          {/* &#8226; Vui lòng điền vào mật khẩu mới */}
          {data.txtNewPass == ''
            ? 'Vui lòng điền vào mật khẩu mới'
            : 'Mật khẩu mới đã được điền'}
        </Caption>
        <View style={styles.row}>
          <TextInput
            mode={'outlined'}
            label="Re - Password"
            value={data.txtRePass}
            onChangeText={(txt) => onChangeRePass(txt)}
            secureTextEntry={data.secureTxtRePass ? true : false}
            style={{
              width: '85%',
            }}></TextInput>
          <TouchableOpacity
            style={styles.icon_grid}
            onPress={updateSecureTxtRePass}>
            {data.secureTxtRePass ? (
              <View style={styles.iconStyle}>
                <Feather name="eye" color="grey" size={20} />
              </View>
            ) : (
              <View style={styles.iconStyle}>
                <Feather name="eye-off" color="grey" size={20} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Caption style={data.txtRePass == '' ? styles.unValid : styles.Valid}>
          {/* &#8226; Vui lòng xác nhận lại mật khẩu mới */}
          {data.txtRePass == ''
            ? 'Vui lòng xác nhận lại mật khẩu mới'
            : 'Mật khẩu mới đã xác nhận'}
        </Caption>

        <View style={styles.footer}>
          {/* <Button
          // title="Lưu"
          color="#a52b2a"
          onPress={() => console.log('OK!')}
          disabled={btnSubmit() ? false : true}>
          Lưu
        </Button> */}
          <Button
            title="Lưu"
            color="#a52b2a"
            onPress={() => console.log('OK!')}
          />
          <View paddingVertical={5} />

          <Button
            title="Làm mới"
            color="#b3b3b3"
            onPress={() => console.log('OK!')}
          />
          {/* <Button mode="contained" onPress={() => console.log('Clear')}>
          Clear
        </Button> */}
        </View>

        <View style={styles.chks_valid}>
          <Title>Những điều cần thiết:</Title>
          <Caption style={onExistPass() ? styles.Valid : styles.unValid}>
            &#8226; Mật khẩu có đúng với mật khẩu hiện tại không
          </Caption>
          {/* <Text>{data.isPassUsing}</Text> */}
          <Caption style={onSameOldPass() ? styles.Valid : styles.unValid}>
            &#8226; Mật khẩu mới không được trùng với mật khẩu cũ
          </Caption>
          {/* <Text>{data.isMinLengthChar ? 'true' : 'false'}</Text> */}
          <Caption style={onMinLengthChar() ? styles.Valid : styles.unValid}>
            &#8226; Mật khẩu mới có ít nhất là 6 kí tự
          </Caption>
          {/* <Text>{data.isLeastNum ? 'true' : 'false'}</Text> */}
          <Caption style={onLeastNum() ? styles.Valid : styles.unValid}>
            &#8226; Mật khẩu mới có ít nhât 1 chữ số
          </Caption>
          {/* <Text>{data.isLeastSChar ? 'true' : 'false'}</Text> */}
          <Caption style={onLeastSChar() ? styles.Valid : styles.unValid}>
            &#8226; Mật khẩu mới có ít nhât 1 ký tự đặc biệt
          </Caption>
          {/* <Text>{data.isLeastFChar ? 'true' : 'false'}</Text> */}
          <Caption style={onLeastFChar() ? styles.Valid : styles.unValid}>
            &#8226; Mật khẩu mới phải có ít nhất 1 chữ cái viết hoa ở đầu
          </Caption>
          {/* <Text>{data.isLeastChar ? 'true' : 'false'}</Text> */}
          <Caption style={onLeastChar() ? styles.Valid : styles.unValid}>
            &#8226; Mật khẩu mới phải có ít nhất 1 chữ cái viết thường
          </Caption>
          {/* <Caption style={data.isValidPass ? styles.Valid : styles.unValid}>
          &#8226; Mật khẩu mới không được có khoảng trắng
        </Caption> */}
          <Caption style={onSameRePass() ? styles.Valid : styles.unValid}>
            &#8226; Xác nhận lại mật khẩu phải trùng khớp với mật khẩu vừa đặt
          </Caption>
        </View>
      </View>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.changePwdContent}>
    //   </View>
    //   <View style={styles.changePwdContent}>
    //     <Text style={{fontSize: 16, fontWeight: '600'}}>
    //       &#8226;&nbsp;Mật khẩu mới
    //     </Text>
    //     {/* <TextInput></TextInput> */}
    //   </View>
    //   <View style={styles.changePwdContent}>
    //     <Text style={{fontSize: 16, fontWeight: '600'}}>
    //       &#8226;&nbsp;Xác nhận mật khẩu
    //     </Text>
    //     {/* <TextInput></TextInput> */}
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    // justifyContent: 'flex-start',
  },
  header: {
    // flexDirection: 'column',
    // justifyContent: '',
    marginTop: 20,
  },
  footer: {
    // flex: 1,
    // alignContent: 'flex-end',
    // alignItems: 'flex-end',
    // flexDirection: 'row-reverse',
    // justifyContent: 'flex-end',
    marginTop: 20,
  },
  changePwdContent: {
    width: 40,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  unValid: {
    color: 'gray',
  },
  Valid: {
    color: 'green',
  },
  row: {
    flexDirection: 'row',
  },
  icon_grid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
  },
  iconStyle: {
    flex: 3,
    width: '100%',

    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chks_valid: {
    marginTop: 20,
  },
});
