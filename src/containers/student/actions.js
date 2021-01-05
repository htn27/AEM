export const getUsr = (usrEmail, usrType) => ({
  type: 'GET_USER',
  usrEmail: usrEmail,
  usrType: usrType,
});
