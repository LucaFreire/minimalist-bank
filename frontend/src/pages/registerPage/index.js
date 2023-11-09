import { Button, View, TextInput } from "react-native";
import { useCallback, useState } from "react";
import style from "./style";

export default function registerPage(props) {

    const [email, setEmail] = useState();
    const [fullName, setFullName] = useState();
    const [password, setPassword] = useState();
    const [document, setDocument] = useState();

    const handleRegister = useCallback(async () => {
        if (!email || !fullName || !password || !CPF)
            return;

        const registerData = {
            fullName: fullName,
            password: password,
            document: document,
            email: email,
        }

        try {
            const res = await axios.post("http://localhost:3030/user/register/", registerData);
            props.navigation.navigate('login')
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <View>
            <Text>Register</Text>

            <View>
                <Text>Email</Text>
                <TextInput
                    onChangeText={e => setEmail(e)}
                />
            </View>

            <View>
                <Text>Full Name</Text>
                <TextInput
                    onChangeText={e => setFullName(e)}
                />
            </View>

            <View>
                <Text>Document</Text>
                <TextInput
                    onChangeText={e => setDocument(e)}
                />
            </View>

            <View>
                <Text>Password</Text>
                <TextInput
                    onChangeText={e => setPassword(e)}
                    secureTextEntry={true}
                />
            </View>

            <View>
                <Button
                    onPress={() => handleRegister()}
                    title="Sing in"
                    color="#006EE4" />
            </View>
        </View>
    )



}