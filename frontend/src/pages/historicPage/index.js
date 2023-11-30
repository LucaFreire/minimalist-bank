import { TextInput, TouchableOpacity, View, Text, Pressable, Image, ScrollView } from "react-native"
import { useCallback, useEffect, useState } from "react"
import styles from "./style"
import HistoricCard from "../../components/historicCard"
import { Icon } from 'react-native-paper';
import axios from "axios"

export default function historicPage(props) {

    const [transaction, setTransaction] = useState([]);
    const token = sessionStorage.getItem('token')

    const userName = "lucas freire"; // GEt the user's name

    const handleGetTransactions = useCallback(async () => {
        try {
            await axios.get("http://localhost:8080/transaction/getAll/" + token, { headers: { "Authorization": "Bearer " + token } }).then((res) => {
                setTransaction(res.data);
            });

        } catch (error) {
            console.log(error);
        }
    })

    useEffect(() => {
        handleGetTransactions()
    }, [])

    const renderCards = () => {
        return transaction.map((item, index) => {
            return <HistoricCard transactionData={item} key={index} />
        })
    }

    return (
        <>
            <ScrollView style={styles.main}>
                <TouchableOpacity style={{ width: '30px', padding: '10px' }} onPress={() => props.navigation.navigate('home')}>
                    <Icon
                        source="arrow-left"
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={{ fontSize: 28, fontWeight: 700, color: 'white' }}>Your Historic</Text>
                    {renderCards()}
                </View>
            </ScrollView>
        </>
    )
}