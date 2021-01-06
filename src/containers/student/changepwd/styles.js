import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  header: {
    marginTop: 20,
  },
  footer: {
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
export default styles;
