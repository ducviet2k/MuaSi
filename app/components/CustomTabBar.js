import React, { Component } from 'react'
import R from '@R';
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';

import {
    Text, StyleSheet,
    View,
    TouchableOpacity,
    Image,

} from 'react-native'
export default class CustomTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { img, label, action, actionback, imgMessage, isNotifi } = this.props;
        return (
            <View style={styles.tabbar}>
                <TouchableOpacity
                    onPress={() => {
                        actionback();
                    }}
                >
                    <Image
                        style={styles.ic_tabbar}
                        source={img}
                    />
                </TouchableOpacity>

                <Text style={styles.txt_tabbar}>{label} </Text>

                <TouchableOpacity
                    onPress={() => {
                        action();
                    }}
                >
                    <Image
                        style={styles.ic_tabbar_mess}
                        source={imgMessage} />

                    {isNotifi ? <View style={styles.notifi} ><Text style={styles.txt_notifi}>5</Text></View> : null}
                </TouchableOpacity>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    tabbar: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#69AAFF',
        paddingLeft: 15,

    },
    ic_tabbar: {
        width: 8,
        height: 15,
        marginRight: 5,
    },

    txt_tabbar: {
        flex: 1,
        fontSize: 20,
        color: '#ffff'
    },
    ic_tabbar_mess: {
        width: 16,
        height: 16,
        marginRight: 24
    },

    notifi: {
        position: 'absolute',
        top: 6,
        left: -10,
        width: 17,
        height: 15,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },

    txt_notifi: {
        color: 'white',
        fontSize: 12,
        fontFamily: R.fonts.roboto_bold
    }


})
