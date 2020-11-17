import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import CustomtabBar from '@component/CustomTabBar';
import R from '@R';
import NavigationUtil from '../../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import { requestChangePass } from '@api'


export default class ChangePassScreen extends Component {
    state = {
        oldPass: '',
        newPass: '',
        confirmPass: ''
    }
    acback = () => {
        NavigationUtil.goBack()
    }
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <CustomtabBar
                    img={R.images.ic_backk}
                    actionback={this.acback}
                    label="Đổi Mật Khẩu"
                />

                <View style={styles.information}>
                    <View style={styles.info_name}>
                        <Text style={styles.txt_label}>Mật khẩu cũ (*)</Text>
                        <CustomInput
                            onChangeText={newText => {
                                this.setState({
                                    oldPass: newText
                                });
                            }}
                        />

                    </View>


                    <View style={styles.info_name}>
                        <Text style={styles.txt_label}>Mật khẩu mới (*)</Text>
                        <TextInput
                            style={styles.text_input}
                            onChangeText={newText => {
                                this.setState({
                                    newPass: newText
                                });
                            }}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.info_name}>
                        <Text style={styles.txt_label}>Xác Nhận Mật Khẩu (*)</Text>
                        <TextInput
                            style={styles.text_input}
                            onChangeText={newText => {
                                this.setState({
                                    confirmPass: newText
                                });
                            }}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.info_update}>
                        <TouchableOpacity style={styles.up_click}
                            onPress={async () => {
                                const { oldPass, newPass } = this.state
                                try {
                                    result = await requestChangePass({

                                    });

                                } catch (err) {

                                }

                            }}>
                            <Text
                                style={{
                                    color: '#ffff',
                                    fontSize: 13,
                                    fontFamily: R.fonts.roboto_bold
                                }}>CẬP NHẬT</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}


class CustomInput extends Component {
    render() {
        const { onChangeText, value } = this.props

        return (
            <TextInput
                style={styles.text_input}
                onChangeText={() => {
                    onChangeText();
                }}
                value={value} />


        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,

    },
    information: {
        flex: 1,

        paddingHorizontal: 8,
        paddingVertical: 10,
    },

    info_name: {
        flex: 1,
        paddingTop: 10,


    },
    choose_city: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#F5F6F8',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',

    },
    info_update: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    up_click: {
        width: 279,
        height: 42,
        backgroundColor: '#69AAFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
    },
    txt_label: {
        flex: 0.5,

    },
    text_input: {
        flex: 0.5,
        backgroundColor: '#F5F6F8',
        paddingLeft: 15,
        paddingVertical: 14,
        fontSize: 14,
        color: '#000000',
        borderRadius: 5,
        fontFamily: R.fonts.roboto_medium
    },

    modalView: {
        width: '100%',
        height: 300,
        marginTop: 600,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
