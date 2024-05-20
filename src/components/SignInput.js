import React from "react";
import { StyleSheet , View, TextInput} from "react-native";



const styles = StyleSheet.create({
    InputArea:{
        width: '100%',
        height: 60,
        backgroundColor:'#fecdfb',
        flexDirection:'row',
        paddingLeft:15,
        borderRadius: 30,
        alignItems:'center',
        marginBottom: 15,
    },
    Input:{
        flex:1,
        fontSize:16,
        color: "black"
    },
});

export default ({IconSvg, placeholder, value, onChangeText, password}) =>{
    return(
        <View style = { styles.InputArea}>
            <IconSvg width = "24" height = "24" fill = "#ffe6fd" />
            <TextInput style =
             {styles.Input} 
             placeholder={placeholder} 
             value={value}
             onChangeText={onChangeText}
             secureTextEntry = {password}
             ></TextInput>
        </View>
    )
}