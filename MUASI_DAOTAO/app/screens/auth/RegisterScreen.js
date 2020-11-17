import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import R from '@R';
import NavigationUtil from '../../navigation/NavigationUtil';
import { requestRegister } from '@api'
import reactotron from '@app/debug/ReactotronConfig';
import DropDownPicker from 'react-native-dropdown-picker';
class LoginScreen extends Component {
    state = {
        isLoading: false,
        error: null,
        data: {},
        phoneNumber: "",
        password: "",
        device_id: "",
        // province: 'Ha Noi'
        // email: "",
        // fullname: "",
        // province_id: ""
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Image
                        style={styles.logo}
                        source={R.images.ic_logo} />
                </View>
                <View style={styles.herder} >
                    {/* phone */}
                    <View style={styles.Input_phone}>
                        <Text style={styles.inputTitle}>Nhập số điện thoại</Text>
                        <TextInput style={styles.Text_input}
                            onChangeText={(newText) => {
                                this.setState({
                                    phoneNumber: newText

                                })
                            }}>

                        </TextInput>
                    </View>
                    {/* email */}
                    <View style={styles.Input_email}>
                        <View style={styles.Input_email_name_address_pass}>
                            <Text style={styles.inputTitle}>Email</Text>
                            <TextInput style={styles.Text_input}
                                onChangeText={(newText) => {
                                    // email: newText
                                    reactotron.log(newText)
                                }}>

                            </TextInput>
                        </View>
                        {/* ho ten */}
                        <View style={styles.Input_email_name_address_pass}>
                            <Text style={styles.inputTitle}>Họ và tên</Text>
                            <TextInput style={styles.Text_input}
                                onChangeText={(newText) => {
                                    // fullname: newText
                                    reactotron.log(newText)
                                }}>

                            </TextInput>
                        </View>
                        {/* Tinh Thanh */}
                        <View style={styles.Province}>
                            <View style={styles.Input_province}>
                                <Text style={styles.inputTitle}>Tỉnh/Thành phố</Text>
                                <TextInput style={styles.Text_input}
                                    onChangeText={(newText) => {
                                        // province_id: newText
                                    }}>

                                </TextInput>

                            </View>


                        </View>
                        {/* Mk */}
                        <View style={styles.Input_email_name_address_pass}>
                            <Text style={styles.inputTitle}>Mật khẩu</Text>
                            <TextInput style={styles.Text_input}
                                onChangeText={(newText) => {
                                    this.setState({
                                        password: newText
                                    })
                                    reactotron.log(newText)
                                }}>

                            </TextInput>
                        </View>
                        {/* nhap lai mk */}
                        <View style={styles.Input_retype_pass}>
                            <Text style={styles.inputTitle}>Quên mật khẩu</Text>
                            <TextInput style={styles.Text_input}
                                onChangeText={(newText) => {
                                    this.setState({
                                        password: newText

                                    })
                                }}>

                            </TextInput>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            result = await requestRegister({
                                "phone": this.state.phoneNumber,
                                "password": this.state.password,
                                "device_id": ""
                            })
                            // reactotron.log(result);
                            // alert(JSON.stringify(result))
                            NavigationUtil.navigate(goBack)
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

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5F6F8',
    },
    logo: {
        marginTop: 52,
        height: 72,
        width: 177
    },
    Input_phone: {
        marginTop: 18,
        height: 50,
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: '#fff',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
    },
    inputTitle: {
        color: '#A4A4A4',
        marginTop: 4,
        marginLeft: 15
    },
    text_phone: {
        marginTop: 15,
        marginLeft: 20
    },
    herder: {
        width: 350,
        height: 340,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 18,
        backgroundColor: '#fff',
        shadowColor: '#D8D8D8',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
    },
    Province: {
        flexDirection: 'row',

    },
    Input_email_name_address_pass: {
        height: 59,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        backgroundColor: '#fff',


    },
    Input_province: {
        height: 59,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flex: 1,
    },
    Input_retype_pass: {
        marginTop: 18,
        height: 50,
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderColor: '#fff',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
    },
    Text_input: {
        marginLeft: 20
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
    Text_btn: {
        flex: 1,
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
    Image_next: {
        height: 11.52,
        width: 11.52
    },


})

{/* <DropDownPicker

items={[
    { label: 'Hanoi', value: 'Ha Noi' },
    { label: 'HCM', value: 'TP Ho Chi Minh' },
    { label: 'DANANG', value: 'Da Nang' },
]}
defaultValue={this.state.province}
containerStyle={{ height: 40, }}
style={{ backgroundColor: '#fafafa' }}
itemStyle={{
    justifyContent: 'flex-start'
}}
dropDownStyle={{ backgroundColor: '#fafafa' }}
onChangeItem={item => this.setState({
    province: item.value
})}
/> */}