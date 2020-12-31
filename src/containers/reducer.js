import initialState from './state';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'InputEmail':
      if (action.value == '') {
        return {
          ...state,
          usr_email: action.value,
          isValidEmail: false,
        };
      } else {
        return {
          ...state,
          usr_email: action.value,
          isValidEmail: true,
        };
      }
    case 'InputPwd':
      if (action.value == '') {
        return {
          ...state,
          usr_password: action.value,
          isValidPassword: false,
        };
      } else {
        return {
          ...state,
          usr_password: action.value,
          isValidPassword: true,
        };
      }
    case 'SecureEntry':
      return {
        ...state,
        secureTxtEntry: action.value,
      };
    case 'SelectItem':
      return {
        ...state,
        selectedItem: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
