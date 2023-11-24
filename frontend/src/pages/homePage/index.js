import { TextInput, TouchableOpacity, View, Text, Pressable } from "react-native"
import { useCallback, useEffect, useState } from "react"
import HeaderHome from "../../components/headerHome"
import CurrencyData from "../../components/CurrencyData"

import { ActivityIndicator, MD2Colors } from 'react-native-paper';


import axios from "axios"

import styles from "./style"

export default function homePage(props) {

    const Reload = (isOn = true) => (
        <ActivityIndicator animating={isOn} color={MD2Colors.red800} />
    );

    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState()
    const [document, setDocument] = useState()
    const [balance, setBalance] = useState()
    const [name, setName] = useState()


    const token = sessionStorage.getItem("token")

    const handleGetUserData = useCallback(async () => {

        try {
            Reload(true)
            const res = await axios.post("http://localhost:8080/user/token", token, { headers: { "Authorization": "Bearer " + token } }).then(Reload(false));
            const userData = res.data;

            let fullName = res.data.name.split(" ")

            setEmail(userData.email);
            setName(fullName[fullName.length - 1]);
            setBalance(userData.balance);
            setFullName(userData.fullName);
            setDocument(userData.document);

        } catch (error) {
            console.log(error);
        }
    })

    useEffect(() => {
        handleGetUserData()
    }, [])

    return (
        <View style={styles.main}>
            <HeaderHome name={name} />
            <CurrencyData user={balance} />

            <View style={styles.buttonsSection}>
                <Pressable style={styles.buttons} onPress={() => props.navigation.navigate('historic')}>
                    <Text>Historic</Text>
                </Pressable>
                <Pressable style={styles.buttons} onPress={() => props.navigation.navigate('transfer')}>
                    <Text>Transfer</Text>
                </Pressable>
            </View>

        </View>
    )
}