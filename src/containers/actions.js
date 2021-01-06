import {getUser} from './apis';

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

export const login = (idRole, token) => ({
  type: 'LOGIN',
  idRole: idRole,
  token: token,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const retrieve_token = (idRole, token) => ({
  type: 'RETRIEVE_TOKEN',
  idRole: idRole,
  token: token,
});

export const check_login = async (email, password, selected) => {
  let user;
  const token = makeToken();
  let type;

  if (selected == 'sinhvien') {
    type = '1';
    user = await getUser(type, email, password);
    // console.log(user);
  }
  if (selected == 'giangvien') {
    type = '2';
    user = await getUser(type, email, password);
  }
  if (selected == 'nhanvien') {
    type = '3';
    user = await getUser(type, email, password);
  }
  if (user != null) {
    // console.log(user);
    return {
      id_user: user.id_user,
      name_user: user.name_user,
      email: user.email,
      id_role: type,
      image_student: user.image_student,
      mobile_mac: user.mobile_mac,
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
