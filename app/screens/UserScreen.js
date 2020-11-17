import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Image,
    Alert,
    StyleSheet, ActivityIndicator
} from "react-native";
import { Avatar, Accessory } from "react-native-elements";
import UserOptions from "@component/CustomUser";
import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from '../navigation/NavigationUtil';
import R from "@R";
import reactotron from 'reactotron-react-native';
import { connect } from 'react-redux'
// import { getUserInfo, getProduct } from '@action'
import { requestUserInfo } from '@api';
// import Loading from '@component/Loading';
import { SCREEN_ROUTER } from '@app/constants/Constant';

const windowWidth = Dimensions.get("window").width; //414
const windowHeight = Dimensions.get("window").height; //896
class UserScreen extends Component {
    state = {

        isLoading: true,
        isError: true,
        data: '',
    }

    componentDidMount = async () => {
        try {
            const response = await requestUserInfo();
            const jsonResponse = response.data;
            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse,

            })

        } catch (error) {
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
                <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View>
                        <ActivityIndicator />
                    </View>
                </SafeAreaView>
            )

        }

        if (isError) {
            return (
                <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View>
                        <Text>có lôi</Text>
                    </View>
                </SafeAreaView>
            )

        }

        return (
            <SafeAreaView style={styles.Container}>
                <View style={{ flex: 1, backgroundColor: "#F5F6F8" }}>
                    <View style={styles.header} >
                        <View
                            style={styles.cutom_header}>
                            <Avatar
                                size={120}
                                titleStyle={{
                                    fontSize: 36,
                                    color: "#B8CB85",
                                    fontWeight: "bold"
                                }}
                                rounded
                                title="VN"
                                overlayContainerStyle={{
                                    backgroundColor: "#E2E6B7"
                                }}
                                activeOpacity={0.7} />
                        </View>
                        <View
                            style={styles.infomaiton}>
                            <Text
                                style={styles.info_fulname}>
                                {data.fullname}
                            </Text>
                            <Text
                                style={styles.info_phone}>
                                {data.phone}
                            </Text>
                            <TouchableOpacity
                                onPress={this.updateUser}
                                style={styles.info_edit}>
                                <Text>Chỉnh sửa</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{
                            backgroundColor: "white",
                            marginTop: windowHeight * 0.008
                        }} >
                        <UserOptions
                            label="Tin mua của bạn"
                            img={R.images.ic_recipe}
                            iconNext={R.images.ic_arrow}
                            isHozital={true}
                            action={this.believe}
                        />
                        <UserOptions
                            label="Thông tin cá nhân"
                            img={R.images.ic_I}
                            iconNext={R.images.ic_arrow}
                            isHozital={true}
                            action={this.info}

                        />
                        <UserOptions
                            label="Danh mục của tôi"
                            img={R.images.ic_list}
                            iconNext={R.images.ic_arrow}
                            isHozital={true}
                            action={this.danhmuc}

                        />
                        <UserOptions
                            label="Đổi mật khẩu"
                            iconNext={R.images.ic_arrow}
                            img={R.images.Ic_feather_lock}
                            isHozital={true}
                            action={this.changePass}

                        />
                        <UserOptions
                            label="Hướng dẫn sử dụng"
                            iconNext={R.images.ic_arrow}
                            img={R.images.Icon_home}
                            isHozital={true}
                        // onPress={_fnc_believe}

                        />
                        <UserOptions
                            label="Đăng xuất"
                            img={R.images.ic_log_out}
                            action={this._func_nav_logout} />
                    </View>
                </View>
            </SafeAreaView>
        );

    }


    _func_nav_logout = async () => {
        await AsyncStorage.setItem("token", "")
        NavigationUtil.navigate(SCREEN_ROUTER.LOGIN);
    };
    updateUser = () => {
        NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO)
    }

    believe = () => {
        NavigationUtil.navigate(SCREEN_ROUTER.TINMUA)
    }
    info = () => {
        // NavigationUtil.navigate(SCREEN_ROUTER.PERSONALINFO, { data: this.props.userState.data })
        NavigationUtil.navigate(SCREEN_ROUTER.PERSONALINFO)
    }

    changePass = () => {
        // NavigationUtil.navigate(SCREEN_ROUTER.PERSONALINFO, { data: this.props.userState.data })
        NavigationUtil.navigate(SCREEN_ROUTER.CHANGEPASS)
    }
    danhmuc = () => {
        // NavigationUtil.navigate(SCREEN_ROUTER.PERSONALINFO, { data: this.props.userState.data })
        NavigationUtil.navigate(SCREEN_ROUTER.DANHMUC)
    }
}






const styles = StyleSheet.create({
    Container: {
        flex: 1, backgroundColor: "#69AAFF"
    },
    header: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.0,
        elevation: 1
    },
    cutom_header: {
        marginLeft: windowWidth * 0.05,
        marginTop: windowHeight * 0.02,
        marginBottom: windowHeight * 0.025
    },
    infomaiton: {
        flexDirection: "column",
        marginLeft: "5%",
        marginTop: "8%"
    },
    info_fulname: {
        fontSize: 21,
        fontWeight: "bold",
        marginBottom: "5%"
    },
    info_phone: {
        fontSize: 15,
        color: "#515C6F",
        marginBottom: "10%"
    },
    info_edit: {
        width: windowWidth * 0.3,
        height: windowHeight * 0.033,
        borderWidth: 1,
        borderColor: "#727C8E",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,
        opacity: 0.6,
    }

})


export default (UserScreen);