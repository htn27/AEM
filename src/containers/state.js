const initialState = {
  usr_email: '',
  usr_password: '',
  secureTxtEntry: true,
  isValidEmail: false,
  isValidPassword: false,
  selectedItem: '',
  mac_address: '',
  isLoading: true,
  usrEmail: '',
  usrType: '',
  token: null,

  itemType: [
    {
      id: 1,
      label: 'Sinh viên',
      value: 'sinhvien',
    },
    {
      id: 2,
      label: 'Giảng viên',
      value: 'giangvien',
    },
    {
      id: 3,
      label: 'Nhân viên',
      value: 'nhanvien',
    },
  ],
};
export default initialState;
