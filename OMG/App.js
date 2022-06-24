/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Text, View} from "react-native"
 import BottomNavigator from './android/src/components/BottomNav';
 import { NavigationContainer } from '@react-navigation/native';
 import SignIn from './android/src/screens/Dangnhap';
 import Containers from './android/src/containers/index';
 import NavigatorBottom from './android/src/containers/NavigatorBottom';
 import { Provider} from "react-redux";
 import { store } from './android/src/redux';
 const App: () => Node = () => {
   return(
     <>
     <Provider store = {store}>
     <NavigationContainer>
       <Containers/>
     </NavigationContainer>
     </Provider>
     </>
   )
 };
 
 
 export default App;
 