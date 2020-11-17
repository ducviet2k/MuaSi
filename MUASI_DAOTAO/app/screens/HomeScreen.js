

import React, { Component, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator, FlatList, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { requestHomeData } from '@api'
import reactotron from 'reactotron-react-native';
import Loading from '@component/Loading'
import { SCREEN_ROUTER } from '@constant'
import R from '@R'
import CustomHome from '@component/CustomHome'
import DropDownPicker from 'react-native-dropdown-picker';
import api from '@api'
export default class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: {},
    province: 'Ha Noi',
    // province_id: ''

  }


  componentDidMount = async () => {
    try {
      const response = await requestHomeData()
      // response.log("API",response)
      const jsonResponse = response.data
      //response.log("API", jsonResponse)

      this.setState({
        isLoading: false,
        isError: false,
        data: jsonResponse
      }, () => {
        //reactotron.log("API", jsonResponse)
      })
    } catch (error) {
      reactotron.log(error)
      this.setState({
        isLoading: false,
        isError: true,
        data: {}
      })
    }
  }



  render() {


    const { isLoading, isError, data } = this.state
    if (isLoading) {
      return (
        <Loading />
      )
    }



    return (
      <SafeAreaView
        style={styles.container} >
        <View style={styles.list_post}>
          <FlatList style={styles.list_post}
            data={this.state.data.listpost}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.body}>
                  <CustomHome
                    Namekey={item.namekey}
                    Username={item.username}
                    img={R.images.ic_location}
                    Province={item.province}
                    Phone={item.phone}
                    ImgTime={R.images.ic_time}
                    Modified_date={item.modified_date}
                  />
                </View>
              );
            }}
            ListHeaderComponent={() => {

              return (

                <View >
                  <ImageBackground source={R.images.ic_backgroup_nav} style={styles.img_herder} >
                    <Text style={styles.text_herder}>Tôi muốn mua sỉ</Text>
                    <View style={styles.input}>
                      <View style={styles.input_nav}>
                        <TextInput
                          style={styles.text_input}
                          placeholder="Danh mục sản phẩm">

                        </TextInput>
                      </View>
                      <DropDownPicker

                        items={[

                          // { province_id }
                          { label: 'Hanoi', value: 'Ha Noi' },
                          { label: 'HCM', value: 'TP Ho Chi Minh' },
                          { label: 'DANANG', value: 'Da Nang' },
                          { label: 'LANGSON', value: 'Lang Son' },
                          { label: 'HUNGYEN', value: 'Hung Yen' },

                        ]}
                        defaultValue={this.state.province}
                        containerStyle={{ height: 40, width: 91 }}
                        style={styles.boder}
                        itemStyle={{
                          justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={item => this.setState({
                          province: item.value
                        })}
                      />
                      {/* <View style={styles.input_aside}>

                        <View>
                          <Text style={styles.text_aside}> Toàn quốc</Text>
                        </View>
                        <View style={styles.img_aside_all}>
                          <Image
                            style={styles.img_aside}
                            source={R.images.ic_dow}
                          />
                        </View>
                      </View> */}
                    </View>
                    <View style={styles.suggestions}>
                      <Text style={{ color: '#fff' }} >Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục sản phẩm! </Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.USER);
                      }}>
                      <View style={styles.post}>
                        <View style={styles.btn_post}>
                          <Text style={{ color: '#fff', fontSize: 19, fontWeight: '500' }}>Đăng tin</Text>
                        </View>
                      </View>

                    </TouchableOpacity>
                  </ImageBackground>
                  <View style={{ backgroundColor: 'F2F2F2', height: 50, justifyContent: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', marginLeft: 15 }}> Từ khoá tìm kiếm</Text>
                  </View>

                  <View style={{ height: 250, backgroundColor: '#fff', flex: 1 }}>
                    <View style={styles.search}>
                      {this.state.data.listhotkey.map((item, index) => {
                        return (
                          <Text style={{
                            marginTop: 5,
                            padding: 5,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin: 2,
                            borderRadius: 15
                          }}
                            key={item.name}>{item.name}</Text>
                        );
                      })}

                    </View>
                  </View>


                  <View style={styles.title}>
                    <Text style={styles.text_title}>Danh mục sản phảm cần mua </Text>
                    <Text style={styles.text_title_2}>Tất cả </Text>
                  </View>

                </View>
              );

            }}
          />
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    height: 200,
    marginTop: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  list_post: {
    flex: 1,

  },
  img_herder: {
    height: 200,
    width: '100%'
  },

  text_herder: {
    marginTop: 15,
    marginLeft: 13,
    color: '#fff',
    fontSize: 20
  },
  input: {
    height: 40,
    flexDirection: 'row',
    marginTop: 10,
  },
  input_nav: {
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 40,
    flex: 1,

  },
  text_input: {
    marginTop: 10,
    marginLeft: 5
  },
  input_aside: {
    backgroundColor: '#fff',
    marginRight: 5,
    height: 40,
    width: 100,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_aside: {


  },
  img_aside_all: {
    height: 20,
    width: 20,
    marginLeft: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_aside: {
    height: 8,
    width: 13,
  },
  suggestions: {
    marginTop: 10,
    marginHorizontal: 15,
    fontSize: 13,
  },
  post: {
    marginTop: 14,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_post: {
    backgroundColor: '#69AAFF',
    height: 45,
    width: 130,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    height: 40,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_title: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 8
  },
  text_title_2: {
    fontSize: 18,
    color: '#2ECCFA',
  },


  body: {
    marginTop: 10,
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'column'

  },
  body_2: {
    height: 30,
    backgroundColor: '#64FE2E'
  },

  text_body: {
    fontSize: 18
  },
  body_3: {
    height: 70,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boder_img: {
    width: 60,
    height: 60,
    backgroundColor: '#81DAF5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  information: {
    height: 60,
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5
  },
  top: {
    flexDirection: 'row',

  },
  Top_information: {
    backgroundColor: '#D8D8D8',
    height: 30,
    flex: 1


  },
  left: {
    flexDirection: 'row',
  },
  Bottom_information: {
    height: 30,
    backgroundColor: 'yellow',
    flex: 1
  },
  // left_information: {
  //     height: 60,
  //     width: 180,
  //     backgroundColor: 'blue',
  //     flexDirection: 'column'
  // },
  left_top: {
    height: 30,
    width: 100,
    backgroundColor: '#DF01D7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  left_bottom: {
    height: 30,
    width: 180,
    backgroundColor: '#81F7F3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img_location: {
    height: 20,
    width: 20
  },
  img_time: {
    height: 16,
    width: 16,
    marginRight: 5
  },
  boder: {
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,

  }
})