import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import NavigationUtil from '../../navigation/NavigationUtil';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { TouchableHighlight } from 'react-native-gesture-handler';
import reactotron from '@app/debug/ReactotronConfig';

import R from '@R';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import AsyncStorage from '@react-native-community/async-storage';
import { requestLogin } from '@api'
export default class LoginScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        phoneNumber: "0968189970",
        password: "z5LOEO"
    }
    render() {
        
        return (
            <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={R.images.ic_logo}
                    style={styles.logo}
                />
            </View>

            <View style={styles.herder}>

                <View style={styles.herder_tk}>
                    <Text style={styles.inputTitle}>Số điện thoại</Text>
                    <TextInput
                        style={styles.text_herder}
                        onChangeText={(newText) => {
                        this.setState({
                            phoneNumber: newText
                            
                        })
             }}
             value={this.state.phoneNumber}
                    />
                </View>

                <View style={styles.herder_pass}>
                    <Text style={styles.inputTitle}>Mật khẩu</Text>
                    <TextInput style={styles.text_herder}
                        secureTextEntry={true}
                        onChangeText={(newText) => {
                    // reactotron.log(newText);
                    this.setState({
                        password: newText
                    })
                    
                }}
                value={this.state.password}
                    />
                </View>

                <TouchableOpacity 
                onPress={() => {
                    NavigationUtil.navigate(SCREEN_ROUTER.FORGOT_PASS)
                }}
                style={styles.forget}>
                    <Text style={styles.forget_pass}>
                        Quên mật khẩu ?
            </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                
                onPress={async () => {
                    try {
                        result = await requestLogin({
                            "phone": this.state.phoneNumber,
                            "password": this.state.password,
                            "device_id": ""
                        })
                        const token = result.data.token;
                        await AsyncStorage.setItem("token", token);
                        reactotron.log(result);
                        NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
                    } catch (error) {
                        alert(error.message)
                    }
                }}
                >
                    <View style={styles.button_background}>


                        <View style={styles.button_title}>

                            <Text style={styles.button_text} >Đăng Nhập</Text>

                            <View style={styles.button_next}>
                                <Image
                                    source={R.images.ic_path}
                                    style={styles.img_next}
                                />
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.footer}>
                <TouchableOpacity 
                onPress={() => {
                            NavigationUtil.navigate(SCREEN_ROUTER.REGISTER)

                        }}>
                    <Text>Bạn chưa có tài khoản?
                    

                        <Text style={styles.text_register} >Đăng kí</Text>
                       
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 313,
        height: 126,
        marginHorizontal: 50,
        marginTop: 50
    },
    herder: {
        width: 350,
        height: 130,
        marginTop: 50,
        marginHorizontal: 20,
        borderRadius: 18,
        backgroundColor: '#fff',
        shadowColor: '#D8D8D8',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    herder_tk: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
    },
    inputTitle: {
        color: '#A4A4A4',
        marginTop: 10,
        marginLeft: 10
    },
    text_herder: {
        marginTop: 15,
        marginLeft: 20
    },

    herder_pass: {
        height: 65,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    forget: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        width: 110,
        marginLeft: 240
    },
    forget_pass: {
        marginTop: 10,
        color: '#A4A4A4',
        textAlign: 'center',

    },
    button_background: {
        height: 70,
        marginTop: 100
    },
    button_title: {
        marginTop: 5,
        backgroundColor: '#69AAFF',
        height: 55,
        borderRadius: 30,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row'
    },
    button_text: {
        flex: 1,
        textAlign: 'center',
    },
    button_next: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img_next: {
        width: 10,
        height: 16,
    },
    footer: {
        marginTop: 10,
        alignItems: 'center'
    },
    text_register: {
        color: 'red'
    }
})


// GoogleSignin.configure();
//  GoogleSignin.configure({
//             scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//             webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
//             offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//             hostedDomain: '', // specifies a hosted domain restriction
//             loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//             forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
//             accountName: '', // [Android] specifies an account name on the device that should be used
//             // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//         });


// Somewhere in your code
    // _ggLogin = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         this.setState({ userInfo });
    //         console.log(userInfo)
    //         NavigationUtil.navigate("Main")

    //     } catch (error) {
    //         console.log(error)
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // user cancelled the login flow
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // operation (e.g. sign in) is in progress already
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // play services not available or outdated
    //         } else {
    //             // some other error happened
    //         }
    //     }
    // };

    // _fbLogin() {
    //     LoginManager.logInWithPermissions(["public_profile"]).then(
    //         function (result) {
    //             if (result.isCancelled) {
    //                 console.log("Login cancelled");
    //             } else {
    //                 AccessToken.getCurrentAccessToken().then(
    //                     (data) => {
    //                         console.log(data.accessToken.toString())
    //                         NavigationUtil.navigate("Main")
    //                     }
    //                 )
    //             }
    //         },
    //         function (error) {
    //             console.log("Login fail with error: " + error);
    //         }
    //     );
    // }