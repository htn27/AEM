import students from '../models/students';
import employees from '../models/employees';
import teachers from '../models/teachers';

export const handleInputEmail = (value) => ({
  type: 'InputEmail',
  value: value,
});

export const handleInputPwd = (value) => ({
  type: 'InputPwd',
  value: value,
});

export const updateSecureEntry = (value) => ({
  type: 'SecureEntry',
  value: !value,
});

export const handleChangeSelect = (value) => ({
  type: 'SelectItem',
  value: value,
});

export const login = (usrType, token) => ({
  type: 'LOGIN',
  usrType: usrType,
  token: token,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const retrieve_token = (usrType, token) => ({
  type: 'RETRIEVE_TOKEN',
  usrType: usrType,
  token: token,
});

export const check_login = (email, password, selected) => {
  let user;
  const token = makeToken();
  if (selected == 'sinhvien') {
    user = students.filter((item) => {
      return email == item.email_student && password == item.password;
    });
  }
  if (selected == 'giangvien') {
    user = teachers.filter((item) => {
      return email == item.email_student && password == item.password;
    });
  }
  if (selected == 'nhanvien') {
    user = employees.filter((item) => {
      return email == item.email_student && password == item.password;
    });
  }
  if (user.length > 0) {
    return {
      id: user[0].id,
      email: user[0].email_student,
      pwd: user[0].password,
      type: selected,
      token: token,
    };
  }
  return null;
};

export const refreshForm = () => ({
  type: 'REFRESH',
});

// export const signOut = () => ({
//   type: 'LOGOUT',
// });
const makeToken = () => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
