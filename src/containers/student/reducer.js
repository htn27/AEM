import initialState from './state';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        usrEmail: action.usrEmail,
        usrType: action.usrType,
      };
    default:
      return state;
  }
};
export default reducer;
