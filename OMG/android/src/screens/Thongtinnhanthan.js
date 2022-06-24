import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get("window")
class NguoiThan extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <TouchableOpacity style ={styles.box_nguoithan}
                onPress = {()=>{
                    this.props.navigation.navigate("Hosothannhan", {data: this.props.data})
                }}
            >
                <View style ={ styles.box_img }>
                    <Image  source={require("../image/1.jpg")} style ={styles.img}/>
                </View>
                <View style = { styles.box_text }>
                    <Text style ={{fontSize:18}}>{this.props.data.name}</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}

class ThongTinThanNhan extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let arr = []
        this.props.than_nhan.map((value) =>{
            let date = value.date.split("T")
            let p  = value
            p.date = date[0]
            if (this.props.thong_tin_ca_nhan.numberHousehold == p.numberHousehold){
                console.log("numberho:",)
                arr.push(p)
            }
            
        })
        this.setState({
            data: arr
        })
        console.log("than nhan:", this.props.than_nhan)
    }
    render(){
        return(
            <>
            <Header
                left = {
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.goBack()}}
                >
                    <Ionicons name ="chevron-back-outline" size={35} color = {"white"}/>
                </TouchableOpacity>
               }
               center = {<Text style ={{fontSize: 20, color :"white"}}>Thân nhân</Text>}
            >               
            </Header>
            <ScrollView style ={{marginTop: 15}}>
               {
                   this.props.than_nhan.map((value, idx)=>{
                       return (
                        <>
                        <NguoiThan key={idx} data = {value} navigation = {this.props.navigation}/>
                        <View key={idx + 99} style = {{ marginBottom:13}}></View>
                        </>
                       )
                   })
               }
            </ScrollView>
            </>
        )
    }
}
function mapStatetoProps(state){
    return {
        than_nhan: state.than_nhan,
        thong_tin_ca_nhan: state.thong_tin_ca_nhan,
    };
}
export default connect(mapStatetoProps)(ThongTinThanNhan);
var styles = StyleSheet.create({
    box_nguoithan:{
        flexDirection:"row",
        height: 75,
        width: width - 40,
        marginLeft: 20,
        backgroundColor: "white",
        borderRadius:3,
        elevation:10
    },
    img:{
        height: 60,
        width: 60,
    },
    box_img:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box_text:{
        flex: 4,
        justifyContent:"center",
        marginLeft: 10
    }
})
