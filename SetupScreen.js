import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SetupScreen extends Component {
    static navigationOptions = {
        title: 'Setup',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Fill Setup screen</Text>
            </View>
        );
    }
}