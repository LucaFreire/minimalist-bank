import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useCallback, useState } from "react";
import style from "./style";
import axios from "axios";
import { Icon } from 'react-native-paper';
import { TextInput } from 'react-native-paper';


export default function registerPage(props) {

    const [email, setEmail] = useState();
    const [fullName, setFullName] = useState();
    const [password, setPassword] = useState();
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
            <TouchableOpacity style={{ width: '30px', padding: '10px' }} onPress={() => props.navigation.navigate('login')}>
                <Icon
                    source="arrow-left"
                    color="white"
                    size={30}
                />
            </TouchableOpacity>
            <View style={style.inputContent}>

                <Text style={style.text}>Register</Text>

                <TextInput
                    style={style.input}
                    onChangeText={e => setFullName(e)}
                    selectionColor="#41B6E6"
                    activeOutlineColor="#41B6E6"
                    outlineColor="#41B6E6"
                    underlineColor="#41B6E6"
                    activeUnderlineColor="#41B6E6"
                    label="Full name"
                />

                <TextInput
                    style={style.input}
                    onChangeText={e => setEmail(e)}
                    label="Email"
                    selectionColor="#41B6E6"
                    activeOutlineColor="#41B6E6"
                    outlineColor="#41B6E6"
                    underlineColor="#41B6E6"
                    activeUnderlineColor="#41B6E6"
                />

                <TextInput
                    style={style.input}
                    onChangeText={e => setDocument(e)}
                    selectionColor="#41B6E6"
                    activeOutlineColor="#41B6E6"
                    outlineColor="#41B6E6"
                    underlineColor="#41B6E6"
                    activeUnderlineColor="#41B6E6"
                    label="Document"
                />

                <TextInput
                    style={style.input}
                    onChangeText={e => setBirthDate(e)}
                    selectionColor="#41B6E6"
                    activeOutlineColor="#41B6E6"
                    outlineColor="#41B6E6"
                    underlineColor="#41B6E6"
                    activeUnderlineColor="#41B6E6"
                    label="BirthDate"
                />

                <TextInput
                    style={style.input}
                    onChangeText={e => setPassword(e)}
                    selectionColor="#41B6E6"
                    activeOutlineColor="#41B6E6"
                    outlineColor="#41B6E6"
                    underlineColor="#41B6E6"
                    activeUnderlineColor="#41B6E6"
                    label="Password"
                    secureTextEntry={true}
                />

                <Pressable onPress={() => handleRegister()} style={style.signInButton}>
                    <Text style={style.text}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    )
}