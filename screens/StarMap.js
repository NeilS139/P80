import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import { WebView } from 'react-native-webview'

const path = "https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
const {longitude, latitude} = this.state;

export default class StarMap extends Component {
    constructor() {
        super();
        this.state={
            longitude: {},
            latitude: {}
        }
    }

    render() {
        return(
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>StarMap Screen</Text>
                <WebView
                    scalePagesToFit={true}
                    source={{uri: path}}
                    style = {{marginTop: 20, marginBottom: 20}}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder='Enter your latitude'
                    placeholderTextColor="#ffff#000000"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude: text
                        })
                    }}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder='Enter your longitude'
                    placeholderTextColor="#ffff#000000"
                    onChangeText={(text)=>{
                        this.setState({
                            longitude: text
                        })
                    }}
                />
            </View>
        )
    }
}