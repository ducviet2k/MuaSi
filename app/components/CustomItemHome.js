import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,

} from 'react-native';
import { requestHomeData } from '@api'
import reactotron from 'reactotron-react-native';
// import Loading from '@component/Loading'
import { SCREEN_ROUTER } from '@constant'
import { getHome } from '@action'
import { connect } from 'react-redux'
import R from '@R'

export default class CustomItemHome extends Component {
    render() {
        const { namekey, username, phone, address, created_date } = this.props
        return (

            <View style={styles.list_item} >
                <View style={styles.item_name}>
                    <Text style={{ fontSize: 20, }}>
                        {namekey}
                    </Text>

                </View>

                <View style={styles.item_information}>

                    <View style={styles.item_inforname}>
                        <Text>VN</Text>
                    </View>

                    <View style={styles.item_infoplan}>
                        <View style={styles.item_infoplanName}>
                            <Text >{username}</Text>
                        </View>

                        <View style={styles.item_infoplanPhone}>
                            <Text >{phone}</Text>
                        </View>
                    </View>

                    <View style={styles.item_infoaddress}>
                        <View style={styles.item_infolocation}>
                            <Image
                                source={R.images.ic_location}
                                style={{ marginRight: 3, }} />
                            <Text style={styles.item_infoaddressName}>{address}</Text>
                        </View>

                        <View style={styles.item_infodate}>
                            <Image
                                source={R.images.ic_clock}
                                style={{ marginRight: 5, }} />
                            <Text numberOfLines={1}>{created_date}</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    list_item: {
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10,
    },
    item_name: {

        width: '100%',
        height: 30,
        paddingLeft: 10,


    },
    item_information: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    item_inforname: {
        flex: 0.8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    item_infoplan: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: 10

    },

    item_infoplanName: {
        flex: 1,
        justifyContent: 'center',
    },
    item_infoplanPhone: {
        flex: 1,
        justifyContent: 'center',
    },
    item_infoaddress: {
        flex: 2,
        // backgroundColor: 'red',
        marginRight: 20,
        flexDirection: 'column',
        paddingLeft: 20,

    },
    item_infolocation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    item_infodate: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',

    }
})
