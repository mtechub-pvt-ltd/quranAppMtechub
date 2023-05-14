import 'react-native-gesture-handler';
import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  Platform,
  Alert,
  BackHandler,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigationState,
  useRoute,
  useNavigationContainerRef,
  StackActions,
  NavigationActions,
  useIsFocused,
} from '@react-navigation/native';
import COLORS from './src/consts/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import ChapterList from './src/views/screens/ChapterList/ChapterList';
import ChapterView from './src/views/screens/ChapterList/ChapterView';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

// function CustomDrawerContent(props) {

//   return (
//     <DrawerContentScrollView
//       style={{
//         paddingHorizontal: '5%',
//         display: 'none',
//       }}>
//         <Text>hllo</Text>
//     </DrawerContentScrollView>
//   );
// }

// function MyDrawer({ route ,naigation}) {
//   return (
//     <Drawer.Navigator
//     screenOptions={
//       { header: () => null,
//       drawerStyle: {
//         backgroundColor: COLORS.red,
//         width: '70%',
//         display: 'none',
//       },
//       overlayColor: 'transparent',
//       }}
//       >
//       <Drawer.Screen

//       name="MyTabs" component={MyTabs} />
//     </Drawer.Navigator>
//   );
// }

// function MyTabs({ route ,naigation}) {

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: { position: 'absolute', height: Platform.  OS === 'ios' ? 90 :60, paddingTop: 5, paddingBottom: 10 },
//         tabBarActiveTintColor: COLORS.primary,
//         headerShown: false,
//         tabBarInactiveTintColor: COLORS.greylight,
//         tabBarShowLabel: false,
//         tabBarHideOnKeyboard: true,

//       }}
//     >
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({ tintColor, focused }) => (
//             <Icon name='home' size={24} color={focused ? COLORS.primary : COLORS.greylight} />
//           ),
//         }}
//         name="Home" component={HomePage} />

//     </Tab.Navigator>
//   );
// }

const App = ({navigation}) => {
  useEffect(() => {
    // console.log(products)
  });
  return (
   
    <NavigationContainer
    independent={true}>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="ChapterList" component={ChapterList} />
        <Stack.Screen name="ChapterView" component={ChapterView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
