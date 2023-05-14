import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
const Header = () => {
  const cartData=useSelector((state)=>state.reducer)
  const [cartItems,setCartItems]=useState(0);
  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])
  return (
    <View>
      <Text
      style={{
        fontSize:30,
        alignSelf:'center'
      }}
      >{cartItems}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})