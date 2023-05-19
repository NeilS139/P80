import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Platform,
    StatusBar,
    SafeAreaView,
    Linking,
    ScrollView,
} from 'react-native'
import axios from 'axios'

export default class DailyPic extends Component {
    constructor(){
        super()
        this.state = {
            apod: []
        }
    }
    getDailyPic=()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=nCN3cQoMzjcR15abVNp55kDFfEHtewpQK5WjTwCD")
        .then(response=>{
            this.setState({apod: response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    componentDidMount(){
        this.getDailyPic();
    }
    renderImage = (url) => {
        <Image
          source={{ uri: url }}
          style={{
            width: '100%',
            height: 300,
            borderRadius: 20,
            margin: 3,
          }}></Image>;
      };
    
    renderVideo = () => {
        <TouchableOpacity
          style={styles.listContainer}
          onPress={() =>
            Linking.openURL(this.state.apod.url).catch((err) =>
              console.error("Couldn't load page", err)
            )
          }>
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/play-video.png')}
              style={{ width: 50, height: 50 }}></Image>
          </View>
        </TouchableOpacity>;
    };

    render() {
        if(Object.keys(this.state.apod).length==0){
            return(
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        Loading
                    </Text>
                </View>
            )

        } else{
            return(
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <SafeAreaView style = {styles.droidSafeArea}/>
                    <ImageBackground source={require('../assets/stars.gif')} style = {styles.backgroundImage}>
                            <Text style = {styles.routeText}>Astronomy Picture of the Day</Text>
                            <ScrollView style={styles.listContainer}>
                            <TouchableOpacity onPress={()=> Linking.openURL(this.state.apod.url).catch(err=>console.error("Couldn't load page", err))}>
                                <View>
                                    <Image source = {require("../assets/play-video.png")} style = {{width: 50, height: 50}}/>
                                </View>
                            </TouchableOpacity>
                            <Text style = {styles.titleText}>{this.state.apod.title}</Text>
                            <Text style = {styles.explanationText}>{this.state.apod.explanation}</Text>
                            </ScrollView>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    explanationText: { 
        fontSize: 15, 
        fontWeight: "bold", 
        color: "white", 
        marginTop: 10, 
        margin: 10, 
        textAlign: 'center' 
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.2,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: 20,
        top: -20
    },
    mainImage: {
        position: "absolute",
        height: 125,
        width: 100,
        resizeMode: "contain",
        right: 20,
        top: -20
    },
});
