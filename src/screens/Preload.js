import React,{useEffect} from "react";
import { StyleSheet, Text, SafeAreaView, ActivityIndicator} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import PreloadLogo from '../assets/PreloadLogo.svg'

const Preload =  () =>{
    

    const navigation = useNavigation();
    useEffect(() =>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if(token !== null){

            }else{
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    },[]);
    
    return(
        <SafeAreaView style = {styles.Container}>
           <PreloadLogo width="100%" height="160"/> 
           <ActivityIndicator size={"large"} color={"#FFFFFF"} style = {styles.LoadingIcon}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#fe9af7",
    },
    LoadingIcon:{
        marginTop:50,

    }
});
export default Preload