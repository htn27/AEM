import initialState from './state';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        id_user: action.idUser,
      };
    default:
      return state;
  }
};
export default reducer;
