import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native'
import CustomTabBar from '@component/CustomTabBar';
import R from '@R'
import NavigationUtil from '../../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import CustomItemHome from '@component/CustomItemHome';
import { FlatList } from 'react-native';
import { requestTinMua } from '@api';

export default class TinmuaScreen extends Component {
    state = {
        data: ''
    }
    componentDidMount = async () => {
        try {
            const response = await requestTinMua();
            const jsonResponse = response.data;
            // alert(JSON.stringify(jsonResponse))
            this.setState({
                data: jsonResponse
            })
        } catch (error) {

        }
    }

    render() {
        return (
            <SafeAreaView>
                <CustomTabBar
                    img={R.images.ic_backk}
                    label="Tin Mua Của Bạn"
                    imgMessage={R.images.Ic_add}
                    action={this.addtin}
                />
                <Text>{JSON.stringify(this.state.data)}</Text>
                <FlatList
                    // data={}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomItemHome item={item} index={index} />
                        )
                    }}

                />
                <CustomItemHome
                    namekey="agsajdada"
                    username="dat"
                    phone="0813187312"
                    address="dahha"
                    created_date="02/1/2010"
                />
            </SafeAreaView>
        )
    }
    addtin = () => {
        NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO)
    }
}

const styles = StyleSheet.create({})
