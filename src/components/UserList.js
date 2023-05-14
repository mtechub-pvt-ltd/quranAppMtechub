import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState,useCallback } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUserList } from './redux/action'

const UserList = () => {
  const dispatch=useDispatch();
  const userList=useSelector(state=>state.reducer)
  useEffect(()=>{
    dispatch(getUserList())
  },[])

  return (
    <View>
      <Text
      style={{
        fontSize:30,
        alignSelf:'center'
      }}
      >
        UserList
      </Text>
      {
        userList.length>0 ?
        userList[0].users.map((item,index)=>{
          return(
            <View key={index}>
              <Text>{item.firstName}</Text>
            </View>
          )
        }
        ) : null
      }
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({})