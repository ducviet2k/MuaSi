import React, { Component, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import reactotron from "reactotron-react-native";

const NotificationScreen = ({ nofState }) => {
  reactotron.log(nofState);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dddddd"
      }}
    />
  );
};

const mapStateToProps = state => ({
  nofState: state.userReducer
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationScreen);
