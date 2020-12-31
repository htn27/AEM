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
