import React, { Component } from 'react';
import {View,TextInput,Text,Button,StyleSheet} from 'react-native'
class Home extends Component {


    render() {
        return (
            <View>
                <Text>Selamat datang {this.props.username}</Text>
            </View>
        );
    }
}

export default Home;