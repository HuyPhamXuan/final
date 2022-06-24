import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import Ionicons  from 'react-native-vector-icons/Ionicons'
export default class BottomNavigator extends Component{
    constructor(props){
        super(props)
        this.state = {
            home:1,
            service: 0,
            notification:0,
            person:0
        }
    }
    onPressHome = () =>{
        this.setState({
            home: 1, service: 0, notification: 0, person: 0
        })
    }
    onPressService = () =>{
        this.setState({
            home: 0, service: 1, notification: 0, person: 0
        })
    }
    onPressNotification = () =>{
        this.setState({
            home: 0, service: 0, notification: 1, person: 0
        })
    }
    onPressPerson = () =>{
        this.setState({
            home: 0, service: 0, notification: 0, person: 1
        })
    }
    render(){
        return(
            <>
            <View style = { styles.box }>
            <TouchableOpacity 
                style={styles.home}
                onPress={()=>{
                    this.onPressHome()
                    this.props.navigation.navigate("Home")
                }}
                >
                <Ionicons 
                    name={this.state.home?"ios-home":"ios-home-outline" }
                    style={{ fontSize:35, color:"white", marginTop:3}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style = { styles.service}
                onPress={()=>{
                    this.onPressService()
                    this.props.navigation.navigate("ServiceContainer")

                }}
                >
                <Ionicons 
                    name={this.state.service?"md-grid":"md-grid-outline"}
                    style={{ fontSize:35, color:"white", marginTop:3}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style = { styles.service}
                onPress={()=>{
                    this.onPressNotification()
                    this.props.navigation.navigate("Notification")

                }}
                >
                <Ionicons 
                    name={this.state.notification?"notifications-sharp":"notifications-outline"}
                    style={{ fontSize:35, color:"white", marginTop:3}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={ styles.personal }
                onPress={()=>{
                    this.onPressPerson()
                    this.props.navigation.navigate("PersonContainer")

                }}
            >
                <Ionicons 
                    name={ this.state.person?"ios-person":"ios-person-outline" } 
                    style={{ fontSize:35, color:"white", marginTop:3}}
                />
            </TouchableOpacity>

            </View>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box:{
        height:55,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#FF4500",
    },
    home:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",      

    },
    service:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",      

    },
    notification:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",      

    },
    personal:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",      

    }
})