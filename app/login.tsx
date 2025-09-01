import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import axios from "axios";
import API_BASE_URL from "./../config";

export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch(API_BASE_URL + '/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle success (e.g. navigate, store token)
                console.log('Login successful:', data);
            } else {
                // Handle server-side error
                console.error('Login failed:', data.message || 'Unknown error');
            }
            } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <View style={style.container}>
            <Text>Email</Text>
            <TextInput placeholder='Enter your email here...'/>
            <Text>Password</Text>
            <TextInput placeholder='Enter your password here...' secureTextEntry/>
            <Button title="Submit" onPress={handleSubmit}/>
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