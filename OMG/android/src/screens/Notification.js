import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import BoxList  from '../components/BoxList'
import Header from '../components/Header'
import { postData, getData } from '../connect'
import { connect } from 'react-redux'
const arr = [1,2,3,4,5,6,7,8,9,10,11]
export default class Notification extends Component{
    constructor(props){
        super(props)
        this.state = {
            notification :[],
            number: 7
        }
    }
    componentDidMount(){
        getData("https://backendcnpmem.herokuapp.com/api/ThongBao").then((res) =>{
            this.setState({
                notification:res
            })
        })
    }
    render(){
        return(
            <>
            <Header
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Thông báo</Text>}
            >

            </Header>
            <View style = {{flex:1, backgroundColor:"#D3D3D3"}}>
                <ScrollView>
                    {
                        this.state.notification.map((value, idx)=>{
                            if ( idx % 2 === 0 ) {
                                return(
                                    <BoxList color = "white" data = {value}></BoxList>
                                )
                            } else {
                                return(
                                    <BoxList color = "#FFEBCD" data = {value}></BoxList>
                                ) 
                            }

                        })
                    }
                </ScrollView>
            </View>
            </>
        )
    }
}