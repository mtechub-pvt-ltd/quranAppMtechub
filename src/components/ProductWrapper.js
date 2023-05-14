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
import {Button} from 'react-native-paper';
import COLORS from '../../src/consts/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './Header';
import Product from './Product';

const products = [
  {
    name: 'product 1',
    color: 'white',
    price: 3000,
    image:
      'https://dreamhostpro.com/wp-content/uploads/2023/04/ezgif-2-14fdbb92c6.jpg',
  },
  {
    name: 'product 2',
    color: 'white',
    price: 3000,
    image:
      'https://dreamhostpro.com/wp-content/uploads/2023/04/ezgif-2-14fdbb92c6.jpg',
  },
  {
    name: 'product 3',
    color: 'white',
    price: 3000,
    image:
      'https://dreamhostpro.com/wp-content/uploads/2023/04/ezgif-2-14fdbb92c6.jpg',
  },
  {
    name: 'product 4',
    color: 'white',
    price: 3000,
    image:
      'https://dreamhostpro.com/wp-content/uploads/2023/04/ezgif-2-14fdbb92c6.jpg',
  },
  {
    name: 'product 5',
    color: 'white',
    price: 3000,
    image:
      'https://dreamhostpro.com/wp-content/uploads/2023/04/ezgif-2-14fdbb92c6.jpg',
  },
];
const ProductWrapper = ({navigation}) => {
  useEffect(() => {});
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,
      }}>
      <View
      style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        alignContent:'center',
        alignItems:'center',
      }}
      >
        <Header />
        <Button
          onPress={() => {
            navigation.navigate('Users')
          }}>
          Go to User List
        </Button>
      </View>
      <ScrollView>
        {products.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductWrapper;
