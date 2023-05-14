import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Platform,
} from 'react-native';
import {
  Text,
  Button,
  Snackbar,
  Headline,
  ActivityIndicator,
  Colors,
  TouchableRipple,
  TextInput,
  Switch,
  Appbar,
  List,
  Divider,
} from 'react-native-paper';
import COLORS from '../../../consts/colors';
import base_url from '../../../consts/base_url';
import styles from './styles';
import STYLES from '../../../components/button/styles';
import logoIcon from '../../../assets/logoIcon.png';
import cover1 from '../../../assets/cover1.png';
import cover2 from '../../../assets/cover2.png';
import cover3 from '../../../assets/cover3.png';
import chapterNumber from '../../../assets/chapterNumber.png';
import chapters from '../../../assets/data/chapters';
import Carousel from 'react-native-snap-carousel';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function ChapterView({route, navigation}) {
  const {item} = route.params;
  const DATA = [cover1, cover2, cover3];
  const carouselRef = React.useRef(null);
  useEffect(() => {
console.log(item)
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Appbar.Header
        mode="small"
        style={{
          backgroundColor: COLORS.white,
          padding: 0,
          borderBottomWidth: .5,
          borderBottomColor: COLORS.greylight,
        }}>
           <Appbar.BackAction
           iconColor={COLORS.greylight}
           onPress={() => {
              navigation.goBack();
           }} />
        <Appbar.Content
          title={item.name_pron_en}
          titleStyle={{
            fontFamily: 'RobotoCondensed-Bold',
            fontSize: 20,
            color: COLORS.primary,
          }}
        />
        <Appbar.Content
          title={item.name_ar}
          titleStyle={{
            fontFamily: 'RobotoCondensed-Bold',
            fontSize: 20,
            color: COLORS.primary,
            alignSelf: 'flex-end',
            marginRight: 10,
          }}
        />
        {/* <Appbar.Action
          style={{
            borderRadius: 50,
            marginRight: 10,
          }}
          iconColor={COLORS.primary}
          icon="magnify"
          onPress={() => {}}
        /> */}
      </Appbar.Header>
      <ScrollView>
      <View style={{
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        }}>
        <Text
        style={{
          fontFamily: 'RobotoCondensed-Bold',
          color: COLORS.greylight,
        }}
        >
          Type : 
        </Text>
        <Text
        style={{
          fontFamily: 'RobotoCondensed-Bold',
          color: COLORS.greylight,
        }}
        >
          {
            item.class
          } 
        </Text>
        
      </View>
      <View style={{
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        }}>
        <Text
        style={{
          fontFamily: 'RobotoCondensed-Bold',
          color: COLORS.greylight,
        }}
        >
          Total Verses :
        </Text>
        <Text
        style={{
          fontFamily: 'RobotoCondensed-Bold',
          color: COLORS.greylight,
        }}
        >
          {
            item.verses_number
          } 
        </Text>
        
      </View>
      
      <View style={{
        flexDirection:'column', 
        justifyContent:'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        }}>
        <Text
        style={{
          fontFamily: 'RobotoCondensed-Bold',
          color: COLORS.primary,
          paddingBottom: '5%',
          fontSize: 20,
        }}
        >
          Ayahs :
        </Text>
        <Text
        style={{
          fontFamily: 'RobotoCondensed-Bold',
          color: COLORS.greylight,
          lineHeight:40,
          fontSize: 20,
          textAlign: 'justify',
        }}
        >
          {
            // determince if content is has from [ and ending with ] then change the color
            item.content
          } 
        </Text>
        
      </View>
      
      </ScrollView>
        


    </SafeAreaView>
  );
}

export default ChapterView;
