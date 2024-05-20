import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Touchable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";


import supabase from "../services/supabase";


import SignInput from '../components/SignInput';
import PreloadLogo from '../assets/PreloadLogo.svg';
import EmailIcon from '../assets/EmailIcon.svg';
import NameIcon from '../assets/NameIconsvg.svg'
import PasswordIcon from '../assets/Password.svg'
import { TouchableOpacity } from "react-native-gesture-handler";


const SignUp = () => {

    const navigation = useNavigation();

    const  [emailField, setEmailField] = useState('');
    const  [nameField, setNameField] = useState('');
    const  [passwordField, setpasswordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }
    const handleSignClick = async () => {
            const { data, error } = await supabase
                .from('User')
                .insert([
                    { name: 'Lucas' },
                    { email: 'lucasm1225@gmail.com' },
                    { senha : '12345'}
                ])
                .select()
            alert("Cadastro concluido")
    }

    return (
        <SafeAreaView style={styles.Container}>
            <PreloadLogo width="100%" height="160" />
            <View style={styles.InputArea}>
                <SignInput
                    IconSvg={NameIcon}
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={(text) => setNameField(text)}
                />
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
                    password={true}
                />
                <TouchableOpacity onPress={handleSignClick}
                    style={styles.CustomButton}>
                    <Text style={styles.CustomButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleMessageButtonClick}
                style={styles.SignMessageButton}>
                <Text style={styles.SignMessageButtonText}>Já possui uma conta?</Text>
                <Text style={styles.SignMessageButtonTextBold}>Faça Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fe81f5',
    },
    InputArea: {
        padding: 40,
        width: '100%'
    },
    CustomButton: {
        height: 60,
        backgroundColor: "#fd4ef2",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CustomButtonText: {
        fontSize: 18,
        color: "#fff"
    },
    SignMessageButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,

    },
    SignMessageButtonText: {
        fontSize: 16,
        color: "#268596"
    },
    SignMessageButtonTextBold: {
        fontSize: 16,
        color: "#268596",
        fontWeight: 'bold',
        marginLeft: 5,
    }
});
export default SignUp