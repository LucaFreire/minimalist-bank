import { TextInput, TouchableOpacity, View, Text, Pressable, Image, ScrollView } from "react-native"
import { useCallback, useEffect, useState } from "react"
import styles from "./style"
import HistoricCard from "../../components/historicCard"
import axios from "axios"

export default function historicPage(props) {

    const [transaction, setTransaction] = useState([]);

    const token = sessionStorage.getItem('token')


    const handleGetTransactions = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:8080/transaction/getAll/" + token, { headers: { "Authorization": "Bearer " + token }});
            setTransaction(res.data)
            console.log(transaction);
        } catch (error) {
            console.log(error);
        }
    })

    useEffect(() => {
        handleGetTransactions()
    }, [])

    return (
        <>
            <ScrollView style={styles.main}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image source={require("../../../assets/arrow.png")} style={styles.arrowStyle} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <h3>Your Historic</h3>
                    {/* <HistoricCard /> */}
                    {transaction.length}
                </View>
            </ScrollView>
        </>
    )
}