import { TextInput, View, Text, Pressable, Button, ScrollView, TouchableOpacity, Image } from "react-native"
import { useCallback, useState } from "react"
import styles from "./style"
import BalanceComponent from "../../components/balanceComponent"
import axios from "axios"

export default function transferPage(props) {

    const [value, setValue] = useState();
    const [payee, setPayee] = useState();
    const [isRequestDone, setIsRequestDone] = useState()
    const [requestError, setRequestError] = useState('')
    
    const userData = sessionStorage.getItem("token")

    const handleTransaction = useCallback(async () => {

        transactionDTO = {
            payerID: userData,
            payeeAnyIdentifier: payee,
            value: value
        };

        try {
            const res = (await axios.post("", transactionDTO)).data;
            props.navigation.navigate("home")
        } catch (error) {
            isRequestDone(false)
            setRequestError(error)
        }
    });

    return (
        <ScrollView style={styles.main}>
            <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                <Image source={require("../../../assets/arrow.png")} style={styles.arrowStyle} />
            </TouchableOpacity>

            <View style={styles.component}>
                <BalanceComponent />
                <Text>Payee's information</Text>
                <TextInput style={styles.input}></TextInput>

                <Text>Value</Text>
                <TextInput style={styles.input}></TextInput>

                <TouchableOpacity onPress={() => handleTransaction} style={styles.transferButton} >
                    <Text>Transfer</Text>
                </TouchableOpacity>

                <Text>{requestError}</Text>
            </View>
        </ScrollView>
    )
}