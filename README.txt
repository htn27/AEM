Install the required packages in your project:
$ npm install 

$ npm install --save react-native-vector-icons
$ react-native link react-native-vector-icons
https://www.npmjs.com/package/react-native-vector-icons
Edit: android/app/build.gradle
project.ext.vectoricons = [
    iconFontNames: [ 'AntDesign.ttf', 'Entypo.ttf', 'EvilIcons.ttf', 'Feather.ttf', 'FontAwesome.ttf', 'FontAwesome5_Brands.ttf', 'FontAwesome5_Regular.ttf', 'FontAwesome5_Solid.ttf', 'Fontisto.ttf', 'Foundation.ttf', 'Ionicons.ttf', 'MaterialCommunityIcons.ttf', 'MaterialIcons.ttf', 'Octicons.ttf', 'SimpleLineIcons.ttf', 'Zocial.ttf' ] // Name of the font files you want to copy
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

$ npm install @react-native-picker/picker
https://www.npmjs.com/package/react-native-picker-select

$ npm install react-native-animatable --save
https://www.npmjs.com/package/react-native-animatable

$ npm install react-native-linear-gradient --save
https://www.npmjs.com/package/react-native-linear-gradient

$ npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer
For expo project: 
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
For react-native project:
$ npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
https://reactnavigation.org/docs/getting-started

$ npm install react-native-paper
https://callstack.github.io/react-native-paper/getting-started.html

$ npm install @react-native-async-storage/async-storage
https://react-native-async-storage.github.io/async-storage/docs/usage

$ npm install --save react-native-device-info
https://www.npmjs.com/package/react-native-device-info/v/7.3.1

$ npm install --save-dev react-devtools
add to scripts section in your package.json
"react-devtools": "react-devtools"

$ npm install yarn
$ yarn add -D react-native-clean-project
https://www.npmjs.com/package/react-native-clean-project

Hooks api reference
https://reactjs.org/docs/hooks-reference.html

$ npm install --save react-native-calendars
https://github.com/wix/react-native-calendars

$ npm install moment --save
https://momentjs.com/

$ npm install react-native-modal
https://www.npmjs.com/package/react-native-modal

$ npm install redux react-redux