import { TextInput, View, Text, Pressable, Button, ScrollView, TouchableOpacity, Image } from "react-native"
import { useCallback, useState } from "react"
import styles from "./style"
import CurrencyData from "../../components/CurrencyData"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';

export default function transferPage(props) {

    const dispatch = useDispatch();
    const { balance } = useSelector((state) => state.user);
    const [value, setValue] = useState();
    const [payee, setPayee] = useState();
    const [requestError, setRequestError] = useState('')

    const userToken = sessionStorage.getItem("token")

    const handleTransaction = useCallback(async () => {
        try {
            const transactionDTO = {
                token: userToken,
                payeeAnyIdentifier: payee,
                value: value
            };

            const res = await axios.post("http://localhost:8080/transaction/transaction", transactionDTO, { headers: { "Authorization": "Bearer " + userToken } });
            console.log(res.data);
            props.navigation.navigate("home")

        } catch (error) {
            console.log(error);
        }
    });

    return (
        <ScrollView style={styles.main}>
            <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                <Image source={require("../../../assets/arrow.png")} style={styles.arrowStyle} />
            </TouchableOpacity>

            <View style={styles.component}>
                <CurrencyData balance={balance} />
                <Text>Payee's information</Text>
                <TextInput onChangeText={e => setPayee(e)} style={styles.input}></TextInput>

                <Text>Value</Text>
                <TextInput onChangeText={e => setValue(e)} style={styles.input}></TextInput>

                <TouchableOpacity onPress={() => handleTransaction()} style={styles.transferButton} >
                    <Text>Transfer</Text>
                </TouchableOpacity>

                <Text>{requestError}</Text>
            </View>
        </ScrollView>
    )
}