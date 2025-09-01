import { StyleSheet, Text, TextInput, View } from 'react-native';
// import axios from "axios";
// import API_BASE_URL from "./config";

export default function LoginScreen(){
    return (
        <View style={style.container}>
            <Text>Email</Text>
            <TextInput placeholder='Enter your email here...'/>
            <Text>Password</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})