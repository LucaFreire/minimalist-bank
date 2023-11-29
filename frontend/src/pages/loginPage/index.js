import { TouchableOpacity, Image, View, Text, Pressable } from "react-native"
import { useCallback, useState } from "react"
import { TextInput } from 'react-native-paper';

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
            console.log(res);
            if (res.data == null)
                return;
            sessionStorage.setItem("token", res.data);
            props.navigation.navigate('home');
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <View style={styles.main}>
            <Image source={require("../../../assets/logo.png")} style={styles.logo} />
            <TextInput
                style={styles.input}
                onChangeText={e => setEmail(e)}
                label="Email"
                selectionColor="#41B6E6"
                activeOutlineColor="#41B6E6"
                outlineColor="#41B6E6"
                underlineColor="#41B6E6"
                activeUnderlineColor="#41B6E6"
            />

            <TextInput
                onChangeText={e => setPassword(e)}
                style={styles.input}
                label="Password"
                selectionColor="#41B6E6"
                activeOutlineColor="#41B6E6"
                outlineColor="#41B6E6"
                underlineColor="#41B6E6"
                activeUnderlineColor="#41B6E6"
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