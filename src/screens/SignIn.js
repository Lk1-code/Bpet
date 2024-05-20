import React,{useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Touchable, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";

import supabase from '../Api'
import SignInput from '../components/SignInput';
import PreloadLogo from '../assets/PreloadLogo.svg';
import EmailIcon from '../assets/EmailIcon.svg';
import PasswordIcon from '../assets/Password.svg'
import { TouchableOpacity } from "react-native-gesture-handler";


import Api from "../Api";

const SignIn = () =>{

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setpasswordField] = useState('');

    const handleMessageButtonClick = () =>{
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
    const handleSignClick = async () =>{
        if(emailField != '' && passwordField != ''){

            const {data,error} = await supabase
            .from("User")
            .insert({emailField,passwordField})

            if(json.token){
                alert("Deu certo!");
            }else{
                alert('Email e/ou senha errados!');
            }

        }else{
            alert("Preencha os campos!")
        }
    }

    return(
        <SafeAreaView style = {styles.Container}>
            <PreloadLogo width = "100%" height= "160" />
            <View style = {styles.InputArea}>
                <SignInput 
                IconSvg={EmailIcon}
                placeholder="Digite seu Email"
                value={emailField}
                onChangeText={(text) => setEmailField(text)}
                />
                <SignInput 
                IconSvg={PasswordIcon}
                placeholder="Digite sua Senha"
                value={passwordField}
                onChangeText={(text) => setpasswordField(text)}
                password = {true}
                />
                <TouchableOpacity onPress={handleSignClick}
                 style = {styles.CustomButton}>
                    <Text style = {styles.CustomButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleMessageButtonClick}
             style = {styles.SignMessageButton}>
                <Text style = {styles.SignMessageButtonText}>Ainda não possui conta?</Text>
                <Text style = {styles.SignMessageButtonTextBold}>Cadastre-se</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fe81f5',
    },
    InputArea:{
        padding:40,
        width: '100%'
    },
    CustomButton:{
        height:60,
        backgroundColor:"#fd4ef2",
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    CustomButtonText:{
        fontSize:18,
        color:"#fff"
    },
    SignMessageButton:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50,
        marginBottom:20,

    },
    SignMessageButtonText:{
        fontSize:16,
        color:"#268596"
    },
    SignMessageButtonTextBold:{
        fontSize:16,
        color:"#268596",
        fontWeight:'bold',
        marginLeft:5,
    }
});
export default SignIn