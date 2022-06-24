import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { color } from 'native-base/lib/typescript/theme/styled-system'
const { width, height } = Dimensions.get("window")
export default class CapNhatThongTin extends Component{
    render(){
        return(
            <>
            <Header
                left = {
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.goBack()}}
                >
                    <Ionicons name ="chevron-back-outline" size={35} color = "white"/>
                </TouchableOpacity>
               }
               center = { <Text style = {{ fontSize: 20, color:"white"}}>Chỉnh sửa thông tin</Text>}
            >               
            </Header>
            <ScrollView>
               <View style = { styles.box1 }>
                    <View style = { styles.sub_box1_1 }>
                        <Text style = {{ fontSize:40, }}>HỒ SƠ</Text>
                        <Text style = {{ fontSize:27, }}>CÁ NHÂN</Text>
                        <View style = {{ borderWidth:0.3, width: width/2 - 60, marginTop:10}}></View>
                    </View>
                    <View style = { styles.sub_box1_2 }>
                        <Image style = {{height:130, width: 100}} source={require("../image/1.jpg")}/>
                    </View>
               </View>
               <View style = { styles.box2 }> 
                    <Text>Họ và tên:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {"Phạm Văn Mèo"}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text>Ngày tháng năm sinh:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {"01/01/2000"}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text>Căn cước/CMND:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {"123456789"}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <View style = {{ height: 22, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <Text>Dân tộc:</Text>
                        </View>
                        <View style = {{ flex:1,}}>
                            <Text>Giới tính:</Text>
                        </View>
                    </View>
                    <View style = {{ height: 42, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_work }
                                editable = { false }
                                value = {"Meow meow"}
                            />   
                        </View>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_sex }
                                editable = { false }
                                value = {"Nam"}
                            />   
                        </View>
                    </View>
                    <View style = {{ marginBottom:10 }}></View>
                    <Text>Quê quán:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {"Hành tinh meow meow"}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text>Nơi ở hiện tại:</Text>
                    <TextInput
                        style = { [styles.text_ip_name, {backgroundColor:"#DCDCDC", color :"black"}] }
                        value = {"Hành tinh meow meow"}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <View style = {{ height: 22, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <Text>Nghề nghiệp:</Text>
                        </View>
                        <View style = {{ flex:1,}}>
                            <Text>Tình trạng kết hôn:</Text>
                        </View>
                    </View>
                    <View style = {{ height: 42, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1, }}>
                            <TextInput
                                style = { [styles.text_ip_work, {backgroundColor:"#DCDCDC", color :"black"}] }
                                value = {"Anti loài người"}
                            />   
                        </View>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_sex }
                                editable = { false }
                                value = {"Chưa kết hôn"}
                            />   
                        </View>
                    </View>
                    <View style = {{ marginBottom:10 }}></View>

                    <Text>Tiền án tiền sự:</Text>
                    <TextInput
                        style = { styles.text_ip_juve }
                        editable = { false }
                        multiline={true}
                        value = {"Thanh niên này bị bắt quá nhiều lần vi tội chống đối loài người. Tật xấu kể không thể nào hết. Nhưng mà toàn được tha thứ vì sự dễ thương của mình  "}
                    />
                    
               </View>
               <View style = { styles.box_button }>
                    <TouchableOpacity
                        style = { styles.button }
                    >
                        <Text style = {{ fontSize: 19, color: "white"}}> Cập nhật thông tin</Text>
                    </TouchableOpacity>
                </View>
               <View style = {{ marginBottom:30 }}></View>
            </ScrollView>
            </>
        )
    }
}
var styles = StyleSheet.create({
    scroll:{
        flex:1
    },
    box1:{
        height:150,
        width:width,
        flexDirection:"row",
        marginTop:10,
        marginBottom: 15
    },
    sub_box1_1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    sub_box1_2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box2:{
        flex:1,
        marginLeft: 30,
    },
    text_ip_name:{
        height:42,
        width: width - 60,
        borderWidth: 0.5,
        backgroundColor:"#778899",
        color: "white",
        fontSize: 16
    },
    text_ip_work:{
        height:42,
        width: width/2 - 30,
        borderWidth: 0.5,
        backgroundColor:"#778899",
        color: "white",
        fontSize: 16
    },
    text_ip_sex:{
        height:42,
        width: width/2 - 60,
        borderWidth: 0.5,
        backgroundColor:"#778899",
        color: "white",
        fontSize: 16
    },
    text_ip_juve:{
        height:150,
        width: width - 60,
        borderWidth: 0.5,
        backgroundColor:"#778899",
        color: "white",
        fontSize: 16,
        textAlignVertical: 'top'
    },
    box_button:{
        width:width - 40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        marginLeft: 20
    },
    button:{
        width:290,
        height:40,
        backgroundColor: "#00008B",
        alignItems:"center",
        justifyContent:"center"      
    },
})

