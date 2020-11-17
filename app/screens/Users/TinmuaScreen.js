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
            this.setState({
                data: jsonResponse.data
            })
            alert(JSON.stringify(data))

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
                    actionback={this.addtin}
                />
                {/* <Text>{JSON.stringify(this.state.data)}</Text> */}
                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomItemHome item={item} index={index} />
                        )
                    }}

                />

            </SafeAreaView>
        )
    }
    addtin = () => {
        NavigationUtil.goBack()
    }
}

const styles = StyleSheet.create({})
