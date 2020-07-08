import React, { Component } from 'react'
import { View, Text, SafeAreaView, Fragment } from 'react-native'

class Home extends Component {
    render() {
        return (
                <View>
                    
                    <SafeAreaView style={{ flex:0, height:"60%", backgroundColor: '#2E4052' }} />
                    {/* <SafeAreaView style={{ flex:1, backgroundColor: '#2E4052' }}> */}
                        {/* <View style={{ flex: 1, backgroundColor: '#2E4052'  }} > */}
                        <Text>Home!</Text>
                        {/* </View> */}
                    {/* </SafeAreaView> */}
                </View>
        )
    }
}

export default Home;