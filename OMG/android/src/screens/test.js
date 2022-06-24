<ScrollView style = { styles.scroll }
>
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
            value = {"Phạm Văn A"}
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
        <Text>Dân tộc:</Text>
        <TextInput
            style = { styles.text_ip_name }
            editable = { false }
            value = {"Mèo méo meo"}
        />
        <View style = {{ marginBottom:10 }}></View>
        <View style = {{ height: 22, width: width, flexDirection:"row"}}>
            <View style = {{ flex:1}}>
                <Text>Nghề nghiệp:</Text>
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
                    value = {"Anti loài người"}
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

   </View>
</ScrollView>