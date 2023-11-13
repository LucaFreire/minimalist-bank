import { Button, View, TextInput, Text, Pressable } from "react-native";
import { useCallback, useState } from "react";
import style from "./style";
import axios from "axios";

export default function registerPage(props) {

    const [email, setEmail] = useState();
    const [fullName, setFullName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [document, setDocument] = useState();

    const [birthDate, setBirthDate] = useState();

    const handleRegister = useCallback(async () => {
        if (!email || !fullName || !password || !document)
            return;

        const registerData = {
            fullName: fullName,
            birthDate: birthDate,
            password: password,
            document: document,
            email: email,
        }

        try {
            const res = await axios.post("http://localhost:8080/user/register", registerData);
            props.navigation.navigate('login')
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <View style={style.main}>
            <Text style={style.text}>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={e => setEmail(e)}
            />

            <Text style={style.text}>Full Name</Text>
            <TextInput
                style={style.input}
                onChangeText={e => setFullName(e)}
            />

            <Text style={style.text}>Document</Text>
            <TextInput
                style={style.input}
                onChangeText={e => setDocument(e)}
            />

            <Text style={style.text}>BirthDate</Text>
            <TextInput
                style={style.input}
                onChangeText={e => setBirthDate(e)}
            />

            <Text style={style.text}>Password</Text>
            <TextInput
                style={style.input}
                onChangeText={e => setPassword(e)}
                secureTextEntry={true}
            />

            <Text style={style.text}>Confirm Password</Text>
            <TextInput
                style={style.input}
                onChangeText={e => setConfirmPassword(e)}
                secureTextEntry={true}
            />

            <Pressable onPress={() => handleRegister()} style={style.signInButton}>
                <Text style={style.text}>Sign In</Text>
            </Pressable>
        </View>
    )
}