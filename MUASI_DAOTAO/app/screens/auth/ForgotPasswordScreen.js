import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import R from '@R';
import reactotron from '@app/debug/ReactotronConfig';
import { requestForgetPass } from '@api';
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '@app/constants/Constant'
export default class ForgotPassword extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        validated: false,
        email: ""
    };

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email sai kí tự");
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            console.log("Email đúng");
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Image
                        style={styles.Image_logo}
                        source={R.images.ic_logo}
                    />
                </View>

                <View style={styles.Input_ForgotPassword}>
                    <Text style={styles.inputTitle}
                    >Email</Text>
                    <TextInput style={styles.Text_Email}
                        value={this.setState.email}
                        onChangeText={(newText) => this.validate(newText)}>
                    </TextInput>

                </View>

                <TouchableOpacity
                    onPress={async () => {
                        try {
                            result = await requestForgetPass({
                                "email": this.state.email
                            })
                            NavigationUtil.navigate(SCREEN_ROUTER.RECOVER)
                        } catch (error) {
                            alert(error.message)
                        }

                    }}

                    style={styles.btn_confirm}>
                    <View style={styles.Text_btn}>
                        <Text>Xác nhận</Text>
                    </View>
                    <View style={styles.Backgroup_next}>
                        <Image
                            source={R.images.ic_next}
                            style={styles.Image_next}
                        />
                    </View>

                </TouchableOpacity>



            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    Image_logo: {
        height: 120,
        width: 297,
        marginTop: 100,
        marginHorizontal: 39
    },
    Input_ForgotPassword: {
        height: 59,
        width: 325,
        marginTop: 160,
        marginHorizontal: 25,
        borderRadius: 18,
        backgroundColor: '#fff',
        shadowColor: '#D8D8D8',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    btn_confirm: {
        height: 46,
        width: 330,
        flexDirection: 'row',
        backgroundColor: '#69AAFF',
        marginTop: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'

    },
    Backgroup_next: {
        height: 29.62,
        width: 28.8,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    Text_btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image_next: {
        height: 11.52,
        width: 11.52
    },

    inputTitle: {
        color: '#A4A4A4',
        marginTop: 10,
        marginLeft: 15
    },
    Text_Email: {
        marginLeft: 15,

    },
    error: {
        borderWidth: 3,
        borderColor: 'red'
    }

})