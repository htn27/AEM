import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a52b2a',
  },
  sizeTitle: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },
  signIn: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: '#fff',
    color: '#fff',
  },
  iconStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  row: {
    width: '80%',
  },
  btn: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#c98681',
  },
  btn_signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txtsignIn: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
