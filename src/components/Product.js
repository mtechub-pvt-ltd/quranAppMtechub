import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart,removeFromCart} from './redux/action';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const [isadded, setIsAdded] = useState(false);
  const cartItems = useSelector(state => state.reducer);
  const handleAddToCart = item => {
    // console.log(item);
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart=(item)=>{
    dispatch(removeFromCart(item.name));
  }

  useEffect(() => {
    // if (cartItems && cartItems.length) {
    //   cartItems.forEach(element => {
    //     if (element.name == item.name) {
    //       setIsAdded(true);
    //     }
    //   });
    // }
    let result =cartItems.filter((element)=>{
        return element.name===item.name
    })
    if (result.length) {
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
  }, [cartItems]);
  return (
    <View
      style={{
        backgroundColor: 'lightgreen',
        borderWidth: 1,
        paddding: 10,
        margin: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        {item.price}
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        {item.color}
      </Text>
      <Image
        style={{
          width: 40,
          height: 40,
        }}
        source={{uri: item.image}}
      />
      {isadded ? (
        <Button
          onPress={() => {
            handleRemoveFromCart(item);
          }}
          textColor="red">
          Remove from Cart
        </Button>
      ) : (
        <Button
          onPress={() => {
            handleAddToCart(item);
          }}>
          Add to Cart
        </Button>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
