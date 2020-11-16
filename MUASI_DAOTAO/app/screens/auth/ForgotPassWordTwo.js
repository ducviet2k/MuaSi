import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import R from '@R';
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '@app/constants/Constant'

export default class ForgotPassWordTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                {/* Thong Bao */}
                <View>

                    <View style={styles.Body}>
                        <View style={styles.Text_body}>
                            <Text style={styles.Text_pass}>
                                Mật khẩu đã được gửi tới email của bạn.
                            </Text>
                            <Text style={styles.Text_check}>
                                Vui lòng kiểm tra lại
                            </Text>
                        </View>
                    </View>

                </View>

                <TouchableOpacity
                    onPress={async () => {

                        NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)

                    }}

                    style={styles.btn_confirm}>
                    <View style={styles.Text_btn}>
                        <Text>Quay lại đăng nhập</Text>
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
        backgroundColor: '#F5F6F8',
        alignItems: 'center'
    },
    Image_logo: {
        height: 120,
        width: 297,
        marginTop: 100

    },
    Body: {
        height: 107,
        width: 342,
        marginTop: 50,
        backgroundColor: '#fff',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text_body: {
        height: 84,
        width: 311,
        backgroundColor: '#fff',
    },
    Text_pass: {
        fontSize: 18,
    },
    Text_check: {
        fontSize: 18,
        marginTop: 10
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
    Image_next: {
        height: 11.52,
        width: 11.52
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

})
