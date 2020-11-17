
import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import R from "@R";
export default class UserOptions extends Component {
    render() {
        const { img, label, logout, action, iconNext, isHozital } = this.props;
        return (
            <View style={styles.Container}>
                <TouchableOpacity style={styles.item} onPress={() => {
                    action()
                }}>
                    <Image
                        source={img}
                        style={{
                            width: windowWidth * 0.04,
                            height: windowHeight * 0.017,
                            resizeMode: "contain",
                            width: 20,
                            height: 20
                        }}
                    />


                    <View style={styles.options}>
                        <Text
                            style={{
                                fontSize: 15,
                                //   paddingRight: '55%',
                                justifyContent: "space-between",
                                color: "#727C8E"
                            }}
                        >
                            {label}
                        </Text>
                        <Image
                            source={iconNext}
                            style={{
                                width: windowWidth * 0.043,
                                height: windowHeight * 0.02
                            }}
                        />


                    </View>

                </TouchableOpacity>

                {isHozital ? <View style={{
                    width: '100%',
                    height: windowHeight * 0.001,
                    opacity: 0.2,
                    backgroundColor: '#727C8E',
                    marginLeft: windowWidth * 0.1

                }}></View> : null}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
        marginLeft: windowWidth * 0.05,
        marginTop: "3%",
        paddingBottom: "4%"
    },
    item: {
        flexDirection: "row",

        paddingBottom: "4%"
    },
    options: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: "5%",
        justifyContent: "space-between"
    }
});

