import { TextInput, TouchableOpacity, View, Text, Pressable } from "react-native"
import { useCallback, useState } from "react"

import axios from "axios"
import styles from "./style"

export default function loginPage(props) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = useCallback(async () => {

        if (!email || !password)
            return;

        const loginData = {
            email: email,
            password: password
        }

        try {
            const res = await axios.post("http://localhost:8080/auth/login", loginData);
            sessionStorage.setItem("token", res.data);
            props.navigation.navigate('home');
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <View style={styles.main}>

            <Text style={styles.label}>Email</Text>
            <TextInput
                onChangeText={e => setEmail(e)}
                style={styles.input}
                value={email}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                onChangeText={e => setPassword(e)}
                style={styles.input}
                value={password}
                secureTextEntry={true}
            />

            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => props.navigation.navigate('register')}>
                    <Text style={styles.linkButton}>Create Account</Text>
                </TouchableOpacity>

                <Pressable style={styles.button} onPress={() => handleLogin()}>
                    <Text style={styles.text}>Sign In</Text>
                </Pressable>
            </View>
        </View >
    )
}