import { View, Text, Pressable, Button, ScrollView, TouchableOpacity, Image } from "react-native"
import { useCallback, useState } from "react"
import { TextInput, Icon } from "react-native-paper"
import styles from "./style"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import BalanceData from "../../components/balanceData";

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
            <TouchableOpacity style={{ width: '30px', padding: '10px' }} onPress={() => props.navigation.navigate('home')}>
                <Icon
                    source="arrow-left"
                    color="white"
                    size={30}
                />
            </TouchableOpacity>

            <View style={styles.component}>
                <BalanceData balance={balance} />
                <Text style={styles.text} >Transaction's information</Text>

                <TextInput
                    style={styles.inputContent}
                    onChangeText={e => setValue(e)}
                    selectionColor="#41B6E6"
                    activeOutlineColor="#41B6E6"
                    outlineColor="#41B6E6"
                    underlineColor="#41B6E6"
                    activeUnderlineColor="#41B6E6"
                    label="Value"
                />

                <TextInput
                    style={styles.inputContent}
                    onChangeText={e => setPayee(e)}
                    selectionColor="#41B6E6"
                    activeOutlineColor="#41B6E6"
                    outlineColor="#41B6E6"
                    underlineColor="#41B6E6"
                    activeUnderlineColor="#41B6E6"
                    label="Email or Document"
                />

                <TouchableOpacity onPress={() => handleTransaction()} style={styles.transferButton} >
                    <Text>Transfer</Text>
                </TouchableOpacity>

                <Text>{requestError}</Text>
            </View>
        </ScrollView>
    )
}