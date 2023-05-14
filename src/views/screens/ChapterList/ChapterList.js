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
  Searchbar,
  IconButton
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

function ChapterList({route, navigation}) {
  const DATA = [cover1, cover2, cover3];
  const carouselRef = React.useRef(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [chapterList, setChapterList] = useState(chapters);
  // toggle searchbar
  const [search, setSearch] = useState(false);
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      
      {search === true ? (
        <View
        style={{
          paddingVertical: 10,
          backgroundColor: COLORS.white,
        }}
        >
        <Searchbar
          placeholder="Search"
          iconColor={COLORS.greylight}
          placeholderTextColor={COLORS.greylight}
          style={{
            backgroundColor: COLORS.greylight + 40,
            marginHorizontal: 10,
            width: width - 20,
          }}
          onChangeText={(e)=>{
            // filter data from chapters
            // filter data from array of chapters
            setSearchQuery(e)
            console.log(e)
            console.log(chapters)
            setChapterList(chapters.filter((item)=>{
              return item.name_pron_en.includes(e)
            }))
          }}
          value={searchQuery}
          
          
        />
        <IconButton
          icon="close"
          color={COLORS.greylight}
          size={20}
          style={{
            position: 'absolute',
            right: '5%',
            top: '25%',
            backgroundColor: COLORS.greylight + 40,
          }}
          onPress={() => {
            setSearch(!search);
          }}
        />
        </View>
      ) : <Appbar.Header
      mode="small"
      style={{
        backgroundColor: COLORS.white,
        padding: 0,
      }}>
      <Appbar.Content
        title="Al Quran"
        titleStyle={{
          fontFamily: 'RobotoCondensed-Bold',
          fontSize: 20,
          color: COLORS.primary,
        }}
      />
      <Appbar.Action
        style={{
          borderRadius: 50,
          marginRight: 10,
        }}
        iconColor={COLORS.primary}
        icon="magnify"
        onPress={() => {
          setSearch(!search);
        }}
      />
    </Appbar.Header>}

      <FlatList
        data={chapterList}
        renderItem={({item}) => (
          <>
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('ChapterView', {item})}>
              <List.Item
                title={() => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'PdmsIslamicFont',
                          fontSize: 20,
                          color: COLORS.greylight,
                          fontWeight: 'bold',
                        }}>
                        {item.name_ar}
                      </Text>
                    </View>
                  );
                }}
                descriptionStyle={{
                  fontFamily: 'RobotoCondensed-Regular',
                  fontSize: 14,
                  color: COLORS.greylight,
                  alignContent: 'flex-start',
                }}
                description={item.name_pron_en}
                left={() => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        marginLeft: 10,
                      }}>
                      <ImageBackground
                        source={chapterNumber}
                        style={{
                          width: 50,
                          height: 50,
                          alignItems: 'center',
                          alignContent: 'center',
                          alignSelf: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: COLORS.white,
                            fontSize: 12,
                            fontFamily: 'RobotoCondensed-Bold',
                            textAlign: 'center',
                            marginTop: 2,
                          }}>
                          {item.id}
                        </Text>
                      </ImageBackground>
                    </View>
                  );
                }}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            </TouchableOpacity>
            <Divider
              style={{
                backgroundColor: COLORS.primary,
                marginHorizontal: 10,
              }}
            />
          </>
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => {
          return (
            <Carousel
              ref={carouselRef}
              data={DATA}
              loop={true}
              autoplay={true}
              autoplayInterval={2000}
              renderItem={({item, index}) => {
                return (
                  <Image
                    source={item}
                    style={{
                      width: width,
                      height: 250,
                      margin: 0,
                      alignSelf: 'center',
                      resizeMode: 'cover',
                    }}
                  />
                );
              }}
              contentContainerCustomStyle={{
                height: 250,
              }}
              containerCustomStyle={{
                borderRadius: 10,
              }}
              slideStyle={{
                borderRadius: 10,
              }}
              sliderWidth={width}
              itemWidth={width}
              layout={'default'}
              layoutCardOffset={18}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default ChapterList;
