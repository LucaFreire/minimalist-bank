import { TextInput, TouchableOpacity, Button, View, Text } from "react-native"
import { useCallback, useState } from "react"

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
            const res = await axios.post("http://localhost:3030/user/login/", loginData);
            props.navigation.navigate('home')
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    })

    return (<View>
        <View>
            <Text>Email</Text>
            <TextInput
                onChangeText={e => setEmail(e)}
                style={styles.input}
                value={email}
            />
        </View>

        <View>
            <Text>Password</Text>
            <TextInput
                onChangeText={e => setPassword(e)}
                style={styles.input}
                value={password}
                secureTextEntry={true}
            />
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('register')}>
            <Text>Create Account</Text>
        </TouchableOpacity>

        <Button
            onPress={() => handleLogin()}
            title="Sign In"
        />

    </View>)
}