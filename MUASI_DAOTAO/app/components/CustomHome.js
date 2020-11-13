import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    Text,
    Picker,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import R from '@R'
export default class CustomHome extends Component {



    render() {

        const { Namekey, Username, img, Province, Phone, ImgTime, Modified_date } = this.props;
        return (
            <View>
                <View style={styles.body_2}>
                    <Text style={styles.text_body}>{Namekey}</Text>
                </View>
                <View style={styles.body_3}>
                    <View style={styles.boder_img}>
                        <Text>
                            MC
                        </Text>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.top}>
                            <View style={styles.Top_information}>

                                <Text style={styles.text_Information}>{Username}</Text>
                            </View>
                            <View style={styles.left_top} >
                                <View>
                                    <Image
                                        source={img}
                                        style={styles.img_location}
                                    />
                                </View>
                                <View style={styles.left}>
                                    <View>
                                        <Text style={styles.left_Province}>{Province}</Text>
                                    </View>

                                </View>
                            </View>

                        </View>
                        <View style={styles.left}>
                            <View style={styles.Bottom_information}>
                                <Text style={styles.text_Phone}>{Phone}</Text>
                            </View>
                            <View style={styles.left_bottom} >
                                <View>
                                    <Image
                                        source={ImgTime}
                                        style={styles.img_time}
                                    />
                                </View>
                                <View style={styles.left}>
                                    <View>
                                        <Text style={styles.left_Modified_date}>{Modified_date}</Text>
                                    </View>

                                </View>
                            </View>
                        </View>

                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        marginTop: 10,
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'column'

    },
    body_2: {
        height: 30,
        // backgroundColor: '#64FE2E'
    },

    text_body: {
        fontSize: 18,
        marginHorizontal: 8
    },
    body_3: {
        height: 70,
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boder_img: {
        marginLeft: 8,
        width: 50,
        height: 50,
        backgroundColor: '#81DAF5',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    information: {
        height: 60,
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5
    },
    text_Information: {
        marginTop: 5
    },
    text_Phone: {
        marginTop: 8
    },
    top: {
        flexDirection: 'row',

    },
    Top_information: {

        // backgroundColor: '#D8D8D8',
        height: 30,
        flex: 1,


    },
    left: {

        flexDirection: 'row',

    },
    Bottom_information: {
        height: 30,
        // backgroundColor: 'yellow',
        flex: 1,

    },

    left_top: {
        height: 30,
        width: 100,
        // backgroundColor: '#DF01D7',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },
    left_bottom: {
        height: 30,
        width: 180,
        // backgroundColor: '#81F7F3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_location: {
        height: 13,
        width: 13
    },
    img_time: {
        height: 18,
        width: 18,
        marginRight: 5
    },
    left_Province: {
        marginRight: 10,
        marginLeft: 5
    },
    left_Modified_date: {
        marginRight: 5,
    }
})